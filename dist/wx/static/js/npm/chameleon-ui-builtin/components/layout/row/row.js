var __CML__GLOBAL = require("../../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([23],{

/***/ "../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/row/row.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "C:/medisanCRM/node_modules/chameleon-ui-builtin/components/layout/row/row.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {},
  "interfaces": {
    "RowInterface": {
      "justify": "String",
      "align": "String",
      "height": "Number",
      "wrap": "Boolean",
      "margin": "Number"
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "CRow": ["RowInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");

var CRow = function CRow() {
  _classCallCheck(this, CRow);

  this.props = {
    // start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'center'
    },
    // top/middle/bottom
    align: {
      type: String,
      default: 'middle'
    },
    height: {
      type: Number,
      default: 0
    },
    wrap: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    rowClass: function rowClass() {
      return "flex-row-" + this.justify + "-" + this.align;
    },
    rowStyle: function rowStyle() {
      var style = '';

      if (this.height) {
        style += "height:" + this.height + "cpx;";
      }

      if (this.wrap) {
        style += "flex-wrap:wrap;";
      }

      if (this.margin) {
        style += "margin:" + this.margin / 2 + "cpx 0;";
      }

      return style;
    }
  };
};

exports.default = __CML__WRAPPER__(new CRow(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/row/row.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/layout/row/row.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/row/row.cml");
var __cml__script = __webpack_require__("../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../Users/Administrator/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/layout/row/row.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/layout/row/row.cml"]);