var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([1],{22:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},81:function(e,t,n){n(82),n(83)},82:function(e,t){},83:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(84),i=r(a),s=n(86),u=r(s),f=n(21),l=r(f),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(91),h=r(d),p=n(94),g=r(p),v=n(95),m=r(v),y=n(0),b=r(y),w="http://49.234.40.20:3000",x=function(){function e(){o(this,e),this.data={isfocus:!1,submitDis:!1,sendCodeText:"发送验证码",sendCodeDis:!1,code:"后台返回的验证码",userInputCode:"用户输入的验证码",only:!0,sex:["男","女"],formData:{username:"",address_prov:"北京市",phone:"",sex:"男",company:"",error:""},provins:["北京市","天津市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西","海南省","重庆市","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海","宁夏","新疆"],defaultSexIndex:0,defaultProvinsIndex:0,sexIndex:0,provinsIndex:0,pickerShow:{provins:!1,sex:!1}},this.computed={},this.watch={},this.methods={bindblurevent:function(){this.isfocus=!1},submitForm:function(e){var t=this,n=this,r=e.detail.type;if((0,l.default)({message:r+" button"}),console.log(this.formData),this.submitDis=!0,!this.validator(this.formData))return console.log("验证失败"),console.log(this.formData.error),this.submitDis=!1,!1;console.log("验证成功"),(0,u.default)({url:w+"/api/addUser_crm",data:this.formData}).then(function(e){(0,l.default)({message:JSON.stringify(e),duration:2e3}),g.default.setItem("userSign",n.code),(0,i.default)({path:"/pages/complate/complate",query:{title:"提交成功",mainMessage:"可以凭此页面向工作人员领取精美礼品",subMessage:""}})},function(e){(0,l.default)({message:JSON.stringify(e),duration:2e3}),t.submitDis=!1,console.log(e)}),this.userInputCode===this.code||((0,l.default)({message:"验证码输入有误",duration:2e3}),this.submitDis=!1)},validator:function(e){var t=this;return new m.default({multiCheck:!0,onMessage:function(e){t.formData.error=e},rules:{username:{required:!0},sex:{required:!0},company:{required:!0},phone:{required:!0,mobile:!0},address_prov:{required:!0}},messages:{username:{required:"请输入用户名"},sex:{required:"请输入密码"},company:{required:"请输入工作单位"},phone:{required:"请输入手机号",mobile:"手机号格式不正确"},address_prov:{required:"请输入所在地"}}}).checkData(e)},provinsSelectchange:function(e){this.provinsIndex=this.defaultProvinsIndex=e.detail.index,this.formData.address_prov=this.provins[e.detail.index]},sexSelectchange:function(e){this.sexIndex=this.defaultSexIndex=e.detail.index,this.formData.sex=this.sex[e.detail.index]},showClick:function(e){var t=e.target.id;this.pickerShow[t]=!0},cancel:function(e){console.log(e);var t=this.pickerShow;for(var n in t)t[n]=!1},confirm:function(e,t){console.log(e);var n=this.pickerShow;for(var r in n)n[r]=!1},sendCode:function(){var e=this,t=Date.parse(new Date)/1e3;Math.floor(10*Math.random()+1);if(11!=this.formData.phone.toString().length||!/^1/.test(this.formData.phone.toString()))return(0,l.default)({message:"手机号错误，请填写正确的手机号",duration:2e3}),!1;this.time(10),this.sendCodeDis=!0,(0,u.default)({url:w+"/api/vCode",data:{mobile:this.formData.phone,nationcode:"86",time:t}}).then(function(t){t.currentAuthority.result?(0,l.default)({message:t.currentAuthority.errmsg,duration:2e3}):(0,l.default)({message:"验证码已发送至您手机",duration:2e3}),e.code=t.currentAuthority.code},function(e){(0,l.default)({message:JSON.stringify(e),duration:2e3}),console.log(e)})},time:function(e){var t=this;0==e?(e=60,this.sendCodeText="发送验证码",this.sendCodeDis=!1):e>0&&(this.sendCodeText="重新发送"+e,e--,setTimeout(function(){t.time(e)},1e3))},nameInput:function(e){this.formData.username=e.detail.value},mobileInput:function(e){this.formData.phone=e.detail.value},codeInput:function(e){var t=(0,h.default)(e.detail.value);this.userInputCode=t},companyInput:function(e){this.formData.company=e.detail.value}}}return c(e,[{key:"beforeCreate",value:function(){g.default.getItem("userSign")&&(0,i.default)({path:"/pages/complate/complate",query:{title:"您已领取过啦",mainMessage:"您已经参与过活动，谢谢您的热情参与",subMessage:""}})}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new x,t.default=b.default.createPage(t.default).getOptions()},84:function(e,t,n){function r(e){var t=e.query||{},n=e.path||"",r=e.url||"";a.default.navigateTo({path:n,url:r,query:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(85),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},85:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5),i=function(){function e(){r(this,e)}return o(e,[{key:"navigateTo",value:function(e){var t=e.path,n=e.query;t=(0,a.buildQueryStringUrl)(n,t),qq.navigateTo({url:t})}}]),e}();t.default=new i,n(1)(t.default)},86:function(e,t,n){function r(e){return e.method="POST",(0,a.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(87),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},87:function(e,t,n){function r(e){var t=e.domain,n=e.url,r=e.data,a=void 0===r?{}:r,u=e.method,f=void 0===u?"GET":u,l=e.header,c=void 0===l?{}:l,d=e.contentType,h=void 0===d?"form":d,p=e.setting,g=void 0===p?{}:p,v=e.resDataType,m=void 0===v?"json":v;f=f.toUpperCase();var y=g.apiPrefix,b=void 0===y?(0,s.isNeedApiPrefix)(n):y,w=g.jsonp,x=void 0!==w&&w,_=g.credentials,T=void 0===_?"include":_;if(t){n=t+n}else b&&(n="http://192.168.31.59:8000"+n);switch(["GET","PUT","DELETE"].indexOf(f)>-1&&(n=(0,s.buildQueryStringUrl)(a,n),"GET"==f&&(a="")),h){case"form":"string"!=typeof a&&(a=(0,s.buildQueryStringUrl)(a)),c=o({},c,{"Content-Type":"application/x-www-form-urlencoded"});break;case"json":"string"!=typeof a&&(a=JSON.stringify(a)),c=o({},c,{"Content-Type":"application/json"})}return"string"!=typeof a&&(a=""),new Promise(function(e,t){i.default.request({url:n,body:a,setting:{apiPrefix:b,jsonp:x,credentials:T},method:f,headers:c,cb:function(n){var r=n.status,o=n.headers,a=n.data;if(r>=200&&r<300){if("json"===m&&"string"==typeof a)try{a=JSON.parse(a)}catch(e){console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ',e)}e(a)}else"json"===m&&(a=(0,s.tryJsonParse)(a)),o=(0,s.tryJsonParse)(o),t({data:a,headers:o,status:r})}})})}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var a=n(88),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(5)},88:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(89),i=function(){function e(){r(this,e)}return o(e,[{key:"request",value:function(e){var t=e.url,n=e.body,r=e.headers,o=e.method,i=e.cb;qq.request({url:t,data:n,dataType:"text",method:o,header:r,success:function(e){i({status:e.statusCode,data:e.data,headers:(0,a.parseHeader)(e.header)})},fail:function(e){i({status:-1,data:"request failed",headers:"{}"})}})}}]),e}();t.default=new i,n(1)(t.default)},89:function(e,t){function n(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.res=e,t.type="http",t}function r(e){return e.json().catch(function(t){throw t&&(t.type="json",t.res=e),t})}function o(e){var t=new FormData;return Object.keys(e).forEach(function(n){void 0!==e[n]&&t.append(n,e[n])}),t}function a(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];r instanceof Array&&(r=r[0]),t[n.toLowerCase()]=r}),JSON.stringify(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.parseHeader=a;var i={"Content-Type":"application/x-www-form-urlencoded"},s={credentials:"same-origin"},u={form:"application/x-www-form-urlencoded",json:"application/json"};t.default={defaultHeaders:i,defaultOptions:s,defaultType:"form",contentTypeMap:u,filterStatus:n,parseJSON:r,toForm:o,parseHeader:a}},91:function(e,t,n){!function(){var t=n(92),r=n(22).utf8,o=n(93),a=n(22).bin,i=function(e,n){e.constructor==String?e=n&&"binary"===n.encoding?a.stringToBytes(e):r.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var s=t.bytesToWords(e),u=8*e.length,f=1732584193,l=-271733879,c=-1732584194,d=271733878,h=0;h<s.length;h++)s[h]=16711935&(s[h]<<8|s[h]>>>24)|4278255360&(s[h]<<24|s[h]>>>8);s[u>>>5]|=128<<u%32,s[14+(u+64>>>9<<4)]=u;for(var p=i._ff,g=i._gg,v=i._hh,m=i._ii,h=0;h<s.length;h+=16){var y=f,b=l,w=c,x=d;f=p(f,l,c,d,s[h+0],7,-680876936),d=p(d,f,l,c,s[h+1],12,-389564586),c=p(c,d,f,l,s[h+2],17,606105819),l=p(l,c,d,f,s[h+3],22,-1044525330),f=p(f,l,c,d,s[h+4],7,-176418897),d=p(d,f,l,c,s[h+5],12,1200080426),c=p(c,d,f,l,s[h+6],17,-1473231341),l=p(l,c,d,f,s[h+7],22,-45705983),f=p(f,l,c,d,s[h+8],7,1770035416),d=p(d,f,l,c,s[h+9],12,-1958414417),c=p(c,d,f,l,s[h+10],17,-42063),l=p(l,c,d,f,s[h+11],22,-1990404162),f=p(f,l,c,d,s[h+12],7,1804603682),d=p(d,f,l,c,s[h+13],12,-40341101),c=p(c,d,f,l,s[h+14],17,-1502002290),l=p(l,c,d,f,s[h+15],22,1236535329),f=g(f,l,c,d,s[h+1],5,-165796510),d=g(d,f,l,c,s[h+6],9,-1069501632),c=g(c,d,f,l,s[h+11],14,643717713),l=g(l,c,d,f,s[h+0],20,-373897302),f=g(f,l,c,d,s[h+5],5,-701558691),d=g(d,f,l,c,s[h+10],9,38016083),c=g(c,d,f,l,s[h+15],14,-660478335),l=g(l,c,d,f,s[h+4],20,-405537848),f=g(f,l,c,d,s[h+9],5,568446438),d=g(d,f,l,c,s[h+14],9,-1019803690),c=g(c,d,f,l,s[h+3],14,-187363961),l=g(l,c,d,f,s[h+8],20,1163531501),f=g(f,l,c,d,s[h+13],5,-1444681467),d=g(d,f,l,c,s[h+2],9,-51403784),c=g(c,d,f,l,s[h+7],14,1735328473),l=g(l,c,d,f,s[h+12],20,-1926607734),f=v(f,l,c,d,s[h+5],4,-378558),d=v(d,f,l,c,s[h+8],11,-2022574463),c=v(c,d,f,l,s[h+11],16,1839030562),l=v(l,c,d,f,s[h+14],23,-35309556),f=v(f,l,c,d,s[h+1],4,-1530992060),d=v(d,f,l,c,s[h+4],11,1272893353),c=v(c,d,f,l,s[h+7],16,-155497632),l=v(l,c,d,f,s[h+10],23,-1094730640),f=v(f,l,c,d,s[h+13],4,681279174),d=v(d,f,l,c,s[h+0],11,-358537222),c=v(c,d,f,l,s[h+3],16,-722521979),l=v(l,c,d,f,s[h+6],23,76029189),f=v(f,l,c,d,s[h+9],4,-640364487),d=v(d,f,l,c,s[h+12],11,-421815835),c=v(c,d,f,l,s[h+15],16,530742520),l=v(l,c,d,f,s[h+2],23,-995338651),f=m(f,l,c,d,s[h+0],6,-198630844),d=m(d,f,l,c,s[h+7],10,1126891415),c=m(c,d,f,l,s[h+14],15,-1416354905),l=m(l,c,d,f,s[h+5],21,-57434055),f=m(f,l,c,d,s[h+12],6,1700485571),d=m(d,f,l,c,s[h+3],10,-1894986606),c=m(c,d,f,l,s[h+10],15,-1051523),l=m(l,c,d,f,s[h+1],21,-2054922799),f=m(f,l,c,d,s[h+8],6,1873313359),d=m(d,f,l,c,s[h+15],10,-30611744),c=m(c,d,f,l,s[h+6],15,-1560198380),l=m(l,c,d,f,s[h+13],21,1309151649),f=m(f,l,c,d,s[h+4],6,-145523070),d=m(d,f,l,c,s[h+11],10,-1120210379),c=m(c,d,f,l,s[h+2],15,718787259),l=m(l,c,d,f,s[h+9],21,-343485551),f=f+y>>>0,l=l+b>>>0,c=c+w>>>0,d=d+x>>>0}return t.endian([f,l,c,d])};i._ff=function(e,t,n,r,o,a,i){var s=e+(t&n|~t&r)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._gg=function(e,t,n,r,o,a,i){var s=e+(t&r|n&~r)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._hh=function(e,t,n,r,o,a,i){var s=e+(t^n^r)+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._ii=function(e,t,n,r,o,a,i){var s=e+(n^(t|~r))+(o>>>0)+i;return(s<<a|s>>>32-a)+t},i._blocksize=16,i._digestsize=16,e.exports=function(e,n){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var r=t.wordsToBytes(i(e,n));return n&&n.asBytes?r:n&&n.asString?a.bytesToString(r):t.bytesToHex(r)}}()},92:function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var o=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(o>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<e.length;o=++r%4)0!=o&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(r))>>>6-2*o);return n}};e.exports=n}()},93:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},94:function(e,t,n){(function(t){!function(){"use strict";function n(){}var r;r=n,r.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},r.prototype.setItem=function(e,t){this[e]=String(t)},r.prototype.removeItem=function(e){delete this[e]},r.prototype.clear=function(){var e=this;Object.keys(e).forEach(function(t){e[t]=void 0,delete e[t]})},r.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},r.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),t.localStorage?e.exports=localStorage:e.exports=new n}()}).call(t,n(15))},95:function(e,t,n){/*!
 * we-validator
 * version: 2.1.10
 * address: https://github.com/ChanceYu/we-validator#readme
 * author:  ChanceYu <i.fish@foxmail.com>
 * license: MIT
 */
!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=i.default.required.rule,u="undefined"!=typeof wx&&!!wx.showToast,f="undefined"!=typeof my&&!!my.showToast,l="undefined"!=typeof swan&&!!swan.showToast,c="undefined"!=typeof tt&&!!tt.showToast,d="undefined"!=typeof window&&!!window.alert,h=Object.prototype.toString,p=Array.isArray||function(e){return"[object Array]"===h.call(e)},g=function(e){return"[object Function]"===h.call(e)},v=function(e){return"[object RegExp]"===h.call(e)},m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.options=t,this.required=s,this._checkAllRules()}return o(e,[{key:"_showErrorMessage",value:function(t,n){return g(n)?n(t):g(this.options.onMessage)?this.options.onMessage(t):g(e.onMessage)?e.onMessage(t):u?wx.showToast({title:t.msg,icon:"none"}):f?my.showToast({content:t.msg,type:"none"}):l?swan.showToast({title:t.msg,icon:"none"}):c?tt.showToast({title:t.msg,icon:"none"}):void(d&&alert(t.msg))}},{key:"_getErrorMessage",value:function(t,n,r){var o=this.options.messages,a=e.RULES[t].message;if(o.hasOwnProperty(n)&&o[n][t]&&(a=o[n][t]),a)return a=a.replace(/\{(\d)\}/g,function(e,t){return p(r)?r[t]:r})}},{key:"_isRuleInvalid",value:function(t,n){if(!e.RULES.hasOwnProperty(t))return console.warn&&console.warn("没有此验证规则："+t+"，字段："+n),!0}},{key:"_checkAllRules",value:function(){var e=this.options.rules;for(var t in e)for(var n in e[t])this._isRuleInvalid(n,t)}},{key:"checkData",value:function(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3],a=this.options.rules,i=this.options.multiCheck,s=!1,u={};this.data=t;for(var f in a)if(!o||o.hasOwnProperty(f))for(var l in a[f])if(!this._isRuleInvalid(l,f)){if(o){var c=o[f];if(p(c)&&-1===c.indexOf(l))continue}var d=a[f][l],h="";t.hasOwnProperty(f)&&(h=t[f]),g(d)&&(d=d.call(this,h));var v=e.checkValue.call(this,l,h,d,!0);if(!v){s=!0;var m=this._getErrorMessage(l,f,d),y=null;if(r&&m&&(y={name:f,value:h,param:d,rule:l,msg:m},u[f]=y),!i)return y&&this._showErrorMessage(y,n),!1}}return!s||(i&&r&&this._showErrorMessage(u,n),!1)}},{key:"checkFields",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!p(t))throw new Error("第二个参数须为数组");var o={};return t.forEach(function(e){var t=e.split(":"),n=t[0],r=t[1];r?(r=r.split(","),o[n]=r):o[n]=!0}),this.checkData(e,n,r,o)}},{key:"isValid",value:function(e,t){return p(t)?this.checkFields(e,t,null,!1):this.checkData(e,null,!1)}},{key:"addRules",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(this.options.rules,e.rules||{}),Object.assign(this.options.messages,e.messages||{}),this._checkAllRules()}},{key:"removeRules",value:function(e){if(!p(e))throw new Error("参数须为数组");for(var t=0;t<e.length;t++){var n=e[t];delete this.options.rules[n]}}}]),e}();m.RULES={},m.addRule=function(e,t){m.RULES[e]=t},m.checkValue=function(e,t,n,r){var o=m.RULES[e].rule;return v(o)?r?!s(t)||o.test(t):o.test(t):g(o)?"required"===e?s(t):r?!s(t)||o.call(this,t,n):o.call(this,t,n):void 0},m.RULES=i.default,m.required=s,e.exports=m},function(e,t,n){"use strict";e.exports={required:{message:"此字段必填",rule:function(e){if("number"==typeof e)e=e.toString();else if("boolean"==typeof e)return!0;return!!(e&&e.length>0)}},pattern:{message:"不符合此验证规则",rule:function(e,t){return t.test(e)}},email:{message:"请输入有效的电子邮件地址",rule:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},mobile:{message:"请输入11位的手机号码",rule:/^1[345789]\d{9}$/},tel:{message:"请输入座机号",rule:/^(\d{3,4}-)?\d{7,8}$/},url:{message:"请输入有效的网址",rule:/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i},idcard:{message:"请输入18位的有效身份证",rule:/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/},equalTo:{message:"输入值必须和字段 {0} 相同",rule:function(e,t){return e===this.data[t]}},notEqualTo:{message:"输入值不能和字段 {0} 相同",rule:function(e,t){return e!==this.data[t]}},contains:{message:"输入值必须包含 {0}",rule:function(e,t){return e.indexOf(t)>-1}},notContains:{message:"输入值不能包含 {0}",rule:function(e,t){return-1===e.indexOf(t)}},length:{message:"请输入 {0} 个字符",rule:function(e,t){return e.length==t}},minlength:{message:"最少要输入 {0} 个字符",rule:function(e,t){return e.length>=t}},maxlength:{message:"最多可以输入 {0} 个字符",rule:function(e,t){return e.length<=t}},rangelength:{message:"请输入长度在 {0} 到 {1} 之间的字符",rule:function(e,t){return e.length>=t[0]&&e.length<=t[1]}},number:{message:"请输入有效的数字",rule:/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/},digits:{message:"只能输入正整数数字",rule:/^\d+$/},integer:{message:"只能输入整数数字",rule:/^-?\d+$/},min:{message:"请输入大于 {0} 的数字",rule:function(e,t){return"string"==typeof t&&(t=this.data[t]),e>=t}},max:{message:"请输入小于 {0} 的数字",rule:function(e,t){return"string"==typeof t&&(t=this.data[t]),e<=t}},range:{message:"请输入大于 {0} 且小于 {1} 的数字",rule:function(e,t){return e>=t[0]&&e<=t[1]}},chinese:{message:"只能输入中文字符",rule:/^[\u4e00-\u9fa5]+$/},minChinese:{message:"最少输入 {0} 个中文字符",rule:function(e,t){return new RegExp("^[一-龥]{"+t+",}$").test(e)}},maxChinese:{message:"最多输入 {0} 个中文字符",rule:function(e,t){return new RegExp("^[一-龥]{1,"+t+"}$").test(e)}},rangeChinese:{message:"只能输入 {0} 到 {1} 个中文字符",rule:function(e,t){return new RegExp("^[一-龥]{"+t[0]+","+t[1]+"}$").test(e)}},date:{message:"请输入有效的日期",rule:function(e){return!/Invalid|NaN/.test(new Date(e).toString())}},dateISO:{message:"请输入有效的日期（ISO标准格式）",rule:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/},ipv4:{message:"请输入有效的IPv4地址",rule:/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i},ipv6:{message:"请输入有效的IPv6地址",rule:/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i}}}])})}},[81]);