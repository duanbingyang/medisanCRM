var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([11],{108:function(t,e,n){n(109),n(110)},109:function(t,e){},110:function(t,e,n){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),l=function(t){return t&&t.__esModule?t:{default:t}}(i),u=function t(){a(this,t),this.props={show:{type:Boolean,default:!1},height:{type:Number,default:500},headerHeight:{type:Number,default:100},textAlign:{type:String,default:"center"},dataScrollerHeight:{type:Number,default:400},list:{type:Array,default:[]},data:{type:Array,default:[]},defaultIndex:{type:Number,default:0},cancelBtnStyle:{type:String,default:""},confirmBtnStyle:{type:String,default:""},itemStyle:{type:String,default:""}},this.computed={},this.methods={cancel:function(){this.$cmlEmit("cancel")},confirm:function(){this.$cmlEmit("confirm")},selectchange:function(t){this.$cmlEmit("selectchange",t.detail)}}};e.default=new u,e.default=l.default.createComponent(e.default).getOptions()}},[108]);