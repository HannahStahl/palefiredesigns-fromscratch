(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=(a(84),a(16)),i=a(17),s=a(20),d=a(18),u=a(19),h=(a(28),a(162)),m=a(163),p=a(26),b=a(160),f=a(154),E=a(155),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,{collapseOnSelect:!0},l.a.createElement(b.a.Header,null,l.a.createElement(b.a.Brand,null,l.a.createElement("a",{href:"/",style:{fontSize:"25px"}},"Pale Fire Designs")),l.a.createElement(b.a.Toggle,null)),l.a.createElement(b.a.Collapse,null,l.a.createElement(f.a,{pullRight:!0},l.a.createElement(E.a,{eventKey:1,href:"/"},"Shop"),l.a.createElement(E.a,{eventKey:2,href:"/About"},"About"),l.a.createElement(E.a,{eventKey:3,href:"/Events"},"Events")))))}}]),t}(n.Component),v=a(159),w=a(153),j=a(161),k=a(156),y=a(157),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={showModal:!1,showText:!1},e.handleShowModal=e.handleShowModal.bind(Object(p.a)(Object(p.a)(e))),e.handleCloseModal=e.handleCloseModal.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleShowModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(v.a,{show:this.state.showModal,onHide:this.handleCloseModal},l.a.createElement(v.a.Header,{className:"modal-header",closeButton:!0},l.a.createElement(v.a.Title,{className:"h3"},"Lampwork Drop Pendant"),l.a.createElement("div",null,l.a.createElement("p",null,"Once I held Sheri Fisher's beautiful lampwork glass drop... "),l.a.createElement("a",{className:"read-more",onClick:function(){return e.setState({showText:!e.state.showText})}},"Read more"),l.a.createElement(w.a,{in:this.state.showText},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("p",null,"(simply can't capture the true beauty if a photo!) in my hand and moved it around in the light, I knew I had to hang it from several strands of rainbow metallic tri-cut seed beads I'd been hoarding until just the right piece came along! I also recently acquired a tribal-looking solid bronze ring bead that also needed to be worked into the mix. My beadwoven bails of cranberry luster seed beads to gather the seed beads and connect to the ring and another, smaller bail of tiny bronze seed beads to connect the ring to the lampwork pendant pull it all together. And don't overlook the lovely textured bronze cones and the fabulous organic bronze toggle clasp by Russian metalsmith, Anna Chernykh of AnnaBronze! A nice 16-inch length, with a 2-inch pendant, including the hand beaded bails.")))))),l.a.createElement(v.a.Body,null,l.a.createElement(j.a,{interval:null},l.a.createElement(j.a.Item,null,l.a.createElement("img",{alt:"necklace",src:"/necklace.jpg"})),l.a.createElement(j.a.Item,null,l.a.createElement("img",{alt:"necklace",src:"/necklace.jpg"})),l.a.createElement(j.a.Item,null,l.a.createElement("img",{alt:"necklace",src:"/necklace.jpg"})))),l.a.createElement(v.a.Footer,{className:"modal-footer centered"},l.a.createElement(k.a,{className:"button"},"Add to Cart"),l.a.createElement("p",{style:{paddingTop:"10px"}},"$145"))),l.a.createElement("div",{className:"items"},l.a.createElement(y.a,{href:"#",onClick:this.handleShowModal,alt:"necklace",src:"./necklace.jpg",className:"centered"}),l.a.createElement(y.a,{href:"#",alt:"bracelet",src:"./bracelet.jpg",className:"centered"}),l.a.createElement(y.a,{href:"#",alt:"necklace",src:"./necklace.jpg",className:"centered"}),l.a.createElement(y.a,{href:"#",alt:"necklace",src:"./necklace.jpg",className:"centered"}),l.a.createElement(y.a,{href:"#",alt:"necklace",src:"./necklace.jpg",className:"centered"}),l.a.createElement(y.a,{href:"#",alt:"bracelet",src:"./bracelet.jpg",className:"centered"})))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("p",null,"Insert 'About' section here"))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement("p",null,"Insert 'Events' section here"))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:O}),l.a.createElement(m.a,{path:"/About",component:C}),l.a.createElement(m.a,{path:"/Events",component:N})))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var I=a(158);c.a.render(l.a.createElement(I.a,null,l.a.createElement(M,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(e)})}}()},28:function(e,t,a){},79:function(e,t,a){e.exports=a(152)},84:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.d29032bf.chunk.js.map