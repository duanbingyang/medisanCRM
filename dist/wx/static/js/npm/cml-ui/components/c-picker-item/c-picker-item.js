var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([17],{212:function(e,t,n){n(213),n(214)},213:function(e,t){},214:function(e,t,n){function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function e(){u(this,e),this.props={list:{type:Array,default:[""]},defaultIndex:{type:Number,default:0},height:{type:Number,default:400},textAlign:{type:String,default:"center"},itemStyle:{type:String,default:""}},this.computed={value:function(){return[this.defaultIndex]},computedItemStyle:function(){return this.itemStyle}},this.methods={bindChange:function(e){var t=e.detail.value;this.$cmlEmit("selectchange",{index:t[0]})}}};t.default=new l,t.default=a.default.createComponent(t.default).getOptions()}},[212]);