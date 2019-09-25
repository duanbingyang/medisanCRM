var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([1],{

/***/ "../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/userInfo/userInfo.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/navigateTo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/post/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/showToast/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = __webpack_require__("./node_modules/md5/md5.js");

var _md2 = _interopRequireDefault(_md);

var _localStorage = __webpack_require__("./node_modules/localStorage/lib/localStorage.js");

var _localStorage2 = _interopRequireDefault(_localStorage);

var _weValidator = __webpack_require__("./node_modules/we-validator/lib/we-validator.js");

var _weValidator2 = _interopRequireDefault(_weValidator);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInfo = function () {
  function UserInfo() {
    _classCallCheck(this, UserInfo);

    this.data = {
      isfocus: false,
      submitDis: false,
      sendCodeText: '发送验证码',
      sendCodeDis: false,
      code: '后台返回的验证码',
      userInputCode: '用户输入的验证码',
      only: true,
      sex: ['男', '女'],
      formData: {
        username: '',
        address_prov: '北京市',
        phone: '',
        sex: '男',
        company: '',
        error: ''
      },
      provins: ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海", "宁夏", "新疆"],
      defaultSexIndex: 0,
      defaultProvinsIndex: 0,
      sexIndex: 0,
      provinsIndex: 0,
      pickerShow: {
        provins: false,
        sex: false
      }
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      bindblurevent: function bindblurevent() {
        this.isfocus = false;
      },
      submitForm: function submitForm(e) {
        var _this2 = this;

        var _this = this;
        var type = e.detail.type;
        (0, _index6.default)({
          message: type + ' button'
        });
        console.log(this.formData);

        this.submitDis = true;

        if (this.validator(this.formData)) {
          console.log('验证成功');
        } else {
          console.log('验证失败');
          console.log(this.formData.error);
          this.submitDis = false;
          return false;
        }
        (0, _index4.default)({
          url: 'http://172.16.101.65:3000/api/addUser_crm',
          data: this.formData
        }).then(function (res) {
          (0, _index6.default)({
            message: JSON.stringify(res),
            duration: 2000
          });
          _localStorage2.default.setItem('userSign', _this.code);
          (0, _index2.default)({
            path: '/pages/complate/complate',
            query: {
              title: '提交成功',
              mainMessage: '可以凭此页面向工作人员领取精美礼品',
              subMessage: ''
            }
          });
        }, function (err) {
          (0, _index6.default)({
            message: JSON.stringify(err),
            duration: 2000
          });
          _this2.submitDis = false;
          console.log(err);
        });
        if (this.userInputCode === this.code) {} else {
          (0, _index6.default)({
            message: '验证码输入有误',
            duration: 2000
          });
          this.submitDis = false;
        }
      },
      validator: function validator(data) {
        var _this = this;
        var validatorInstance = new _weValidator2.default({
          multiCheck: true,
          onMessage: function onMessage(data) {
            _this.formData.error = data;
          },
          rules: {
            username: {
              required: true
            },
            sex: {
              required: true
            },
            company: {
              required: true
            },
            phone: {
              required: true,
              mobile: true
            },
            address_prov: {
              required: true
            }
          },
          messages: {
            username: {
              required: '请输入用户名'
            },
            sex: {
              required: '请输入密码'
            },
            company: {
              required: '请输入工作单位'
            },
            phone: {
              required: '请输入手机号',
              mobile: '手机号格式不正确'
            },
            address_prov: {
              required: '请输入所在地'
            }
          }
        });
        return validatorInstance.checkData(data);
      },
      provinsSelectchange: function provinsSelectchange(e) {
        this.provinsIndex = this.defaultProvinsIndex = e.detail.index;
        this.formData.address_prov = this.provins[e.detail.index];
      },
      sexSelectchange: function sexSelectchange(e) {
        this.sexIndex = this.defaultSexIndex = e.detail.index;
        this.formData.sex = this.sex[e.detail.index];
      },
      showClick: function showClick(e) {
        var target = e.target.id;
        var allPicker = this.pickerShow;
        allPicker[target] = true;
      },
      cancel: function cancel(e) {
        console.log(e);
        var allPicker = this.pickerShow;
        for (var key in allPicker) {
          allPicker[key] = false;
        }
      },
      confirm: function confirm(e, v) {
        console.log(e);
        var allPicker = this.pickerShow;
        for (var key in allPicker) {
          allPicker[key] = false;
        }
      },
      sendCode: function sendCode() {
        var _this3 = this;

        var timestamp = Date.parse(new Date()) / 1000;
        var sdkappid = 1400245773;
        var random = Math.floor(Math.random() * 10 + 1);
        var wait = 10;
        if (this.formData.phone.toString().length != 11 || !/^1/.test(this.formData.phone.toString())) {
          (0, _index6.default)({
            message: '手机号错误，请填写正确的手机号',
            duration: 2000
          });
          return false;
        }

        // 倒计时，过程中按钮置灰
        this.time(wait);
        this.sendCodeDis = true;
        (0, _index4.default)({
          url: 'http://172.16.101.65:3000/api/vCode',
          data: {
            mobile: this.formData.phone,
            nationcode: "86",
            time: timestamp
          }
        }).then(function (res) {
          if (res.currentAuthority.result) {
            (0, _index6.default)({
              message: res.currentAuthority.errmsg,
              duration: 2000
            });
          } else {
            (0, _index6.default)({
              message: '验证码已发送至您手机',
              duration: 2000
            });
          }
          _this3.code = res.currentAuthority.code;
        }, function (err) {
          (0, _index6.default)({
            message: JSON.stringify(err),
            duration: 2000
          });
          console.log(err);
        });
      },
      time: function time(wait) {
        var _this4 = this;

        var timeout = void 0;
        if (wait == 0) {
          wait = 60;
          this.sendCodeText = "发送验证码";
          this.sendCodeDis = false;
        } else if (wait > 0) {
          this.sendCodeText = "重新发送" + wait;
          wait--;
          timeout = setTimeout(function () {
            _this4.time(wait);
          }, 1000);
        }
      },
      nameInput: function nameInput(event) {
        this.formData.username = event.detail.value;
      },
      mobileInput: function mobileInput(event) {
        this.formData.phone = event.detail.value;
      },
      codeInput: function codeInput(event) {
        var code_md5 = (0, _md2.default)(event.detail.value);
        this.userInputCode = code_md5;
      },
      companyInput: function companyInput(event) {
        this.formData.company = event.detail.value;
      }
    };
  }

  /*
    bindblurevent  输入框失焦
    testclick 提交按钮
    selectchange  底部滚动选择
    showClick 底部滚动选择
    cancel  底部滚动选择
    confirm 底部滚动选择
    sendCode 发送验证码按钮
    time  验证码倒计时
  **/


  _createClass(UserInfo, [{
    key: 'beforeCreate',
    value: function beforeCreate() {
      if (_localStorage2.default.getItem('userSign')) {
        (0, _index2.default)({
          path: '/pages/complate/complate',
          query: {
            title: '您已领取过啦',
            mainMessage: '您已经参与过活动，谢谢您的热情参与',
            subMessage: ''
          }
        });
      }
    }
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return UserInfo;
}();

exports.default = new UserInfo();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\baidu\\\\.postcssrc.js\"}}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/userInfo/userInfo.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/navigateTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

var _util = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "C:/medisanCRM/node_modules/chameleon-api/src/interfaces/navigateTo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "options": {
      "path": "String",
      "query": "CMLObject",
      "url": "String"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "navigateTo": {
        "input": ["options"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = function __OBJECT__WRAPPER__(obj) {
  var className = obj.constructor.name;
  /* eslint-disable no-undef */
  var defines = __CHECK__DEFINES__;
  var enableTypes = __enableTypes__.split(',') || []; // ['Object','Array','Nullable']
  /* eslint-disable no-undef */
  var types = defines.types;
  var interfaceNames = defines.classes[className];
  var methods = {};

  interfaceNames && interfaceNames.forEach(function (interfaceName) {
    var keys = Object.keys(defines.interfaces);
    keys.forEach(function (key) {
      methods = _extends({}, methods, defines.interfaces[key]);
    });
  });
  /**
   * 获取类型
   *
   * @param  {*}      value 值
   * @return {string}       类型
   */
  var getType = function getType(value) {
    if (value instanceof Promise) {
      return "Promise";
    }
    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };

  /**
   * 校验类型  两个loader共用代码
   *
   * @param  {*}      value 实际传入的值
   * @param  {string} type  静态分析时候得到的值得类型
   * @param  {array[string]} errList 校验错误信息  类型
   * @return {bool}         校验结果
   */

  /* eslint complexity:[2,39] */
  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value);
    var canUseNullable = !!~enableTypes.indexOf("Nullable");
    var canUseObject = !!~enableTypes.indexOf("Object");
    var canUseArray = !!~enableTypes.indexOf("Array");
    if (currentType == 'Null') {
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E");
      }
      return errList;
    }
    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B" + type + "\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B") : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var _keys = Object.keys(types[type]);
          // todo 这里是同样的问题，可能多传递
          _keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });
          if (Object.keys(value).length > _keys.length) {
            errList.push("type [" + type + "] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26");
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }
      return errList;
    }
    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseArray ? errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B" + type + "\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B") : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];
          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }
    if (currentType == 'Function') {
      // if (type == 'Function') {
      //   errList = [];
      // } else {
      //   errList.push(`定义了${type}类型的参数，传入的却是${currentType},请检查所传参数是否和接口定义的一致`)
      // }
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push("\u627E\u4E0D\u5230" + types[type] + " \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA");
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }
      return errList;
    }
    if (currentType == 'Promise') {
      if (type === 'Promise') {
        errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49Promise\u7C7B\u578B\uFF0C\u5F02\u6B65\u8BF7\u91C7\u7528\u56DE\u8C03\u51FD\u6570\u7684\u5F62\u5F0F\uFF01");
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }

    return errList;
  };

  /**
   * 校验参数类型
   *
   * @param  {string} methodName 方法名称
   * @param  {Array}  argNames   参数名称列表
   * @param  {Array}  argValues  参数值列表
   * @return {bool}              校验结果
   */
  var checkArgsType = function checkArgsType(methodName, argValues) {
    var argList = void 0;

    if (getType(methodName) == 'Array') {
      // 回调函数的校验    methodName[0] 方法的名字 methodName[1]该回调函数在方法的参数索引
      argList = types[methods[methodName[0]].input[methodName[1]]].input;
      // 拿到这个回调函数的参数定义
    } else {
      argList = methods[methodName].input;
    }
    // todo 函数可能多传参数
    argList.forEach(function (argType, index) {
      var errList = checkType(argValues[index], argType, []);
      if (errList && errList.length > 0) {
        __CML_ERROR__("\n        \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5" + methodName + " \u6216\u8BE5" + methodName + "\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u7B2C" + (index + 1) + "\u4E2A\u53C2\u6570\n        \u9519\u8BEF\u4FE1\u606F: " + errList.join('\n'));
      }
    });
    if (argValues.length > argList.length) {
      __CML_ERROR__("[" + methodName + "]\u65B9\u6CD5\u53C2\u6570\u4F20\u9012\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26");
    }
  };

  /**
   * 校验返回值类型
   *
   * @param  {string} methodName 方法名称
   * @param  {*}      returnData 返回值
   * @return {bool}              校验结果
   */
  var checkReturnType = function checkReturnType(methodName, returnData) {
    var output = void 0;
    if (getType(methodName) == 'Array') {
      output = types[methods[methodName[0]].input[methodName[1]]].output;
    } else {
      output = methods[methodName].output;
    }
    // todo output 为什么可以是数组
    // if (output instanceof Array) {
    //   output.forEach(type => {

    //     //todo 而且是要有一个校验不符合就check失败？ 应该是有一个校验通过就可以吧
    //     checkType(returnData, type,[])
    //   });
    // }
    var errList = checkType(returnData, output, []);
    if (errList && errList.length > 0) {
      __CML_ERROR__("\n      \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5" + methodName + "\u8FD4\u56DE\u503C\n      \u9519\u8BEF\u4FE1\u606F: " + errList.join('\n'));
    }
  };

  /**
   * 创建warpper
   *
   * @param  {string}   funcName   方法名称
   * @param  {Function} originFunc 原有方法
   * @return {Function}            包裹后的方法
   */
  var createWarpper = function createWarpper(funcName, originFunc) {
    return function () {
      // 白名单方法
      if (this && this.$cmlPolyHooks && this.$cmlPolyHooks.indexOf(originFunc)) {
        return originFunc.apply(this, arguments);
      }
      var argValues = Array.prototype.slice.call(arguments).map(function (arg, index) {
        // 对传入的方法要做特殊的处理，这个是传入的callback，对callback函数再做包装
        if (getType(arg) == 'Function') {
          return createWarpper([funcName, index], arg);
        }
        return arg;
      });

      checkArgsType(funcName, argValues);

      var result = originFunc.apply(this, argValues);

      checkReturnType(funcName, result);
      return result;
    };
  };

  // 获取所有方法
  var keys = Object.keys(methods);
  // 微信 预览模式会执行 白屏暂时注释
  // Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).forEach(key => {
  //   if (!/constructor|prototype|length/ig.test(key)) {
  //     if (!~keys.indexOf(key)) {
  //       __CML_ERROR__('method [' + key + '] not declare in the interface!');
  //     }
  //   }
  // })
  // 处理包装方法
  keys.forEach(function (key) {
    var originFunc = obj[key];
    if (!originFunc) {
      __CML_ERROR__('method [' + key + '] not found!');
      return;
    }

    if (obj.hasOwnProperty(key)) {
      obj[key] = createWarpper(key, originFunc);
    } else {
      Object.getPrototypeOf(obj)[key] = createWarpper(key, originFunc);
    }
  });

  return obj;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "navigateTo",
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;

      path = (0, _utils.buildQueryStringUrl)(query, path);
      swan.navigateTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method());

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/navigateTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/navigateTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || '';

  // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题
  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/post/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/request/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function post(options) {
  options.method = "POST";
  return (0, _index2.default)(options);
}

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/request/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHeader = parseHeader;
var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

