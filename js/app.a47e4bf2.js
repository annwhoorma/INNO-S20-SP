(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/INNO-S20-SP/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f6e":function(t,e,n){"use strict";var i=n("520b"),r=n.n(i);r.a},"1e6c":function(t,e,n){"use strict";var i=n("eb7e"),r=n.n(i);r.a},"452c":function(t,e,n){},4729:function(t,e,n){"use strict";var i=n("bc1a"),r=n.n(i);r.a},"520b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("InstructionEditor"),n("SlideEditor"),n("ObjectEditor"),n("div",{staticClass:"card",staticStyle:{"background-color":"var(--select)"}})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.instruction?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("Toolbar",{attrs:{actions:{add:"note_add",delete:"delete",duplicate:"file_copy",upload:"backup"}}})],1),n("div",{staticClass:"card"},[n("List",{attrs:{label:"instructions",items:["instruction 1","instruction 2","instruction 3","instruction 4","instruction 5","instruction 6"],shown:5}})],1),n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.instruction.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.instruction.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"preview"}})],1),n("div",{staticClass:"card"},[n("FileList",{attrs:{label:"assets",items:["preview.png","schema.png","narration.m4a","duck.obj","tutorial.mp4","arrow.obj"],shown:5}})],1)]):t._e()},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t.multiline?n("textarea",{on:{input:function(e){return t.$emit("text",e.target.value)}}}):n("input",{attrs:{type:"text"},on:{input:function(e){return t.$emit("text",e.target.value)}}})])},c=[],u={name:"TextArea",props:["label","multiline"]},d=u,f=(n("df99"),n("2877")),p=Object(f["a"])(d,l,c,!1,null,"5884daa6",null),b=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{attrs:{id:"area"}},[t.label?n("p",{attrs:{id:"empty"}},[t._v("drop a file here")]):t._e()])])},v=[],h={name:"FileDrop",props:["label"]},_=h,j=(n("b591"),Object(f["a"])(_,m,v,!1,null,"b49a8cd0",null)),w=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{style:{height:t.height},attrs:{id:"items"}},t._l(t.items,(function(e,i){return n("button",{key:i,staticClass:"flat",class:{selected:i===t.selected},on:{click:function(e){return t.$emit("select",t.selected=i)}}},[t._v(t._s(e))])})),0)])},y=[],g={name:"List",props:["items","shown","label"],data:function(){return{selected:0}},computed:{height:function(){return(isNaN(this.shown)||0===this.shown?100:25*this.shown)+"px"}}},O=g,T=(n("1e6c"),Object(f["a"])(O,x,y,!1,null,"a6c5b4b6",null)),$=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{style:{height:t.height},attrs:{id:"items"}},t._l(t.items,(function(e,i){return n("button",{key:i,class:{selected:i===t.selected},on:{click:function(e){return t.$emit("select",t.selected=i)}}},[t._v(t._s(e))])})),0)])},C=[],S={name:"List",props:["items","shown","label"],data:function(){return{selected:0}},computed:{height:function(){return(isNaN(this.shown)||0===this.shown?100:25*this.shown)+"px"}}},k=S,A=(n("4729"),Object(f["a"])(k,E,C,!1,null,"03c2a668",null)),L=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},t._l(t.actions,(function(e,i){return n("button",{key:i,staticClass:"flat icon",style:{width:t.widthPer},on:{click:function(e){return t.$emit(i)}}},[n("i",{staticClass:"material-icons-outlined"},[t._v(t._s(e))])])})),0)},F=[],D=(n("b64b"),{name:"Toolbar",props:["actions"],computed:{widthPer:function(){return 100/Object.keys(this.actions).length+"%"}}}),N=D,I=(n("6b81"),Object(f["a"])(N,P,F,!1,null,"2847e0be",null)),V=I.exports,M={name:"InstructionEditor",props:["inInstruction"],components:{TextArea:b,FileDrop:w,List:$,FileList:L,Toolbar:V},data:function(){return{instruction:void 0}},watch:{inInstruction:{handler:function(t){this.instruction=t||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,slides:[null]}},immediate:!0},instruction:{handler:function(t){this.$emit("instruction",t)},immediate:!0,deep:!0}}},J=M,U=Object(f["a"])(J,o,s,!1,null,"245bdda2",null),q=U.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.slide?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("Toolbar",{attrs:{actions:{add:"note_add",delete:"delete",duplicate:"file_copy",moveUp:"arrow_upward",moveDown:"arrow_downward"}}})],1),n("div",{staticClass:"card"},[n("List",{attrs:{label:"slides",items:["slide 1","slide 2","slide 3","slide 4","slide 5","slide 6"],shown:5}})],1),t.slide?n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.slide.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.slide.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"preview"}})],1):t._e()]):t._e()},B=[],G={name:"SlideEditor",props:["inSlide"],components:{TextArea:b,FileDrop:w,List:$,Toolbar:V},data:function(){return{slide:void 0}},watch:{inSlide:{handler:function(t){this.slide=t||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,objects:[null]}},immediate:!0},slide:{handler:function(t){this.$emit("slide",t)},immediate:!0,deep:!0}}},H=G,K=Object(f["a"])(H,z,B,!1,null,"374e8971",null),Q=K.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.object?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("Toolbar",{attrs:{actions:{add:"note_add",delete:"delete",duplicate:"file_copy"}}})],1),n("div",{staticClass:"card"},[n("List",{attrs:{label:"objects",items:["object 1","object 2","object 3","object 4","object 5","object 6"],shown:5}})],1),n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.object.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.object.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"media"}}),n("Transform",{on:{transform:function(e){t.object.transform=e}}})],1)]):t._e()},W=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"transform"}},[n("Vector",{attrs:{length:3,label:"position"},on:{vector:function(e){t.transform.position=[].concat(e)}}}),n("Vector",{attrs:{length:3,label:"rotation"},on:{vector:function(e){t.transform.rotation=[].concat(e)}}}),n("Vector",{attrs:{length:1,label:"scale"},on:{vector:function(e){t.transform.scale=e[0]}}})],1)},Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t._l(t.length,(function(e){return n("input",{key:e,style:{width:100/t.length+"%"},attrs:{type:"number",step:"0.01"},domProps:{value:t.vector[e-1]},on:{input:function(n){return t.update(e-1,n.target.value)}}})}))],2)},tt=[],et=(n("cb29"),{name:"Vector",props:["length","label"],data:function(){return{vector:void 0}},watch:{length:{handler:function(t){this.vector=Array(t).fill(0)},immediate:!0}},methods:{update:function(t,e){e=parseFloat(e),this.vector[t]=isNaN(e)?0:e,this.$emit("vector",this.vector)}}}),nt=et,it=(n("0f6e"),Object(f["a"])(nt,Z,tt,!1,null,"d68b5058",null)),rt=it.exports,at={name:"Transform",components:{Vector:rt},data:function(){return{transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},watch:{transform:{handler:function(t){this.$emit("transform",t)},deep:!0}}},ot=at,st=(n("a4d0"),Object(f["a"])(ot,X,Y,!1,null,"31b186a0",null)),lt=st.exports,ct={name:"ObjectEditor",props:["inObject"],components:{Transform:lt,FileDrop:w,TextArea:b,List:$,Toolbar:V},data:function(){return{object:void 0}},watch:{inObject:{handler:function(t){this.object=t||{name:"object",media:{url:"",type:0},description:"",transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},immediate:!0},object:{handler:function(t){this.$emit("object",t)},immediate:!0,deep:!0}}},ut=ct,dt=Object(f["a"])(ut,R,W,!1,null,"4ef6958f",null),ft=dt.exports,pt=n("f029");i["a"].use(pt["a"]);var bt={name:"App",components:{InstructionEditor:q,SlideEditor:Q,ObjectEditor:ft},computed:{}},mt=bt,vt=(n("6186"),n("b0a0"),Object(f["a"])(mt,r,a,!1,null,"e3943d9c",null)),ht=vt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ht)}}).$mount("#app")},6186:function(t,e,n){"use strict";var i=n("e056"),r=n.n(i);r.a},"6b81":function(t,e,n){"use strict";var i=n("cf85"),r=n.n(i);r.a},a4d0:function(t,e,n){"use strict";var i=n("f515"),r=n.n(i);r.a},b0a0:function(t,e,n){"use strict";var i=n("452c"),r=n.n(i);r.a},b591:function(t,e,n){"use strict";var i=n("e52b"),r=n.n(i);r.a},bc1a:function(t,e,n){},cf85:function(t,e,n){},df99:function(t,e,n){"use strict";var i=n("f5d7"),r=n.n(i);r.a},e056:function(t,e,n){},e52b:function(t,e,n){},eb7e:function(t,e,n){},f515:function(t,e,n){},f5d7:function(t,e,n){}});
//# sourceMappingURL=app.a47e4bf2.js.map