(function(e){function t(t){for(var i,s,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/INNO-S20-SP/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2559:function(e,t,n){},"331c":function(e,t,n){},3687:function(e,t,n){"use strict";var i=n("c173"),r=n.n(i);r.a},"4c8f":function(e,t,n){},"4f1b":function(e,t,n){"use strict";var i=n("4c8f"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("InstructionEditor")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("div",{attrs:{id:"assets"}},e._l(10,(function(e){return n("div",{key:e})})),0),n("div",{attrs:{id:"slides"}},[n("div",{attrs:{id:"tools"}},[n("p",[e._v("id: "+e._s(e.id))]),n("button",{on:{click:function(t){return e.slides.push(null)}}},[e._v("Add slide")]),n("input",{attrs:{type:"file",multiple:""}})]),e._l(e.slides,(function(t,i){return n("SlideEditor",{key:i,attrs:{inSlide:t},on:{slide:function(t){return e.$set(e.slides,i,t)},delete:function(t){return e.slides.splice(i,1)},open:function(t){e.slideI=i}}})}))],2),e.slide?n("div",{attrs:{id:"displays"}},[n("button",{on:{click:function(t){return e.slide.objects.push(null)}}},[e._v("Add object")]),e._l(e.slide.objects,(function(t,i){return n("ObjectEditor",{key:i,attrs:{inObject:t},on:{object:function(t){return e.$set(e.slide.objects,i,t)},delete:function(t){return e.slide.objects.splice(i,1)}}})}))],2):e._e(),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"scene"}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://i.ytimg.com/vi/9M5XM7WfVKA/maxresdefault.jpg",alt:""}})])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.slide?n("div",{attrs:{id:"slide"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.slide.name,expression:"slide.name"}],attrs:{id:"name",type:"text"},domProps:{value:e.slide.name},on:{input:function(t){t.target.composing||e.$set(e.slide,"name",t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.slide.description,expression:"slide.description"}],attrs:{id:"description"},domProps:{value:e.slide.description},on:{input:function(t){t.target.composing||e.$set(e.slide,"description",t.target.value)}}}),e._v(" "),n("div",{attrs:{id:"preview"}},[n("p",[e._v("thumbnail URL:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.slide.preview_url,expression:"slide.preview_url"}],attrs:{type:"text"},domProps:{value:e.slide.preview_url},on:{input:function(t){t.target.composing||e.$set(e.slide,"preview_url",t.target.value)}}})]),n("div",{attrs:{id:"actions"}},[n("button",{on:{click:function(t){return e.$emit("delete")}}},[e._v("Remove slide")]),n("button",{on:{click:function(t){return e.$emit("open")}}},[e._v("Edit displays")])])]):e._e()},l=[],u={name:"SlideEditor",props:["inSlide"],data:function(){return{slide:void 0}},watch:{inSlide:{handler:function(e){this.slide=e||{name:"Slide title",description:"Lorem impsum dolor sit amet",preview_url:void 0,objects:[null]}},immediate:!0},slide:{handler:function(e){this.$emit("slide",e)},immediate:!0,deep:!0}}},d=u,p=(n("c0d6"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"7c1ae1de",null),v=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.object?n("div",{attrs:{id:"object"}},[n("button",{attrs:{id:"delete"},on:{click:function(t){return e.$emit("delete")}}},[e._v("delete object")]),n("hr"),n("FileDrop",{attrs:{label:"drop here a media file"}}),n("textarea",{attrs:{placeholder:"description"},on:{input:function(t){e.object.description=t.target.value}}}),e._v(" "),n("Transform",{on:{transform:function(t){e.object.transform=t}}})],1):e._e()},h=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"transform"}},[n("div",{attrs:{id:"labels"}},e._l(["move","rotate","scale"],(function(t,i){return n("a",{key:i,class:{active:e.active===i},on:{click:function(t){e.active=i}}},[e._v(e._s(t))])})),0),n("Vector",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active===0"}],attrs:{length:3},on:{vector:function(t){e.transform.position=[].concat(t)}}}),n("Vector",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active===1"}],attrs:{length:3},on:{vector:function(t){e.transform.rotation=[].concat(t)}}}),n("Vector",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active===2"}],attrs:{length:1},on:{vector:function(t){e.transform.scale=t[0]}}})],1)},_=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vector"}},e._l(e.length,(function(t){return n("input",{key:t,style:{width:100/e.length+"%"},attrs:{type:"number",step:"0.01"},domProps:{value:e.vector[t-1]},on:{input:function(n){return e.update(t-1,n.target.value)}}})})),0)},g=[],w=(n("cb29"),{name:"Vector",props:["length"],data:function(){return{vector:void 0}},watch:{length:{handler:function(e){this.vector=Array(e).fill(0)},immediate:!0}},methods:{update:function(e,t){t=parseFloat(t),this.vector[e]=isNaN(t)?0:t,this.$emit("vector",this.vector)}}}),y=w,O=(n("4f1b"),Object(p["a"])(y,j,g,!1,null,"79662e3a",null)),x=O.exports,$={name:"Transform",components:{Vector:x},data:function(){return{transform:{position:[0,0,0],rotation:[0,0,0],scale:1},active:0}},watch:{transform:{handler:function(e){this.$emit("transform",e)},deep:!0}}},E=$,S=(n("c3f5"),Object(p["a"])(E,b,_,!1,null,"c68760e6",null)),k=S.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"area"}},[n("p",{attrs:{id:"empty"}},[e._v(e._s(e.label))])])},N=[],I={name:"FileDrop",props:{label:{type:String,default:"drop a file here"}}},M=I,T=(n("73db"),Object(p["a"])(M,P,N,!1,null,"789830cd",null)),V=T.exports,A={name:"ObjectEditor",props:["inObject"],components:{Transform:k,FileDrop:V},data:function(){return{object:void 0}},watch:{inObject:{handler:function(e){this.object=e||{media:{url:"",type:0},description:"",transform:{position:[0,0,0],rotation:[0,0,0],scale:1}}},immediate:!0},object:{handler:function(e){this.$emit("object",e)},immediate:!0,deep:!0}}},F=A,D=(n("a7db"),Object(p["a"])(F,m,h,!1,null,"7bebc0df",null)),J=D.exports,L={name:"InstructionEditor",components:{SlideEditor:v,ObjectEditor:J},data:function(){return{id:this.$uuid.v4(),name:"",description:"",preview_url:null,slides:[null],slideI:0}},computed:{slide:function(){return this.slideI<this.slides.length?this.slides[this.slideI]:null}}},R=L,K=(n("3687"),Object(p["a"])(R,s,a,!1,null,"707ad582",null)),U=K.exports,W=n("f029");i["a"].use(W["a"]);var X={name:"App",components:{InstructionEditor:U}},q=X,z=Object(p["a"])(q,r,o,!1,null,null,null),B=z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(B)}}).$mount("#app")},"6e38":function(e,t,n){},"73db":function(e,t,n){"use strict";var i=n("ed02"),r=n.n(i);r.a},a7db:function(e,t,n){"use strict";var i=n("331c"),r=n.n(i);r.a},c0d6:function(e,t,n){"use strict";var i=n("2559"),r=n.n(i);r.a},c173:function(e,t,n){},c3f5:function(e,t,n){"use strict";var i=n("6e38"),r=n.n(i);r.a},ed02:function(e,t,n){}});
//# sourceMappingURL=app.37f21691.js.map