(this["webpackJsonpframe-web"]=this["webpackJsonpframe-web"]||[]).push([[1],{105:function(e,t,n){e.exports=n(165)},117:function(e,t){!function(e,t){var n=e.documentElement,a="orientationchange"in window?"orientationchange":"resize",r=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/18.75+"px")};e.addEventListener&&(t.addEventListener(a,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(document,window)},118:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=n(37),u=n(38),s=n(40),l=n(39),d=n(41),b=n(91),p=n(20),m=n(51),f=n.n(m),h=n(74);function E(e){return function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(f.a.mark((function t(){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),n}(a.Component)}var O=E((function(){return n.e(8).then(n.bind(null,188))})),j=E((function(){return n.e(7).then(n.bind(null,189))})),v=E((function(){return n.e(4).then(n.bind(null,193))})),w=E((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,194))})),y=E((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,190))})),S=E((function(){return n.e(6).then(n.bind(null,191))})),x=E((function(){return n.e(5).then(n.bind(null,192))})),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/login",exact:!0,component:O}),r.a.createElement(p.b,{path:"/index",exact:!0,component:j}),r.a.createElement(p.b,{path:"/addrList/:type",component:v}),r.a.createElement(p.b,{path:"/addAddr",component:w}),r.a.createElement(p.b,{path:"/pay/:data",component:y}),r.a.createElement(p.b,{path:"/paySuccess",component:S}),r.a.createElement(p.b,{path:"/payFailed",component:x}),r.a.createElement(p.a,{from:"/",to:"index"})))}}]),t}(a.Component),g=n(90),D=n(34),k=n(35),A=n(12),L=n(67),R={addressList:[],addressObj:{},userInfo:{},serviceObj:{},expressObj:{}},_=n(93),V=Object(D.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SAVE_USERINFO":return Object(A.a)({},e,{userInfo:t.userInfo});case"SAVE_ATTRINFO":return Object(A.a)({},e,{},Object(k.a)({},t.datatype,t.value));case"MODIFY_USERINFO":return Object(A.a)({},e,{userInfo:Object(A.a)({},e.userInfo,Object(k.a)({},t.key,t.value))});case L.b:return Object(A.a)({},e,{addressObj:t.addressObj});case L.a:return Object(A.a)({},e,{addressObj:{}});case"SAVE_SERVICE":return Object(A.a)({},e,{serviceObj:t.serviceObj});case"DELETE_SERVICE":return Object(A.a)({},e,{serviceObj:{}});case"SAVE_EXPRESS":return Object(A.a)({},e,{expressObj:t.expressObj});case"DELETE_EXPRESS":return Object(A.a)({},e,{expressObj:{}});default:return e}}),Object(D.a)(_.a)),C=n(94),F=n.n(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116),n(117),n(118);var T=n(167),P=n(75),M=n(102),N=n(29),W=n.n(N);n(120);W.a.locale("en"),T.a.config({top:"38.2%",duration:3,maxCount:1}),F.a.attach(document.body);var z;z=I,o.a.render(r.a.createElement(g.a,{store:V},r.a.createElement(P.a,{locale:M.a},r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a="SAVE_ADDR",r="DELETE_ADDR"}},[[105,2,3]]]);
//# sourceMappingURL=main.fe9c1e2a.chunk.js.map