var defaultOptions = {
  credentials: 'same-origin'
};

var defaultType = 'form';
var contentTypeMap = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json'
};

// 处理基本的错误, 如500, 404等等
function filterStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res;
    error.type = 'http';
    throw error;
  }
}

// 解析为json格式
function parseJSON(res) {
  return res.json()["catch"](function (err) {
    if (err) {
      err.type = 'json';
      err.res = res;
    }
    throw err;
  });
}

// 转换成form表单形式
function toForm(body) {
  var form = new FormData();
  Object.keys(body).forEach(function (key) {
    if (body[key] !== undefined) {
      form.append(key, body[key]);
    }
  });
  return form;
}

function parseHeader(headers) {
  // fetch中的headers value为数组形式,其他端为字符串形式， 统一为字符串
  // header的key值统一为小写
  var result = {};
  Object.keys(headers).forEach(function (key) {
    var value = headers[key];
    if (value instanceof Array) {
      value = value[0];
    }
    result[key.toLowerCase()] = value;
  });
  return JSON.stringify(result);
}

exports.default = {
  defaultHeaders: defaultHeaders,
  defaultOptions: defaultOptions,
  defaultType: defaultType,
  contentTypeMap: contentTypeMap,
  filterStatus: filterStatus,
  parseJSON: parseJSON,
  toForm: toForm,
  parseHeader: parseHeader
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/request/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/request/common.js");

var _util = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "C:/medisanCRM/node_modules/chameleon-api/src/interfaces/request/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "responseType": {
      "status": "Number",
      "data": "String",
      "headers": "String"
    },
    "requestParams__cb": {
      "input": ["responseType"],
      "output": "Undefined"
    },
    "requestParams": {
      "url": "String",
      "body": "String",
      "headers": "CMLObject",
      "setting": "CMLObject",
      "method": "String",
      "cb": "requestParams__cb"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "request": {
        "input": ["requestParams"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = function __OBJECT__WRAPPER__(obj) {
  var className = obj.constructor.name;
  /* eslint-disable no-undef */
  var defines = __CHECK__DEFINES__;
  var enableTypes = __enableTypes__.split(',') || []; // ['Object','Array','Nullable']
  /* eslint-disable no-undef */
  var types = defines.types;
  var interfaceNames = defines.classes[className];
  var methods = {};

  interfaceNames && interfaceNames.forEach(function (interfaceName) {
    var keys = Object.keys(defines.interfaces);
    keys.forEach(function (key) {
      methods = _extends({}, methods, defines.interfaces[key]);
    });
  });
  /**
   * 获取类型
   *
   * @param  {*}      value 值
   * @return {string}       类型
   */
  var getType = function getType(value) {
    if (value instanceof Promise) {
      return "Promise";
    }
    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };

  /**
   * 校验类型  两个loader共用代码
   *
   * @param  {*}      value 实际传入的值
   * @param  {string} type  静态分析时候得到的值得类型
   * @param  {array[string]} errList 校验错误信息  类型
   * @return {bool}         校验结果
   */

  /* eslint complexity:[2,39] */
  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value);
    var canUseNullable = !!~enableTypes.indexOf("Nullable");
    var canUseObject = !!~enableTypes.indexOf("Object");
    var canUseArray = !!~enableTypes.indexOf("Array");
    if (currentType == 'Null') {
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E");
      }
      return errList;
    }
    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B" + type + "\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B") : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var _keys = Object.keys(types[type]);
          // todo 这里是同样的问题，可能多传递
          _keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });
          if (Object.keys(value).length > _keys.length) {
            errList.push("type [" + type + "] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26");
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }
      return errList;
    }
    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseArray ? errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B" + type + "\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B") : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];
          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }
    if (currentType == 'Function') {
      // if (type == 'Function') {
      //   errList = [];
      // } else {
      //   errList.push(`定义了${type}类型的参数，传入的却是${currentType},请检查所传参数是否和接口定义的一致`)
      // }
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push("\u627E\u4E0D\u5230" + types[type] + " \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA");
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }
      return errList;
    }
    if (currentType == 'Promise') {
      if (type === 'Promise') {
        errList.push("\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49Promise\u7C7B\u578B\uFF0C\u5F02\u6B65\u8BF7\u91C7\u7528\u56DE\u8C03\u51FD\u6570\u7684\u5F62\u5F0F\uFF01");
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }
    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push("\u5B9A\u4E49\u4E86" + type + "\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F" + currentType + ",\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4");
      }
      return errList;
    }

    return errList;
  };

  /**
   * 校验参数类型
   *
   * @param  {string} methodName 方法名称
   * @param  {Array}  argNames   参数名称列表
   * @param  {Array}  argValues  参数值列表
   * @return {bool}              校验结果
   */
  var checkArgsType = function checkArgsType(methodName, argValues) {
    var argList = void 0;

    if (getType(methodName) == 'Array') {
      // 回调函数的校验    methodName[0] 方法的名字 methodName[1]该回调函数在方法的参数索引
      argList = types[methods[methodName[0]].input[methodName[1]]].input;
      // 拿到这个回调函数的参数定义
    } else {
      argList = methods[methodName].input;
    }
    // todo 函数可能多传参数
    argList.forEach(function (argType, index) {
      var errList = checkType(argValues[index], argType, []);
      if (errList && errList.length > 0) {
        __CML_ERROR__("\n        \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5" + methodName + " \u6216\u8BE5" + methodName + "\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u7B2C" + (index + 1) + "\u4E2A\u53C2\u6570\n        \u9519\u8BEF\u4FE1\u606F: " + errList.join('\n'));
      }
    });
    if (argValues.length > argList.length) {
      __CML_ERROR__("[" + methodName + "]\u65B9\u6CD5\u53C2\u6570\u4F20\u9012\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26");
    }
  };

  /**
   * 校验返回值类型
   *
   * @param  {string} methodName 方法名称
   * @param  {*}      returnData 返回值
   * @return {bool}              校验结果
   */
  var checkReturnType = function checkReturnType(methodName, returnData) {
    var output = void 0;
    if (getType(methodName) == 'Array') {
      output = types[methods[methodName[0]].input[methodName[1]]].output;
    } else {
      output = methods[methodName].output;
    }
    // todo output 为什么可以是数组
    // if (output instanceof Array) {
    //   output.forEach(type => {

    //     //todo 而且是要有一个校验不符合就check失败？ 应该是有一个校验通过就可以吧
    //     checkType(returnData, type,[])
    //   });
    // }
    var errList = checkType(returnData, output, []);
    if (errList && errList.length > 0) {
      __CML_ERROR__("\n      \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5" + methodName + "\u8FD4\u56DE\u503C\n      \u9519\u8BEF\u4FE1\u606F: " + errList.join('\n'));
    }
  };

  /**
   * 创建warpper
   *
   * @param  {string}   funcName   方法名称
   * @param  {Function} originFunc 原有方法
   * @return {Function}            包裹后的方法
   */
  var createWarpper = function createWarpper(funcName, originFunc) {
    return function () {
      // 白名单方法
      if (this && this.$cmlPolyHooks && this.$cmlPolyHooks.indexOf(originFunc)) {
        return originFunc.apply(this, arguments);
      }
      var argValues = Array.prototype.slice.call(arguments).map(function (arg, index) {
        // 对传入的方法要做特殊的处理，这个是传入的callback，对callback函数再做包装
        if (getType(arg) == 'Function') {
          return createWarpper([funcName, index], arg);
        }
        return arg;
      });

      checkArgsType(funcName, argValues);

      var result = originFunc.apply(this, argValues);

      checkReturnType(funcName, result);
      return result;
    };
  };

  // 获取所有方法
  var keys = Object.keys(methods);
  // 微信 预览模式会执行 白屏暂时注释
  // Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).forEach(key => {
  //   if (!/constructor|prototype|length/ig.test(key)) {
  //     if (!~keys.indexOf(key)) {
  //       __CML_ERROR__('method [' + key + '] not declare in the interface!');
  //     }
  //   }
  // })
  // 处理包装方法
  keys.forEach(function (key) {
    var originFunc = obj[key];
    if (!originFunc) {
      __CML_ERROR__('method [' + key + '] not found!');
      return;
    }

    if (obj.hasOwnProperty(key)) {
      obj[key] = createWarpper(key, originFunc);
    } else {
      Object.getPrototypeOf(obj)[key] = createWarpper(key, originFunc);
    }
  });

  return obj;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "request",
    value: function request(params) {
      var url = params.url,
          body = params.body,
          headers = params.headers,
          method = params.method,
          cb = params.cb;

      swan.request({
        url: url,
        data: body,
        dataType: 'text',
        method: method,
        header: headers,
        success: function success(res) {
          cb({
            status: res.statusCode,
            data: res.data,
            headers: (0, _common.parseHeader)(res.header)
          });
        },
        fail: function fail(e) {
          cb({
            status: -1,
            data: 'request failed',
            headers: '{}'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method());

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/request/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = request;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/request/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(_ref) {
  var domain = _ref.domain,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === undefined ? 'form' : _ref$contentType,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? {} : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;

  method = method.toUpperCase();
  var _setting$apiPrefix = setting.apiPrefix,
      apiPrefix = _setting$apiPrefix === undefined ? (0, _utils.isNeedApiPrefix)(url) : _setting$apiPrefix,
      _setting$jsonp = setting.jsonp,
      jsonp = _setting$jsonp === undefined ? false : _setting$jsonp,
      _setting$credentials = setting.credentials,
      credentials = _setting$credentials === undefined ? 'include' : _setting$credentials;

  var media = "dev";
  // 如果用户配置了domain
  if (domain) {
    if (media === 'dev') {
      // dev模式对domain做分割处理
      if (~domain.indexOf('__DEV_SPLIT__')) {
        var splitArray = domain.split('__DEV_SPLIT__');
        domain = splitArray[0];
        var domainKey = splitArray[1];
        url = (0, _utils.buildQueryStringUrl)({ domainKey: domainKey }, url);
      }
    }
    url = domain + url;
  } else {
    // 如果没有配置domain
    if (apiPrefix) {
      // 有apiPrefix优先
      if (true) {
        url = "http://192.168.31.60:8000" + url;
      }
    }
  }

  if (['GET', 'PUT', 'DELETE'].indexOf(method) > -1) {
    url = (0, _utils.buildQueryStringUrl)(data, url);
    if (method == 'GET') {
      data = '';
    }
  }
  switch (contentType) {
    case 'form':
      if (typeof data !== 'string') {
        data = (0, _utils.buildQueryStringUrl)(data);
      }
      header = _extends({}, header, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      break;
    case 'json':
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      header = _extends({}, header, {
        'Content-Type': 'application/json'
      });
      break;
  }
  if (typeof data !== 'string') {
    data = '';
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: data,
      setting: {
        apiPrefix: apiPrefix,
        jsonp: jsonp,
        credentials: credentials
      },
      method: method,
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            headers = res.headers,
            data = res.data;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json' && typeof data == 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ', e);
            }
          }
          resolve(data);
        } else {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }
          headers = (0, _utils.tryJsonParse)(headers);
          reject({ data: data, headers: headers, status: status });
        }
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/localStorage/lib/localStorage.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// http://www.rajdeepd.com/articles/chrome/localstrg/LocalStorageSample.htm

// NOTE:
// this varies from actual localStorage in some subtle ways

// also, there is no persistence
// TODO persist
(function () {
  "use strict";

  var db;

  function LocalStorage() {
  }
  db = LocalStorage;

  db.prototype.getItem = function (key) {
    if (this.hasOwnProperty(key)) {
      return String(this[key]);
    }
    return null;
  };

  db.prototype.setItem = function (key, val) {
    this[key] = String(val);
  };

  db.prototype.removeItem = function (key) {
    delete this[key];
  };

  db.prototype.clear = function () {
    var self = this;
    Object.keys(self).forEach(function (key) {
      self[key] = undefined;
      delete self[key];
    });
  };

  db.prototype.key = function (i) {
    i = i || 0;
    return Object.keys(this)[i];
  };

  db.prototype.__defineGetter__('length', function () {
    return Object.keys(this).length;
  });

  if (global.localStorage) {
    module.exports = localStorage;
  } else {
    module.exports = new LocalStorage();
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/md5/md5.js":
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__("./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__("./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__("./node_modules/is-buffer/index.js"),
      bin = __webpack_require__("./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/we-validator/lib/we-validator.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * we-validator
 * version: 2.1.10
 * address: https://github.com/ChanceYu/we-validator#readme
 * author:  ChanceYu <i.fish@foxmail.com>
 * license: MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("WeValidator", [], factory);
	else if(typeof exports === 'object')
		exports["WeValidator"] = factory();
	else
		root["WeValidator"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rules = __webpack_require__(1);

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requiredFn = _rules2.default.required.rule;

/**
 * 环境检测
 */
var isWx = typeof wx !== 'undefined' && !!wx.showToast; // 微信小程序
var isMy = typeof my !== 'undefined' && !!my.showToast; // 支付宝小程序
var isSwan = typeof swan !== 'undefined' && !!swan.showToast; // 百度智能小程序
var isTt = typeof tt !== 'undefined' && !!tt.showToast; // 头条小程序
var isBrowser = typeof window !== 'undefined' && !!window.alert; // 普通浏览器

var objString = Object.prototype.toString;

var isArray = Array.isArray || function (v) {
  return objString.call(v) === '[object Array]';
};
var isFunction = function isFunction(v) {
  return objString.call(v) === '[object Function]';
};
var isRegExp = function isRegExp(v) {
  return objString.call(v) === '[object RegExp]';
};

var WeValidator = function () {

  /**
   * 默认参数
   * @param {object} options
   * @param {object} [options.rules] 验证字段的规则
   * @param {object} [options.messages] 验证字段错误的提示信息
   * @param {function} [options.onMessage] 错误信息显示方式
   * @param {boolean} [options.multiCheck] 是否同时校验多个字段
   */
  function WeValidator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WeValidator);

    this.options = options;

    this.required = requiredFn;
    this._checkAllRules();
  }

  /**
   * 所有校验规则
   */


  /**
   * 动态添加验证规则
   * @param {string} ruleName 规则名称
   * @param {object} ruleOption 规则配置
   * @param {string} [ruleOption.message] 默认错误信息文字
   * @param {regexp|function} [ruleOption.rule] 验证规则
   */


  /**
   * 验证单个字段数据
   * @param {string} ruleName 规则名称
   * @param {string} value 要验证的值
   * @param {any} param 传递的验证参数
   * @param {boolean} skip 未填跳过校验，仅供内部使用
   */


  _createClass(WeValidator, [{
    key: '_showErrorMessage',


    /**
     * 显示错误信息
     * @param {object} params 错误信息
     * @param {function} onMessage 自定义提示函数
     */
    value: function _showErrorMessage(params, onMessage) {
      // validatorInstance.checkData(data, onMessage)
      if (isFunction(onMessage)) {
        return onMessage(params);
      }

      // 参数形式 new WeValidator({ onMessage })
      if (isFunction(this.options.onMessage)) {
        return this.options.onMessage(params);
      }

      // 全局配置 WeValidator.onMessage
      if (isFunction(WeValidator.onMessage)) {
        return WeValidator.onMessage(params);
      }

      // 微信小程序
      if (isWx) {
        return wx.showToast({
          title: params.msg,
          icon: 'none'
        });
      }

      // 支付宝小程序
      if (isMy) {
        return my.showToast({
          content: params.msg,
          type: 'none'
        });
      }

      // 百度小程序
      if (isSwan) {
        return swan.showToast({
          title: params.msg,
          icon: 'none'
        });
      }

      // 头条小程序
      if (isTt) {
        return tt.showToast({
          title: params.msg,
          icon: 'none'
        });
      }

      // 浏览器端
      if (isBrowser) alert(params.msg);
    }

    /**
     * 获取错误信息内容
     * @param {string} ruleName 规则名称
     * @param {string} attr 字段名称
     * @param {any} param 规则参数
     */

  }, {
    key: '_getErrorMessage',
    value: function _getErrorMessage(ruleName, attr, param) {
      var messages = this.options.messages;
      var defaultMessage = WeValidator.RULES[ruleName].message;

      if (messages.hasOwnProperty(attr) && messages[attr][ruleName]) {
        defaultMessage = messages[attr][ruleName];
      }

      if (defaultMessage) {
        defaultMessage = defaultMessage.replace(/\{(\d)\}/g, function ($0, $1) {
          if (isArray(param)) {
            return param[$1];
          } else {
            return param;
          }
        });

        return defaultMessage;
      }
    }

    /**
     * 验证配置规则是否无效
     * @param {string} ruleName 规则名称
     * @param {string} attr 字段名称
     */

  }, {
    key: '_isRuleInvalid',
    value: function _isRuleInvalid(ruleName, attr) {
      if (!WeValidator.RULES.hasOwnProperty(ruleName)) {
        console.warn && console.warn('\u6CA1\u6709\u6B64\u9A8C\u8BC1\u89C4\u5219\uFF1A' + ruleName + '\uFF0C\u5B57\u6BB5\uFF1A' + attr);
        return true;
      }
    }

    /**
     * 验证所有配置规则是否正确
     */

  }, {
    key: '_checkAllRules',
    value: function _checkAllRules() {
      var _rules_ = this.options.rules;

      // 遍历字段
      for (var attr in _rules_) {
        // 遍历验证规则
        for (var ruleName in _rules_[attr]) {
          if (this._isRuleInvalid(ruleName, attr)) continue;
        }
      }
    }

    /**
     * 校验数据，会验证所有配置的字段规则
     * @param {object} data 验证的数据对象
     * @param {function} onMessage 自定义错误信息提示
     * @param {boolean} showMessage 是否显示提示信息，默认显示（内部使用）
     * @param {object} fieldMap 校验的字段，默认校验所有字段（内部使用）
     */

  }, {
    key: 'checkData',
    value: function checkData(data, onMessage) {
      var showMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var fieldMap = arguments[3];

      var _rules_ = this.options.rules;
      var multiCheck = this.options.multiCheck;
      var hasError = false;
      var errorData = {};

      this.data = data;

      // 遍历字段
      for (var attr in _rules_) {
        if (fieldMap && !fieldMap.hasOwnProperty(attr)) continue;

        // 遍历验证规则
        for (var ruleName in _rules_[attr]) {
          if (this._isRuleInvalid(ruleName, attr)) continue;

          if (fieldMap) {
            var res = fieldMap[attr];
            if (isArray(res) && res.indexOf(ruleName) === -1) continue;
          }

          var ruleParam = _rules_[attr][ruleName];
          var value = '';

          if (data.hasOwnProperty(attr)) {
            value = data[attr];
          }

          if (isFunction(ruleParam)) {
            ruleParam = ruleParam.call(this, value);
          }

          var isFieldValid = WeValidator.checkValue.call(this, ruleName, value, ruleParam, true);

          // 验证不通过
          if (!isFieldValid) {
            hasError = true;

            var msg = this._getErrorMessage(ruleName, attr, ruleParam);
            var errorParam = null;

            if (showMessage && msg) {
              errorParam = {
                name: attr,
                value: value,
                param: ruleParam,
                rule: ruleName,
                msg: msg
              };
              errorData[attr] = errorParam;
            }

            if (!multiCheck) {
              errorParam && this._showErrorMessage(errorParam, onMessage);
              return false;
            }
          }
        }
      }

      if (hasError) {
        if (multiCheck && showMessage) {
          this._showErrorMessage(errorData, onMessage);
        }
        return false;
      }

      return true;
    }

    /**
     * 校验数据，只校验对应的字段规则
     * @param {object} data 验证的数据对象
     * @param {array} fields 校验的字段
     * @param {function} onMessage 自定义错误信息提示
     * @param {boolean} showMessage 是否显示提示信息，默认显示（内部使用）
     */

  }, {
    key: 'checkFields',
    value: function checkFields(data, fields, onMessage) {
      var showMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (!isArray(fields)) throw new Error('第二个参数须为数组');

      // fields: [ '[field]:[rule]' ]
      // fields: [ 'phoneNo' ]  =>  { phoneNo: true }
      // fields: [ 'phoneNo:required' ]  =>  { phoneNo: ['required'] }
      // fields: [ 'phoneNo:required,mobile' ]  =>  { phoneNo: ['required', 'mobile'] }
      var fieldMap = {};

      fields.forEach(function (item) {
        var arr = item.split(':');
        var field = arr[0];
        var rules = arr[1];

        if (rules) {
          // 只校验特定规则
          rules = rules.split(',');
          fieldMap[field] = rules;
        } else {
          // 校验 field 字段的所有规则
          fieldMap[field] = true;
        }
      });

      return this.checkData(data, onMessage, showMessage, fieldMap);
    }

    /**
     * 校验数据，不会提示错误信息
     * @param {object} data 验证的数据对象
     * @param {array} fields 校验的字段。如果有，只校验对应的字段规则，默认校验所有配置的字段规则
     */

  }, {
    key: 'isValid',
    value: function isValid(data, fields) {
      if (isArray(fields)) {
        return this.checkFields(data, fields, null, false);
      } else {
        return this.checkData(data, null, false);
      }
    }

    /**
     * 动态添加字段校验
     * @param {object} options 配置参数
     * @param {object} [options.rules] 规则
     * @param {object} [options.messages] 提示消息
     */

  }, {
    key: 'addRules',
    value: function addRules() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      Object.assign(this.options.rules, options.rules || {});
      Object.assign(this.options.messages, options.messages || {});

      this._checkAllRules();
    }

    /**
     * 动态移除字段校验
     * @param {array} fields 要删除校验的字段
     */

  }, {
    key: 'removeRules',
    value: function removeRules(fields) {
      if (!isArray(fields)) throw new Error('参数须为数组');

      for (var i = 0; i < fields.length; i++) {
        var key = fields[i];

        delete this.options.rules[key];
      }
    }
  }]);

  return WeValidator;
}();

WeValidator.RULES = {};

WeValidator.addRule = function (ruleName, ruleOption) {
  WeValidator.RULES[ruleName] = ruleOption;
};

WeValidator.checkValue = function (ruleName, value, param, skip) {
  var rule = WeValidator.RULES[ruleName].rule;

  if (isRegExp(rule)) {
    if (skip) {
      return !requiredFn(value) || rule.test(value);
    } else {
      return rule.test(value);
    }
  }

  if (isFunction(rule)) {
    if (ruleName === 'required') {
      return requiredFn(value);
    } else {
      if (skip) {
        return !requiredFn(value) || rule.call(this, value, param);
      } else {
        return rule.call(this, value, param);
      }
    }
  }
};

WeValidator.RULES = _rules2.default;
WeValidator.required = requiredFn;

module.exports = WeValidator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /**
   * 必填
   */
  required: {
    message: '此字段必填',
    rule: function rule(value) {
      if (typeof value === 'number') {
        value = value.toString();
      } else if (typeof value === 'boolean') {
        return true;
      }
      return !!(value && value.length > 0);
    }
  },
  /**
   * 正则通用
   */
  pattern: {
    message: '不符合此验证规则',
    rule: function rule(value, param) {
      return param.test(value);
    }
  },
  /**
   * 电子邮件
   */
  email: {
    message: '请输入有效的电子邮件地址',
    rule: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  /**
   * 手机号码
   */
  mobile: {
    message: '请输入11位的手机号码',
    rule: /^1[345789]\d{9}$/
  },
  /**
   * 座机号，例如：010-1234567、0551-1234567
   */
  tel: {
    message: '请输入座机号',
    rule: /^(\d{3,4}-)?\d{7,8}$/
  },
  /**
   * URL网址
   */
  url: {
    message: '请输入有效的网址',
    rule: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
  },
  /**
   * 身份证号
   */
  idcard: {
    message: '请输入18位的有效身份证',
    rule: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  },
  /**
   * 字段值相同校验（例如：密码和确认密码）
   */
  equalTo: {
    message: '输入值必须和字段 {0} 相同',
    rule: function rule(value, param) {
      return value === this.data[param];
    }
  },
  /**
   * 字段值不相同校验，与 equalTo 相反
   */
  notEqualTo: {
    message: '输入值不能和字段 {0} 相同',
    rule: function rule(value, param) {
      return value !== this.data[param];
    }
  },
  /**
   * 是否包含某字符
   */
  contains: {
    message: '输入值必须包含 {0}',
    rule: function rule(value, param) {
      return value.indexOf(param) > -1;
    }
  },
  /**
   * 不能包含某字符
   */
  notContains: {
    message: '输入值不能包含 {0}',
    rule: function rule(value, param) {
      return value.indexOf(param) === -1;
    }
  },
  /**
   * 长度为多少的字符串
   */
  length: {
    message: '请输入 {0} 个字符',
    rule: function rule(value, param) {
      return value.length == param;
    }
  },
  /**
   * 最少多长的字符串
   */
  minlength: {
    message: '最少要输入 {0} 个字符',
    rule: function rule(value, param) {
      return value.length >= param;
    }
  },
  /**
   * 最多多长的字符串
   */
  maxlength: {
    message: '最多可以输入 {0} 个字符',
    rule: function rule(value, param) {
      return value.length <= param;
    }
  },
  /**
   * 某个范围长度的字符串
   */
  rangelength: {
    message: '请输入长度在 {0} 到 {1} 之间的字符',
    rule: function rule(value, param) {
      return value.length >= param[0] && value.length <= param[1];
    }
  },
  /**
   * 数字
   */
  number: {
    message: '请输入有效的数字',
    rule: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
  },
  /**
   * 正整数数字
   */
  digits: {
    message: '只能输入正整数数字',
    rule: /^\d+$/
  },
  /**
   * 正整数或负整数数字
   */
  integer: {
    message: '只能输入整数数字',
    rule: /^-?\d+$/
  },
  /**
   * 大于多少的数字/字段值
   */
  min: {
    message: '请输入大于 {0} 的数字',
    rule: function rule(value, param) {
      if (typeof param === 'string') param = this.data[param];

      return value >= param;
    }
  },
  /**
   * 小于多少的数字/字段值
   */
  max: {
    message: '请输入小于 {0} 的数字',
    rule: function rule(value, param) {
      if (typeof param === 'string') param = this.data[param];

      return value <= param;
    }
  },
  /**
   * 大于且小于多少的数字
   */
  range: {
    message: '请输入大于 {0} 且小于 {1} 的数字',
    rule: function rule(value, param) {
      return value >= param[0] && value <= param[1];
    }
  },
  /**
   * 中文字符
   */
  chinese: {
    message: '只能输入中文字符',
    rule: /^[\u4e00-\u9fa5]+$/
  },
  /**
   * 最少多少个中文字符
   */
  minChinese: {
    message: '最少输入 {0} 个中文字符',
    rule: function rule(value, param) {
      return new RegExp('^[\u4E00-\u9FA5]{' + param + ',}$').test(value);
    }
  },
  /**
   * 最多多少个中文字符
   */
  maxChinese: {
    message: '最多输入 {0} 个中文字符',
    rule: function rule(value, param) {
      return new RegExp('^[\u4E00-\u9FA5]{1,' + param + '}$').test(value);
    }
  },
  /**
   * 大于且小于多少个中文字符
   */
  rangeChinese: {
    message: '只能输入 {0} 到 {1} 个中文字符',
    rule: function rule(value, param) {
      return new RegExp('^[\u4E00-\u9FA5]{' + param[0] + ',' + param[1] + '}$').test(value);
    }
  },
  /**
   * 日期
   */
  date: {
    message: '请输入有效的日期',
    rule: function rule(value) {
      return !/Invalid|NaN/.test(new Date(value).toString());
    }
  },
  /**
   * 日期（ISO标准格式）例如：2019-09-19，2019/09/19
   */
  dateISO: {
    message: '请输入有效的日期（ISO标准格式）',
    rule: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  },
  /**
   * ipv4地址
   */
  ipv4: {
    message: '请输入有效的IPv4地址',
    rule: /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i
  },
  /**
   * ipv6地址
   */
  ipv6: {
    message: '请输入有效的IPv6地址',
    rule: /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i
  }
};

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/pages/userInfo/userInfo.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\baidu\\\\.postcssrc.js\"}}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/userInfo/userInfo.cml");
var __cml__script = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/userInfo/userInfo.cml");


/***/ })

},["./src/pages/userInfo/userInfo.cml"]);