(this["webpackJsonpframe-web"]=this["webpackJsonpframe-web"]||[]).push([[8],{168:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var n="https://testimg.wangjushijie.com/",a="http://bxtest.wangjushijie.com",i={getQiNiuYunToken:a+"/ht-svc/api/qiNiuYun/getQiNiuYunToken",getGroupProductRule:a+"/ht-svc/api/ht/product/getGroupProductRule",findApplyInfo:a+"/ht-svc/api/htUserApplyInfo/findApplyInfo",saveApplyInfo:a+"/ht-svc/api/htUserApplyInfo/saveApplyInfo",getPolicyInfo:a+"/ht-svc/api/policy/getPolicyInfo",updateApplyInfo:a+"/ht-svc/api/htUserApplyInfo/updateApplyInfo",getPolicyInfoList:a+"/ht-svc/api/policy/getPolicyInfoList",findApplyArea:a+"/ht-svc/api/htUserApplyInfo/findApplyArea",getJsSysDictDataByDictType:a+"/ht-svc/api/js/sys/dict/data/getJsSysDictDataByDictType",getReceiptData:a+"/ht-svc/api/receiptData/getReceiptData",getReceiptDataSubmitForReview:a+"/ht-svc/api/receiptData/getReceiptDataSubmitForReview",saveReceiptData:a+"/ht-svc/api/receiptData/saveReceiptData",getHtDeductibleInfoList:a+"/ht-svc/api/ht/deductible/info/getHtDeductibleInfoList",findProvinceList:a+"/ht-svc/api/address/findProvinceList",findCityList:a+"/ht-svc/api/address/findCityList",findAreaList:a+"/ht-svc/api/address/findAreaList",delUserAddress:a+"/ht-svc/api/jaddress/delUserAddress",findUserAddress:a+"/ht-svc/api/jaddress/findUserAddress",saveUserAddress:a+"/ht-svc/api/jaddress/saveUserAddress",singleUserAddress:a+"/ht-svc/api/jaddress/singleUserAddress",updateUserAddress:a+"/ht-svc/api/jaddress/updateUserAddress",getFormRateProgress:a+"/ht-svc/api/formInfo/getFormRateProgress",getMaintenanceReport:a+"/ht-svc/api/formInfo/getMaintenanceReport",getWeixinOpenId:a+"/ht-svc/api/wechat/getWeixinOpenId",navigationMap:a+"/ht-svc/api/wechat/navigationMap",wxPayOrder:a+"/ht-svc/api/wechat/wxPayOrder",findUserInfo:a+"/ht-svc/api/htUserInfo/findUserInfo",saveUser:a+"/ht-svc/api/htUserInfo/saveUser",getMaintenancePlan:a+"/ht-svc/api/assembly/unit/getMaintenancePlan",findPostAddress:a+"/ht-svc/api/daddress/findPostAddress",findAddress:a+"/ht-svc/api/sf/findAddress",logisticsInformation:a+"/ht-svc/api/sf/logisticsInformation",saveSfOrder:a+"/ht-svc/api/sf/saveSfOrder",getIdentification:a+"/ht-svc/api/identification/getIdentification",getBankCardInformation:a+"/ht-svc/getBankCardInformation"}},169:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(51),a=r.n(n),i=r(74);function o(e,t){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem(t,JSON.stringify(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return JSON.parse(localStorage.getItem(e))}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e;return e.splice(t,r),n}function p(e){return isNaN(Number(e))?e:-1!==String(e).indexOf(".")?Number(e).toFixed(2):e+".00"}},171:function(e,t,r){"use strict";var n=r(167);r(168);function a(e,t){return e<<t|e>>>32-t}function i(e,t){var r,n,a,i,o;return a=2147483648&e,i=2147483648&t,o=(1073741823&e)+(1073741823&t),(r=1073741824&e)&(n=1073741824&t)?2147483648^o^a^i:r|n?1073741824&o?3221225472^o^a^i:1073741824^o^a^i:o^a^i}function o(e,t,r,n,o,s,c){return e=i(e,i(i(function(e,t,r){return e&t|~e&r}(t,r,n),o),c)),i(a(e,s),t)}function s(e,t,r,n,o,s,c){return e=i(e,i(i(function(e,t,r){return e&r|t&~r}(t,r,n),o),c)),i(a(e,s),t)}function c(e,t,r,n,o,s,c){return e=i(e,i(i(function(e,t,r){return e^t^r}(t,r,n),o),c)),i(a(e,s),t)}function u(e,t,r,n,o,s,c){return e=i(e,i(i(function(e,t,r){return t^(e|~r)}(t,r,n),o),c)),i(a(e,s),t)}function d(e){var t,r="",n="";for(t=0;t<=3;t++)r+=(n="0"+(e>>>8*t&255).toString(16)).substr(n.length-2,2);return r}var f=function(e){var t,r,n,a,f,p,h,l,v,g=Array();for(g=function(e){var t,r=e.length,n=r+8,a=16*((n-n%64)/64+1),i=Array(a-1),o=0,s=0;for(;s<r;)o=s%4*8,i[t=(s-s%4)/4]=i[t]|e.charCodeAt(s)<<o,s++;return o=s%4*8,i[t=(s-s%4)/4]=i[t]|128<<o,i[a-2]=r<<3,i[a-1]=r>>>29,i}(e=function(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}(e)),p=1732584193,h=4023233417,l=2562383102,v=271733878,t=0;t<g.length;t+=16)r=p,n=h,a=l,f=v,p=o(p,h,l,v,g[t+0],7,3614090360),v=o(v,p,h,l,g[t+1],12,3905402710),l=o(l,v,p,h,g[t+2],17,606105819),h=o(h,l,v,p,g[t+3],22,3250441966),p=o(p,h,l,v,g[t+4],7,4118548399),v=o(v,p,h,l,g[t+5],12,1200080426),l=o(l,v,p,h,g[t+6],17,2821735955),h=o(h,l,v,p,g[t+7],22,4249261313),p=o(p,h,l,v,g[t+8],7,1770035416),v=o(v,p,h,l,g[t+9],12,2336552879),l=o(l,v,p,h,g[t+10],17,4294925233),h=o(h,l,v,p,g[t+11],22,2304563134),p=o(p,h,l,v,g[t+12],7,1804603682),v=o(v,p,h,l,g[t+13],12,4254626195),l=o(l,v,p,h,g[t+14],17,2792965006),p=s(p,h=o(h,l,v,p,g[t+15],22,1236535329),l,v,g[t+1],5,4129170786),v=s(v,p,h,l,g[t+6],9,3225465664),l=s(l,v,p,h,g[t+11],14,643717713),h=s(h,l,v,p,g[t+0],20,3921069994),p=s(p,h,l,v,g[t+5],5,3593408605),v=s(v,p,h,l,g[t+10],9,38016083),l=s(l,v,p,h,g[t+15],14,3634488961),h=s(h,l,v,p,g[t+4],20,3889429448),p=s(p,h,l,v,g[t+9],5,568446438),v=s(v,p,h,l,g[t+14],9,3275163606),l=s(l,v,p,h,g[t+3],14,4107603335),h=s(h,l,v,p,g[t+8],20,1163531501),p=s(p,h,l,v,g[t+13],5,2850285829),v=s(v,p,h,l,g[t+2],9,4243563512),l=s(l,v,p,h,g[t+7],14,1735328473),p=c(p,h=s(h,l,v,p,g[t+12],20,2368359562),l,v,g[t+5],4,4294588738),v=c(v,p,h,l,g[t+8],11,2272392833),l=c(l,v,p,h,g[t+11],16,1839030562),h=c(h,l,v,p,g[t+14],23,4259657740),p=c(p,h,l,v,g[t+1],4,2763975236),v=c(v,p,h,l,g[t+4],11,1272893353),l=c(l,v,p,h,g[t+7],16,4139469664),h=c(h,l,v,p,g[t+10],23,3200236656),p=c(p,h,l,v,g[t+13],4,681279174),v=c(v,p,h,l,g[t+0],11,3936430074),l=c(l,v,p,h,g[t+3],16,3572445317),h=c(h,l,v,p,g[t+6],23,76029189),p=c(p,h,l,v,g[t+9],4,3654602809),v=c(v,p,h,l,g[t+12],11,3873151461),l=c(l,v,p,h,g[t+15],16,530742520),p=u(p,h=c(h,l,v,p,g[t+2],23,3299628645),l,v,g[t+0],6,4096336452),v=u(v,p,h,l,g[t+7],10,1126891415),l=u(l,v,p,h,g[t+14],15,2878612391),h=u(h,l,v,p,g[t+5],21,4237533241),p=u(p,h,l,v,g[t+12],6,1700485571),v=u(v,p,h,l,g[t+3],10,2399980690),l=u(l,v,p,h,g[t+10],15,4293915773),h=u(h,l,v,p,g[t+1],21,2240044497),p=u(p,h,l,v,g[t+8],6,1873313359),v=u(v,p,h,l,g[t+15],10,4264355552),l=u(l,v,p,h,g[t+6],15,2734768916),h=u(h,l,v,p,g[t+13],21,1309151649),p=u(p,h,l,v,g[t+4],6,4149444226),v=u(v,p,h,l,g[t+11],10,3174756917),l=u(l,v,p,h,g[t+2],15,718787259),h=u(h,l,v,p,g[t+9],21,3951481745),p=i(p,r),h=i(h,n),l=i(l,a),v=i(v,f);return(d(p)+d(h)+d(l)+d(v)).toUpperCase()};function p(e){var t;t=function e(t){for(var r=Object.keys(t).sort(),n={},a=0;a<r.length;a++)"object"!=typeof t[r[a]]||Array.isArray(t[r[a]])?n[r[a]]=t[r[a]]:n[r[a]]=e(t[r[a]]);return n}(e);var r="";for(var n in t){r+=n+"="+("object"==typeof t[n]?JSON.stringify(t[n]):t[n])+"&"}return r}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;t.key="0Hind9iRVt0WhQwywVHqeqHiSELUW3sF",t.source="wx",t.timeStamp=(new Date).getTime();var a=f(p(t)+"key=0Hind9iRVt0WhQwywVHqeqHiSELUW3sF").toLocaleUpperCase();t.sign=a;var i=new Promise((function(r,a){var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch(e,i).then((function(e){return e.json()})).then((function(e){switch(e.status){case"SUCCESS":r(e);break;case"SYSTEM_ERROR":n.a.error("\u7cfb\u7edf\u5f02\u5e38");break;case"INVALID_PARAM":n.a.error("\u65e0\u6548\u53c2\u6570");break;case"INVALID_PUBLIC_PARAM":n.a.error("\u65e0\u6548\u516c\u5171\u53c2\u6570");break;case"API_NOT_EXIST":n.a.error("\u8be5\u65b9\u6cd5\u4e0d\u5b58\u5728");break;case"INVALID_SIGN":n.a.error("\u65e0\u6548\u7b7e\u540d\u6216\u5df2\u8fc7\u671f");break;case"DUPLICATE_DATA":n.a.error("\u6570\u636e\u91cd\u590d");break;default:r(e)}})).catch((function(e){console.log("\u63a5\u53e3\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f",e),n.a.error("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}))})),o=new Promise((function(e,t){setTimeout((function(){e({status:"NONETWORK",msg:"\u8bf7\u6c42\u8d85\u65f6"})}),r)}));return Promise.race([i,o])}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,r=new Promise((function(t,r){fetch(e,{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(e){switch(e.status){case"SUCCESS":t(e);break;case"SYSTEM_ERROR":n.a.error("\u7cfb\u7edf\u5f02\u5e38");break;case"INVALID_PARAM":n.a.error("\u65e0\u6548\u53c2\u6570");break;case"INVALID_PUBLIC_PARAM":n.a.error("\u65e0\u6548\u516c\u5171\u53c2\u6570");break;case"API_NOT_EXIST":n.a.error("\u8be5\u65b9\u6cd5\u4e0d\u5b58\u5728");break;case"INVALID_SIGN":n.a.error("\u65e0\u6548\u7b7e\u540d\u6216\u5df2\u8fc7\u671f");break;case"DUPLICATE_DATA":n.a.error("\u6570\u636e\u91cd\u590d");break;default:t(e)}})).catch((function(e){console.log("\u63a5\u53e3\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f",e),n.a.error("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}))})),a=new Promise((function(e,r){setTimeout((function(){e({status:"NONETWORK",msg:"\u8bf7\u6c42\u8d85\u65f6"})}),t)}));return Promise.race([r,a])}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;t.key="0Hind9iRVt0WhQwywVHqeqHiSELUW3sF",t.source="wx",t.timeStamp=(new Date).getTime();var a=f(p(t)+"key=0Hind9iRVt0WhQwywVHqeqHiSELUW3sF").toLocaleUpperCase();t.sign=a;var i=new Promise((function(r,a){var i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch(e,i).then((function(e){return e.json()})).then((function(e){switch(e.status){case"SUCCESS":r(e);break;case"SYSTEM_ERROR":n.a.error("\u7cfb\u7edf\u5f02\u5e38");break;case"INVALID_PARAM":n.a.error("\u65e0\u6548\u53c2\u6570");break;case"INVALID_PUBLIC_PARAM":n.a.error("\u65e0\u6548\u516c\u5171\u53c2\u6570");break;case"API_NOT_EXIST":n.a.error("\u8be5\u65b9\u6cd5\u4e0d\u5b58\u5728");break;case"INVALID_SIGN":n.a.error("\u65e0\u6548\u7b7e\u540d\u6216\u5df2\u8fc7\u671f");break;case"DUPLICATE_DATA":n.a.error("\u6570\u636e\u91cd\u590d");break;default:r(e)}})).catch((function(e){console.log("\u63a5\u53e3\u8bf7\u6c42\u9519\u8bef\u4fe1\u606f",e),n.a.error("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}))})),o=new Promise((function(e,t){setTimeout((function(){e({status:"NONETWORK",msg:"\u8bf7\u6c42\u8d85\u65f6"})}),r)}));return Promise.race([i,o])}r.d(t,"b",(function(){return h})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return v}))},188:function(e,t,r){"use strict";r.r(t);var n=r(37),a=r(38),i=r(40),o=r(39),s=r(41),c=r(0),u=r.n(c),d=r(171),f=r(168),p=r(169),h=r(167),l=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={},r}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=p.c("userId")||"";if(t)Object(d.a)(f.b.findUserInfo+"?userId=".concat(t)).then((function(t){"SUCCESS"===t.status?(p.e("userId",t.data.id),p.e("userInfo",t.data),e.props.history.replace("/index")):(p.d("userInfo"),p.d("userId"),Object(d.a)(f.b.navigationMap+"?url=".concat(window.location.href)).then((function(e){"SUCCESS"===e.status?window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.data.appid,"&redirect_uri=http://bxtest.wangjushijie.com/site/&response_type=code&scope=snsapi_userinfo&state=STATE%23wechat_redirect&connect_redirect=1#wechat_redirect")):(h.a.error("\u62c9\u8d77\u6388\u6743\u5931\u8d25"),window.wx.closeWindow())})))})).catch((function(e){h.a.error("\u7cfb\u7edf\u5f02\u5e38"),console.log(e)}));else{var r=decodeURIComponent((new RegExp("[?|&]code=([^&;]+?)(&|#|;|$)").exec(window.location.href)||[,""])[1].replace(/\+/g,"%20"))||null;r?Object(d.a)(f.b.getWeixinOpenId+"?code=".concat(r)).then((function(t){"SUCCESS"===t.status?Object(d.b)(f.b.saveUser,{openId:t.data.openId,userName:t.data.nickname}).then((function(t){"SUCCESS"===t.status?(p.e("userId",t.data.id),p.e("userInfo",t.data),e.props.history.replace("/index")):h.a.error("\u6388\u6743\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5")})).catch((function(e){h.a.error("\u7cfb\u7edf\u5f02\u5e38"),console.log(e)})):(h.a.error("\u6388\u6743\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"),window.wx.closeWindow())})).catch((function(e){h.a.error("\u7cfb\u7edf\u5f02\u5e38"),window.wx.closeWindow(),console.log(e)})):(p.d("userInfo"),p.d("userId"),Object(d.a)(f.b.navigationMap+"?url=".concat(window.location.href)).then((function(e){"SUCCESS"===e.status?window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.data.appid,"&redirect_uri=http://bxtest.wangjushijie.com/site/&response_type=code&scope=snsapi_userinfo&state=STATE%23wechat_redirect&connect_redirect=1#wechat_redirect")):(h.a.error("\u62c9\u8d77\u6388\u6743\u5931\u8d25"),window.wx.closeWindow())})))}}},{key:"render",value:function(){return null}}]),t}(u.a.Component);t.default=l}}]);
//# sourceMappingURL=8.69eddd85.chunk.js.map