(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{406:function(t,e,r){var content=r(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("7436db26",content,!0,{sourceMap:!1})},457:function(t,e,r){"use strict";var n=r(406);r.n(n).a},458:function(t,e,r){(e=r(17)(!1)).push([t.i,".product-view{display:block;width:90%;margin-left:auto;margin-right:auto;max-width:1250px;position:relative}.product-view h1{font-size:36px;font-weight:700;text-align:center}.product-view .product-vyn{position:absolute;top:0;left:0;transform:translateY(-50%);z-index:-1}.cart-ctn{display:flex;align-items:center;justify-content:center;flex-direction:column}.v-input{max-width:150px}.v-text-field__details{display:none}.v-input__slot{margin:0}.v-btn{margin-top:15px}.product-txt{padding-top:50%}",""]),t.exports=e},484:function(t,e,r){"use strict";r.r(e);r(6),r(10),r(5),r(15),r(16),r(12),r(8);var n=r(1),o=(r(43),r(9)),c=r(61);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$commerce,o=r.permalink,e.next=4,n.products.retrieve(o,{type:"permalink"});case 4:return c=e.sent,e.abrupt("return",{product:c});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{pnumber:0}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({addProductToCart:"addProductToCart"}))},f=(r(457),r(51)),v=r(94),m=r.n(v),w=r(389),x=r(466),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-view"},[r("img",{staticClass:"product-vyn",attrs:{src:t.product.media.source}}),t._v(" "),r("div",{staticClass:"product-txt"},[r("h1",[t._v("\n      "+t._s(t.product.name)+"\n    ")]),t._v(" "),r("div",{staticClass:"cart-ctn"},[r("v-text-field",{attrs:{label:"Quantité",type:"number",min:"1",outlined:""},model:{value:t.pnumber,callback:function(e){t.pnumber=e},expression:"pnumber"}}),t._v(" "),r("v-btn",{on:{click:function(e){return t.addProductToCart({id:t.product.id,count:t.pnumber})}}},[t._v("\n        Add To Cart\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:w.a,VTextField:x.a})}}]);