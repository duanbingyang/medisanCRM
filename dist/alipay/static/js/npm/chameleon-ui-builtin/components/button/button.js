var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([8],{

/***/ "../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.alipay.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("./node_modules/chameleon-ui-builtin/components/button/util.js");

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function Button() {
  _classCallCheck(this, Button);

  this.props = {
    text: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "auto"
    },
    width: {
      type: Number,
      default: -1
    },
    type: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: ""
    },
    textStyle: {
      type: String,
      default: ""
    },
    textStyleDisabled: {
      type: String,
      default: ""
    },
    disabledStyle: {
      type: String,
      default: ""
    },
    btnHoverStyle: {
      type: String,
      default: ''
    },
    textHoverStyle: {
      type: String,
      default: ''
    },
    openType: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ""
    }
  };
  this.data = {
    hover: false
  };
  this.computed = {
    hasWidth: function hasWidth() {
      return this.width !== -1;
    },
    btnClasses: function btnClasses() {
      return (0, _util.transCls)('cml-btn', this);
    },
    textClasses: function textClasses() {
      return (0, _util.transCls)('btn-text', this);
    },
    mrBtnStyle: function mrBtnStyle() {
      var disabled = this.disabled,
          btnStyle = this.btnStyle,
          disabledStyle = this.disabledStyle,
          hover = this.hover,
          btnHoverStyle = this.btnHoverStyle,
          hasWidth = this.hasWidth,
          width = this.width;


      var style = disabled ? btnStyle + ";" + disabledStyle : hover ? btnStyle + ";" + btnHoverStyle : btnStyle;

      if (hasWidth) {
        style = "width:" + width + "cpx;" + style;
      }
      return style;
    },
    mrTextStyle: function mrTextStyle() {
      var disabled = this.disabled,
          textStyle = this.textStyle,
          textStyleDisabled = this.textStyleDisabled,
          hover = this.hover,
          textHoverStyle = this.textHoverStyle;

      return disabled ? textStyle + ";" + textStyleDisabled : hover ? textStyle + ";" + textHoverStyle : textStyle;
    }
  };
  this.methods = {
    onclick: function onclick(e) {
      var type = this.type,
          disabled = this.disabled;

      if (disabled) return;
      this.$cmlEmit('onclick', {
        type: type,
        disabled: disabled
      });
    },
    touchstart: function touchstart(e) {
      this.hover = true;
    },
    touchend: function touchend(e) {
      this.hover = false;
    },
    getuserinfo: function getuserinfo(e) {
      this.$cmlEmit('getuserinfo', e.detail);
    },
    contact: function contact(e) {
      this.$cmlEmit('contact');
    },
    getphonenumber: function getphonenumber(e) {
      this.$cmlEmit('getphonenumber', {
        errMsg: e.detail.errMsg,
        encryptedData: e.detail.encryptedData || '',
        //包括敏感数据在内的完整用户信息的加密数据
        iv: e.detail.iv || ''
        //加密算法的初始向量
      });
    },
    error: function error(e) {
      this.$cmlEmit('error', {
        errMsg: e.detail.errMsg
      });
    },
    opensetting: function opensetting(e) {
      this.$cmlEmit('opensetting');
    }
  };
};

exports.default = new Button();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.alipay.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/button/button.alipay.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.alipay.cml");
var __cml__script = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.alipay.cml");


/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/button/util.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transCls = transCls;
function transCls(base, ctx) {
  var type = ctx.type,
      disabled = ctx.disabled,
      size = ctx.size,
      hover = ctx.hover,
      hasWidth = ctx.hasWidth;


  var classList = [base];

  if (hover) {
    classList.push(base + '-active');
  }

  if (!!~'red|orange|white|green'.indexOf(type)) {
    classList.push(base + '-' + type);

    if (hover) {
      classList.push(base + '-' + type + '-active');
    }

    if (disabled) {
      classList.push(base + '-' + type + '-disable');
    }
  }

  if (!!~'full|big|medium|small|stretch|auto'.indexOf(size) && !hasWidth) {
    classList.push(base + '-' + size);
  }

  if (disabled) {
    classList.push(base + '-disable');
  }

  return classList.join(' ');
}

/***/ })

},["./node_modules/chameleon-ui-builtin/components/button/button.alipay.cml"]);