(this["webpackJsonpstackoverflow-api-test"]=this["webpackJsonpstackoverflow-api-test"]||[]).push([[0],{13:function(t,e,a){t.exports={postsContainer:"styles_postsContainer__25IO1",posts:"styles_posts__TM08r",postContainer:"styles_postContainer__3RC4f",post:"styles_post__3KjBY",avatar:"styles_avatar__1F7oa",post_text:"styles_post_text__3uGoF"}},97:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(24),o=a.n(c),r=a(56),i=a(23),l=a(13),j=a.n(l),p=a(3),d=n.a.memo((function(t){return console.log("post"),Object(p.jsx)("div",{className:j.a.postContainer,children:Object(p.jsx)("a",{href:t.data.link,children:Object(p.jsxs)("div",{className:j.a.post,children:[Object(p.jsx)("div",{className:j.a.avatar,children:Object(p.jsx)("img",{src:t.data.owner.profile_image,alt:""})}),Object(p.jsx)("div",{className:j.a.post_text,children:t.data.title})]})})})})),u=a(46),_=a.n(u),b=a(29),f=a.n(b),O=a(102),x=a(101),h=(a(82),a(84),n.a.memo((function(){var t=n.a.useState(!0),e=Object(i.a)(t,2),a=e[0],s=e[1],c=n.a.useState(null),o=Object(i.a)(c,2),l=o[0],u=o[1],b=n.a.useState(!0),h=Object(i.a)(b,2),m=h[0],v=h[1],y=n.a.useState(!0),g=Object(i.a)(y,2),k=g[0],w=g[1];n.a.useEffect((function(){_.a.get("https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow").then((function(t){var e=f.a.filter(t.data.items,(function(t){return!0===t.is_answered&&t.owner.reputation>=50})),a=f.a.orderBy(e,["creation_date"],["asc"]);u(a)})).catch((function(t){return console.log(t)})).finally((function(){return s(!0)}))}),[]);return Object(p.jsxs)("div",{className:j.a.posts,children:[a?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)("div",{children:Object(p.jsxs)(O.a,{onClick:function(){var t=Object(r.a)(l),e=m?"desc":"asc",a=f.a.orderBy(t,["creation_date"],[e]);v(!m),u(a),w(!k)},type:"primary",children:["\u041e\u0422\u0421\u041e\u0420\u0422\u0418\u0420\u041e\u0412\u0410\u0422\u042c \u041f\u041e ",k?"\u0423\u0411\u042b\u0412\u0410\u041d\u0418\u042e":"\u0412\u041e\u0417\u0420\u0410\u0421\u0422\u0410\u041d\u0418\u042e"]})}),a?Object(p.jsx)("div",{children:Object(p.jsx)(x.a,{tip:"Loading..."})}):l.map((function(t,e){return Object(p.jsx)(d,{data:t},e)}))]})})));var m=function(){return console.log("app"),Object(p.jsx)("div",{className:j.a.postsContainer,children:Object(p.jsx)(h,{})})};o.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.78f833e3.chunk.js.map