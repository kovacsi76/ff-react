(this.webpackJsonp12=this.webpackJsonp12||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),o=(t(16),t(2)),u=t.n(o),d=t(5),c=t(6),s=t(7),m=t(10),p=t(9),h=(t(18),t(1));var f=function(e){return function(a){var t=a.isLoading,n=a.form,r=Object(h.a)(a,["isLoading","form"]);return t?l.a.createElement("p",null,"Hold on, fetching data might take some time."):null===e?null:l.a.createElement(e,Object.assign({},n,r))}};var b=function(e){return function(a){var t=a.label,n=Object(h.a)(a,["label"]);return console.log("wla",t,n),t?l.a.createElement("label",{htmlFor:n.id},l.a.createElement("span",null,t),l.a.createElement(e,n)):l.a.createElement(e,n)}};function g(e){return l.a.createElement("option",{key:e.id||e.value,label:e.label,value:e.value||e.label,disabled:e.disabled||!1})}var v={Input:function(e){return l.a.createElement("input",{id:e.id||"input",name:e.name||"input",type:e.type||"text",defaultValue:e.defaultValue||"Default Value",required:e.required||!1,disabled:e.disabled||!1})},Paragraph:function(e){return l.a.createElement("p",{id:e.id||"paragraph",name:e.name||"paragraph"},e.value||"")},Select:function(e){return e.options?e.options.length?l.a.createElement("select",{id:e.id||"select",name:e.name||"select",defaultValue:e.defaultValue||"",required:e.required||!1,disabled:e.disabled||!1,multiple:e.multiple||!1,size:e.size||0},e.options.map((function(e){return l.a.createElement(g,Object.assign({key:e.id||e.label},e))}))):l.a.createElement("p",null,"No options."):null}},E=function e(a){var t=a.modules;return l.a.createElement(l.a.Fragment,null,t.map((function(a){var t=v[a.module.type]||null;return t&&a.data.label&&(t=b(t)),l.a.createElement("div",{key:a.module.id,id:a.module.id,name:a.module.type,className:a.module.parent},null===t?null:l.a.createElement(t,a.data),a.children&&a.children.length>0&&l.a.createElement(e,{modules:a.children}))})))},y=t(8),w=f(null),k=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={loading:!0,data:null},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(Object(d.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=y,e.setState({loading:!1,data:t||{}});case 2:case"end":return a.stop()}}),a)}))),2e3)}},{key:"render",value:function(){return this.state.loading?l.a.createElement(w,{isLoading:this.state.loading}):l.a.createElement(E,{modules:[this.state.data]})}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"module":{"id":1,"parent":null,"type":"FactFind","order":1},"data":{"header":null},"children":[{"module":{"id":2,"parent":1,"type":"Tab","order":1},"data":{"header":"Tab Title"},"children":[{"module":{"id":3,"parent":2,"type":"Section","order":1},"data":{"header":"Section Title"},"children":[{"module":{"id":4,"parent":3,"type":"Paragraph","order":1},"data":{"id":"paragraph","value":"This is a bit of paragraph text."}},{"module":{"id":5,"parent":3,"type":"Input","order":2},"data":{"id":"input","label":"Input label","defaultValue":"Row 2"}},{"module":{"id":6,"parent":3,"type":"Select","order":2},"data":{"id":"theSelect","label":"Json data label","defaultValue":"Row 2","options":[{"label":"Row 1","value":1},{"label":"Row 2","disabled":true}]}}]}]}]}')}},[[11,1,2]]]);
//# sourceMappingURL=main.7abf47ce.chunk.js.map