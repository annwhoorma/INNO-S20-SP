(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/INNO-S20-SP/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f6e":function(t,e,n){"use strict";var i=n("520b"),r=n.n(i);r.a},"1e0e":function(t,e,n){"use strict";var i=n("4c4f"),r=n.n(i);r.a},"1e6c":function(t,e,n){"use strict";var i=n("eb7e"),r=n.n(i);r.a},"452c":function(t,e,n){},4729:function(t,e,n){"use strict";var i=n("bc1a"),r=n.n(i);r.a},"4c4f":function(t,e,n){},"520b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("InstructionEditor"),n("SlideEditor"),n("ObjectEditor"),n("Render")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.instruction?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("Toolbar",{attrs:{actions:{add:"note_add",delete:"delete",duplicate:"file_copy",upload:"backup"}}})],1),n("div",{staticClass:"card"},[n("List",{attrs:{label:"instructions",items:["instruction 1","instruction 2","instruction 3","instruction 4","instruction 5","instruction 6"],shown:5}})],1),n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.instruction.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.instruction.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"preview"}})],1),n("div",{staticClass:"card"},[n("FileList",{attrs:{label:"assets",items:["preview.png","schema.png","narration.m4a","duck.obj","tutorial.mp4","arrow.obj"],shown:5}})],1)]):t._e()},s=[],c=n("ec26"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t.multiline?n("textarea",{on:{input:function(e){return t.$emit("text",e.target.value)}}}):n("input",{attrs:{type:"text"},on:{input:function(e){return t.$emit("text",e.target.value)}}})])},u=[],d={name:"TextArea",props:["label","multiline"]},f=d,p=(n("df99"),n("2877")),b=Object(p["a"])(f,l,u,!1,null,"5884daa6",null),m=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{attrs:{id:"area"}},[t.label?n("p",{attrs:{id:"empty"}},[t._v("drop a file here")]):t._e()])])},h=[],_={name:"FileDrop",props:["label"]},w=_,j=(n("b591"),Object(p["a"])(w,v,h,!1,null,"b49a8cd0",null)),x=j.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{style:{height:t.height},attrs:{id:"items"}},t._l(t.items,(function(e,i){return n("button",{key:i,staticClass:"flat",class:{selected:i===t.selected},on:{click:function(e){return t.$emit("select",t.selected=i)}}},[t._v(t._s(e))])})),0)])},g=[],O={name:"List",props:["items","shown","label"],data:function(){return{selected:0}},computed:{height:function(){return(isNaN(this.shown)||0===this.shown?100:25*this.shown)+"px"}}},$=O,T=(n("1e6c"),Object(p["a"])($,y,g,!1,null,"a6c5b4b6",null)),E=T.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),n("div",{style:{height:t.height},attrs:{id:"items"}},t._l(t.items,(function(e,i){return n("button",{key:i,class:{selected:i===t.selected},on:{click:function(e){return t.$emit("select",t.selected=i)}}},[t._v(t._s(e))])})),0)])},S=[],k={name:"List",props:["items","shown","label"],data:function(){return{selected:0}},computed:{height:function(){return(isNaN(this.shown)||0===this.shown?100:25*this.shown)+"px"}}},A=k,L=(n("4729"),Object(p["a"])(A,C,S,!1,null,"03c2a668",null)),F=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},t._l(t.actions,(function(e,i){return n("button",{key:i,staticClass:"flat icon",style:{width:t.widthPer},on:{click:function(e){return t.$emit(i)}}},[n("i",{staticClass:"material-icons-outlined"},[t._v(t._s(e))])])})),0)},D=[],N=(n("b64b"),{name:"Toolbar",props:["actions"],computed:{widthPer:function(){return 100/Object.keys(this.actions).length+"%"}}}),I=N,V=(n("6b81"),Object(p["a"])(I,P,D,!1,null,"2847e0be",null)),M=V.exports,z={name:"InstructionEditor",props:["inInstruction"],components:{TextArea:m,FileDrop:x,List:E,FileList:F,Toolbar:M},data:function(){return{instruction:void 0}},watch:{inInstruction:{handler:function(t){this.instruction=t||{id:Object(c["a"])(),name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,slides:[null]}},immediate:!0},instruction:{handler:function(t){this.$emit("instruction",t)},immediate:!0,deep:!0}}},R=z,J=Object(p["a"])(R,a,s,!1,null,"e423d72c",null),q=J.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.slide?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("Toolbar",{attrs:{actions:{add:"note_add",delete:"delete",duplicate:"file_copy",moveUp:"arrow_upward",moveDown:"arrow_downward"}}})],1),n("div",{staticClass:"card"},[n("List",{attrs:{label:"slides",items:["slide 1","slide 2","slide 3","slide 4","slide 5","slide 6"],shown:5}})],1),t.slide?n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.slide.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.slide.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"preview"}})],1):t._e()]):t._e()},U=[],W={name:"SlideEditor",props:["inSlide"],components:{TextArea:m,FileDrop:x,List:E,Toolbar:M},data:function(){return{slide:void 0}},watch:{inSlide:{handler:function(t){this.slide=t||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,objects:[null]}},immediate:!0},slide:{handler:function(t){this.$emit("slide",t)},immediate:!0,deep:!0}}},B=W,G=Object(p["a"])(B,H,U,!1,null,"374e8971",null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.object?n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("Toolbar",{attrs:{actions:{add:"note_add",delete:"delete",duplicate:"file_copy"}}})],1),n("div",{staticClass:"card"},[n("List",{attrs:{label:"objects",items:["object 1","object 2","object 3","object 4","object 5","object 6"],shown:5}})],1),n("div",{staticClass:"card"},[n("TextArea",{attrs:{label:"name"},on:{text:function(e){t.object.name=e}}}),t._v(" "),n("TextArea",{attrs:{label:"description",multiline:!0},on:{text:function(e){t.object.description=e}}}),t._v(" "),n("FileDrop",{attrs:{label:"media"}}),n("Transform",{on:{transform:function(e){t.object.transform=e}}})],1)]):t._e()},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"transform"}},[n("Vector",{attrs:{length:3,label:"position"},on:{vector:function(e){t.transform.position=[].concat(e)}}}),n("Vector",{attrs:{length:3,label:"rotation"},on:{vector:function(e){t.transform.rotation=[].concat(e)}}}),n("Vector",{attrs:{length:1,label:"scale"},on:{vector:function(e){t.transform.scale=e[0]}}})],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[t.label?n("p",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t._l(t.length,(function(e){return n("input",{key:e,style:{width:100/t.length+"%"},attrs:{type:"number",step:"0.01"},domProps:{value:t.vector[e-1]},on:{input:function(n){return t.update(e-1,n.target.value)}}})}))],2)},et=[],nt=(n("cb29"),{name:"Vector",props:["length","label"],data:function(){return{vector:void 0}},watch:{length:{handler:function(t){this.vector=Array(t).fill(0)},immediate:!0}},methods:{update:function(t,e){e=parseFloat(e),this.vector[t]=isNaN(e)?0:e,this.$emit("vector",this.vector)}}}),it=nt,rt=(n("0f6e"),Object(p["a"])(it,tt,et,!1,null,"d68b5058",null)),ot=rt.exports,at={name:"Transform",components:{Vector:ot},data:function(){return{transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},watch:{transform:{handler:function(t){this.$emit("transform",t)},deep:!0}}},st=at,ct=(n("a4d0"),Object(p["a"])(st,Y,Z,!1,null,"31b186a0",null)),lt=ct.exports,ut={name:"ObjectEditor",props:["inObject"],components:{Transform:lt,FileDrop:x,TextArea:m,List:E,Toolbar:M},data:function(){return{object:void 0}},watch:{inObject:{handler:function(t){this.object=t||{name:"object",media:{url:"",type:0},description:"",transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},immediate:!0},object:{handler:function(t){this.$emit("object",t)},immediate:!0,deep:!0}}},dt=ut,ft=Object(p["a"])(dt,Q,X,!1,null,"4ef6958f",null),pt=ft.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"card"})},mt=[],vt=n("5a89"),ht={name:"Render",mounted:function(){var t=this.$refs["root"],e={x:t.offsetWidth,y:t.offsetHeight},n=new vt["f"],i=new vt["e"](75,e.x/e.y,.1,1e3),r=new vt["g"];r.setSize(e.x,e.y),t.appendChild(r.domElement);var o=new vt["a"],a=new vt["d"]({color:3028032}),s=new vt["c"](o,a);function c(){requestAnimationFrame(c),s.rotation.x+=.01,s.rotation.y+=.01,r.render(n,i)}s.scale.x=s.scale.y=s.scale.z=5,n.add(s),n.background=new vt["b"](16777215),i.position.z=10,c()}},_t=ht,wt=(n("9487"),Object(p["a"])(_t,bt,mt,!1,null,"0be8a366",null)),jt=wt.exports,xt={name:"App",components:{InstructionEditor:q,SlideEditor:K,ObjectEditor:pt,Render:jt},computed:{}},yt=xt,gt=(n("1e0e"),n("b0a0"),Object(p["a"])(yt,r,o,!1,null,"65acc95f",null)),Ot=gt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Ot)}}).$mount("#app")},"6b81":function(t,e,n){"use strict";var i=n("cf85"),r=n.n(i);r.a},9487:function(t,e,n){"use strict";var i=n("f355"),r=n.n(i);r.a},a4d0:function(t,e,n){"use strict";var i=n("f515"),r=n.n(i);r.a},b0a0:function(t,e,n){"use strict";var i=n("452c"),r=n.n(i);r.a},b591:function(t,e,n){"use strict";var i=n("e52b"),r=n.n(i);r.a},bc1a:function(t,e,n){},cf85:function(t,e,n){},df99:function(t,e,n){"use strict";var i=n("f5d7"),r=n.n(i);r.a},e52b:function(t,e,n){},eb7e:function(t,e,n){},f355:function(t,e,n){},f515:function(t,e,n){},f5d7:function(t,e,n){}});
//# sourceMappingURL=app.5dd5146f.js.map