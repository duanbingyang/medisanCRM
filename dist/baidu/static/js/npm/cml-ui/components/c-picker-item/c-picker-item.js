var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([13],{112:function(t,e,n){n(113),n(114)},113:function(t,e){},114:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(a),l=function t(){i(this,t),this.props={list:{type:Array,default:[""]},defaultIndex:{type:Number,default:0},height:{type:Number,default:400},textAlign:{type:String,default:"center"},itemStyle:{type:String,default:""}},this.data={},this.computed={value:function(){return[this.defaultIndex]},computedItemStyle:function(){return this.itemStyle}},this.watch={},this.methods={bindChange:function(t){var e=t.detail.value;this.$cmlEmit("selectchange",{index:e[0]})}}};e.default=new l,e.default=u.default.createComponent(e.default).getOptions()}},[112]);