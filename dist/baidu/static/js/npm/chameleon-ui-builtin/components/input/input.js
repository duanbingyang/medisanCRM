var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([4],{355:function(e,t,n){n(356),n(357)},356:function(e,t){},357:function(e,t,n){function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),r=n(358),l=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(l),o=function(){function e(){u(this,e),this.props={cStyle:{type:String,default:""},cstyle:{type:String,default:""},value:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},maxlength:{type:Number,default:140},returnKeyType:{type:String,default:"done"},placerHolderColor:{type:String,default:"#bebebe"},maxValue:{type:Number,default:9007199254740991},minValue:{type:Number,default:-9007199254740991}},this.data={inputValue:""},this.computed={wxPlaceHolderStyle:function(){return"color: "+this.placerHolderColor+";"},isInputNumber:function(){return"number"===this.type},computedStyle:function(){return this.cStyle||this.cstyle}},this.watch={focus:function(e,t){},value:function(e,t){this.inputValue=e}},this.methods={inputEvent:function(e){this.handleDetail(e),this.$cmlEmit("input",{value:this.inputValue}),this.$cmlEmit("inputevent",{value:this.inputValue})},blurEvent:function(e){this.handleDetail(e),this.$cmlEmit("blurevent",{value:this.inputValue}),this.$cmlEmit("blur",{value:this.inputValue})},focusEvent:function(e){this.handleDetail(e),this.$cmlEmit("focusevent",{value:this.inputValue}),this.$cmlEmit("focus",{value:this.inputValue})},confirmEvent:function(e){this.handleDetail(e),this.$cmlEmit("confirmevent",{value:this.inputValue}),this.$cmlEmit("confirm",{value:this.inputValue})},handleDetail:function(e){if(!e)return"";var t=e.detail.value;return this.isInputNumber&&(t=(0,r.getValBetweenMaxAndMin)(t,this.maxValue,this.minValue)),this.inputValue=t||""}}}return i(e,[{key:"mounted",value:function(){this.inputValue=this.value}}]),e}();t.default=new o,t.default=a.default.createComponent(t.default).getOptions()},358:function(e,t,n){function u(e){var t=e.split(";"),n={};return t.forEach(function(e){var t=e.split(":"),u=String(t[0]).replace(/(^\s*)|(\s*)$/g,""),i=String(t[1]).replace(/(^\s*)|(\s*)$/g,"");n[u]=i}),n}function i(e){return e?~e.indexOf("cpx")?e.replace(/(-?\d*\.?\d*)cpx/gi,function(e,t){return(0,o.default)(Number(t))+"px"}):e:""}function r(e){if(!e)return{};var t=e.split(";"),n={};return t.forEach(function(e){var t=e.split(":"),u=String(t[0]).replace(/(^\s*)|(\s*)$/g,"");if(u){var r=i(String(t[1]).replace(/(^\s*)|(\s*)$/g,""));n[u]=r}}),n}function l(e,t,n){return isNaN(Number(e))?"":isNaN(t)||isNaN(n)?e:(t!=1/0&&t<=Number(e)&&(e=String(t)),n!=-1/0&&n>=Number(e)&&(e=String(n)),e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(359),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.str2obj=u,t.pxTransform=i,t.cmlStyleTransfer=r,t.getValBetweenMaxAndMin=l},359:function(e,t,n){function u(e){return"number"!=typeof e?void console.error("Parameter must be a number"):+(r.default.getWidth()/750*e).toFixed(3)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=n(127),r=function(e){return e&&e.__esModule?e:{default:e}}(i)}},[355]);