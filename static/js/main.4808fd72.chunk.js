(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{32:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,u,b,l,j,h,p,x,m,f,g,v,O,w,y,k,S,_,M=t(1),T=t.n(M),z=t(18),N=t.n(z),G=t(10),I=t(2),B=t(3),E=t(4),R=Object(E.a)(r||(r=Object(B.a)(["\n  :root {\n    --maxWidth: 1280px; \n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535; \n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;  \n  }\n\n  body {  \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n    a{\n      tect-decoration: none;\n    }\n  }\n"]))),J=t.p+"static/media/react-movie-logo.42955eb6.svg",W=t.p+"static/media/tmdb_logo.f15b6632.svg",q=E.b.div(a||(a=Object(B.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),C=E.b.div(c||(c=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin  0 auto;\n\n"]))),F=E.b.img(i||(i=Object(B.a)(["\n  width: 200px;\n  @media screen and max-width: 500px){\n    width: 150px;\n  }\n"]))),U=E.b.img(o||(o=Object(B.a)(["\n  width:100px;\n  @media screen and (max-width: 500px){\n    width: 80px;\n  }\n"]))),D=t(0),L=function(){return Object(D.jsx)(q,{children:Object(D.jsxs)(C,{children:[Object(D.jsx)(G.b,{to:"/",children:Object(D.jsx)(F,{src:J,alt:"rmdb-logo"})}),Object(D.jsx)(U,{src:W,ALT:"tmdb-logo"})]})})},A="https://api.themoviedb.org/3/",H="4a74ac2f39aac070e8c51ab6ae5cdc65",P="".concat(A,"search/movie?api_key=").concat(H,"&language=en-US&query="),K="".concat(A,"movie/popular?api_key=").concat(H,"&language=en-US"),Q="".concat(A,"authentication/token/new?api_key=").concat(H),V="".concat(A,"authentication/token/validate_with_login?api_key=").concat(H),X="".concat(A,"authentication/session/new?api_key=").concat(H),Y="http://image.tmdb.org/t/p/",Z="w1280",$="w780",nn=t(6),en=t.n(nn),tn=t(13),rn=t(8),an=t(9),cn=t(5),on={method:"POST",headers:{"Content-Type":"application/json"}},sn={fetchMovies:function(){var n=Object(an.a)(en.a.mark((function n(e,t){var r;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"".concat(P).concat(e,"&page=").concat(t):"".concat(K,"&page=").concat(t),console.log(r),n.next=4,fetch(r);case 4:return n.next=6,n.sent.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(an.a)(en.a.mark((function n(e){var t,r;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A,"movie/").concat(e,"?api_key=").concat(H),n.next=3,fetch(t);case 3:if(200!==(r=n.sent).status){n.next=10;break}return n.next=7,r.json();case 7:return n.abrupt("return",n.sent);case 10:throw new Error("Movie with id ".concat(e," not found ."));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(an.a)(en.a.mark((function n(e){var t;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A,"movie/").concat(e,"/credits?api_key=").concat(H),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(an.a)(en.a.mark((function n(){var e;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Q);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(an.a)(en.a.mark((function n(e,t,r){var a,c;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={username:t,password:r,request_token:e},n.next=3,fetch(V,Object(rn.a)(Object(rn.a)({},on),{},{body:JSON.stringify(a)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(X,Object(rn.a)(Object(rn.a)({},on),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},dn=sn,un=function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")},bn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},ln=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},jn={page:0,results:[],total_pages:0,total_results:0},hn=E.b.div(s||(s=Object(B.a)(["\n  background: ",";\n  background-size: 100%, cover;\n  background-position: center;\n  height: 555px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), var(--darkGrey)")})),pn=E.b.div(d||(d=Object(B.a)(["\n  padding: 20px;\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n"]))),xn=E.b.div(u||(u=Object(B.a)(["\n  z-index: 100;\n  max-width: 700px;\n  position: absolute;\n  bottom: 40px;\n  margin-right: 20px;\n  min-height: 100px;\n  color: var(--white);\n\n  h1 {\n    font-size: var(--fontSuperBig);\n\n    @media screen and (max-width: 720px) {\n      font-size: var(--fontBig);\n    }\n  }\n\n  p {\n    font-size: var(--fontMed);\n  \n    @media screen and (max-width: 720px) {\n      font-size: var(--fontSmall);\n    }\n  }\n\n  @media screen and (max-width: 720px) {\n    max-width: 100%;\n  }\n"]))),mn=function(n){return Object(D.jsx)(hn,{image:n.image,children:Object(D.jsx)(pn,{children:Object(D.jsxs)(xn,{children:[Object(D.jsx)("h1",{children:n.title}),Object(D.jsx)("p",{children:n.text})]})})})},fn=E.b.div(b||(b=Object(B.a)(["\n  max-width: var(--maxWidth);\n  margin: 0 auto;\n  padding: 0 20px;\n\n  h1 {\n    color: var(--medGrey);\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),gn=E.b.div(l||(l=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 2rem;\n"]))),vn=function(n){var e=n.header,t=n.children;return Object(D.jsxs)(fn,{children:[Object(D.jsx)("h1",{children:e}),Object(D.jsx)(gn,{children:t})]})},On=E.b.img(j||(j=Object(B.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 720px;\n  transition: all 0.3s;\n  object-fit: cover;\n  border-radius: 20px;\n  animation: animateMovieThumb 0.5s;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  @keyframes animateMovieThumb {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),wn=function(n){var e=n.image,t=n.movieId,r=n.clickable;return Object(D.jsx)("div",{children:r?Object(D.jsx)(G.b,{to:"/".concat(t),children:Object(D.jsx)(On,{src:e,alt:"movie-thumb"})}):Object(D.jsx)(On,{src:e,alt:"movie-thumb"})})},yn=E.b.div(h||(h=Object(B.a)(["\n  border: 5px solid var(--lightGrey); \n  border-top: 5px solid var(--medGrey);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),kn=yn,Sn=t.p+"static/media/search-icon.cd820f5a.svg",_n=E.b.div(p||(p=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),Mn=E.b.div(x||(x=Object(B.a)(["\n  position: relative;\n  max-width: var(--maxWidth);\n  width: 100%;\n  height: 55px;\n  background: var(--medGrey);\n  margin: 0 auto;\n  border-radius: 40px;\n  color: var(--white);\n\n  img {\n    position: absolute;\n    left: 15px;\n    top: 14px;\n    width: 30px;\n  }\n\n  input {\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: var(--white);\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n"]))),Tn=function(n){var e=n.setSearchTerm,t=Object(M.useState)(""),r=Object(cn.a)(t,2),a=r[0],c=r[1],i=Object(M.useRef)(!0);return Object(M.useEffect)((function(){if(!i.current){var n=setTimeout((function(){e(a)}),500);return function(){return clearTimeout(n)}}i.current=!1}),[e,a]),Object(D.jsx)(_n,{children:Object(D.jsxs)(Mn,{children:[Object(D.jsx)("img",{src:Sn,alt:"search-Icon"}),Object(D.jsx)("input",{type:"text",placeholder:"search movie",onChange:function(n){return c(n.currentTarget.value)},value:a})]})})},zn=E.b.button(m||(m=Object(B.a)(["\n  display: block;\n  background: var(--darkGrey);\n  width: 25%;\n  min-width: 200px;\n  height: 60px;\n  border-radius: 30px;\n  color: var(--white);\n  border: 0;\n  font-size: var(--fontBig);\n  margin: 20px auto;\n  transition: all 0.3s;\n  outline: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]))),Nn=function(n){var e=n.text,t=n.callback;return Object(D.jsx)(zn,{type:"button",onClick:t,children:e})},Gn=t.p+"static/media/no_image.22d2aa4d.jpg",In=function(){var n=function(){var n=Object(M.useState)(""),e=Object(cn.a)(n,2),t=e[0],r=e[1],a=Object(M.useState)(jn),c=Object(cn.a)(a,2),i=c[0],o=c[1],s=Object(M.useState)(!1),d=Object(cn.a)(s,2),u=d[0],b=d[1],l=Object(M.useState)(!1),j=Object(cn.a)(l,2),h=j[0],p=j[1],x=Object(M.useState)(!1),m=Object(cn.a)(x,2),f=m[0],g=m[1];console.log(t);var v=function(){var n=Object(an.a)(en.a.mark((function n(e){var t,r,a=arguments;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=1,p(!1),b(!0),n.next=6,dn.fetchMovies(t,e);case 6:r=n.sent,o((function(n){return Object(rn.a)(Object(rn.a)({},r),{},{results:e>1?[].concat(Object(tn.a)(n.results),Object(tn.a)(r.results)):Object(tn.a)(r.results)})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),p(!0);case 13:b(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(M.useEffect)((function(){if(!t){var n=ln("homeState");if(n)return console.log("grabbing from session storage"),void o(n)}console.log("grabbing from api"),o(jn),v(1,t)}),[t]),Object(M.useEffect)((function(){f&&(v(i.page+1,t),g(!1))}),[f,t,i.page]),Object(M.useEffect)((function(){t||sessionStorage.setItem("homeState",JSON.stringify(i))}),[t,i]),{state:i,loading:u,error:h,searchTerm:t,setSearchTerm:r,setIsLoadingMore:g}}(),e=n.state,t=n.loading,r=n.error,a=n.searchTerm,c=n.setSearchTerm,i=n.setIsLoadingMore;return console.log(e),r?Object(D.jsxs)("div",{className:"error-container",children:[Object(D.jsx)("h1",{children:"Something went wrong!!"}),Object(D.jsx)("h1",{children:"Try again later."})]}):Object(D.jsxs)(D.Fragment,{children:[!a&&e.results[0]&&Object(D.jsx)(mn,{image:"".concat(Y).concat(Z).concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}),Object(D.jsx)(Tn,{setSearchTerm:c}),Object(D.jsx)(vn,{header:a?"Search Result":"Popular Movies",children:e.results.map((function(n){return Object(D.jsx)(wn,{clickable:!0,image:n.poster_path?Y+$+n.poster_path:Gn,movieId:n.id},n.id)}))}),t&&Object(D.jsx)(kn,{}),e.page<e.total_pages&&!t&&Object(D.jsx)(Nn,{text:"Load More",callback:function(){return i(!0)}})]})},Bn=E.b.div(f||(f=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 70px;\n  background: var(--medGrey);\n  color: var(--white);\n"]))),En=E.b.div(g||(g=Object(B.a)(["\n  display: flex;\n  width: 100%;\n  max-width: var(--maxWidth);\n  padding: 0 20px;\n\n  span {\n    font-size: 1.2rem;\n    color: var(--white);\n    padding-right: 10px;\n\n    @media screen and (max-width: 768px) {\n      font-size: 16px;\n    }\n  }\n"]))),Rn=function(n){var e=n.movieTitle;return Object(D.jsx)(Bn,{children:Object(D.jsxs)(En,{children:[Object(D.jsx)(G.b,{to:"/",style:{textDecoration:"none"},children:Object(D.jsx)("span",{children:"Home"})}),Object(D.jsx)("span",{children:"|"}),Object(D.jsx)("span",{children:e})]})})},Jn=E.b.div(v||(v=Object(B.a)(["\n  background: ",";\n  background-size: cover;\n  background-position: center;\n  padding: 40px 20px;\n  animation: animateMovieinfo 1s;\n\n  @keyframes animateMovieinfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.backdrop?"url('".concat(Y).concat(Z).concat(n.backdrop,"')"):"#000"})),Wn=E.b.div(O||(O=Object(B.a)(["\n  display: flex;\n  max-width: 1280px;\n\n  margin: 0 auto;\n  background: rgb(0, 0, 0, 0.7);\n  border-radius: 20px;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    max-height: none;\n  }\n"]))),qn=E.b.div(w||(w=Object(B.a)(["\n  width: 100%;\n  padding: 20px 40px;\n  color: var(--white);\n  overflow: hidden;\n\n  .rating-director {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 25px;\n    margin: 0px 0 0 0;\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n  }\n\n    p {\n      margin: 0;\n    }\n  }\n\n  h1 {\n    @media screen and (max-width: 768px) {\n      font-size: var(--fontBig);\n    }\n  }\n"]))),Cn=function(n){var e=n.movie;return Object(D.jsx)(Jn,{backdrop:e.backdrop_path,children:Object(D.jsxs)(Wn,{children:[Object(D.jsx)(wn,{image:e.poster_path?"".concat(Y).concat($).concat(e.poster_path):Gn,clickable:!1,alt:"movie-thumb"}),Object(D.jsxs)(qn,{children:[Object(D.jsx)("h1",{children:e.title}),Object(D.jsx)("h3",{children:"PLOT"}),Object(D.jsx)("p",{children:e.overview}),Object(D.jsxs)("div",{className:"rating-director",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("h3",{children:"RATING"}),Object(D.jsx)("div",{className:"score",children:e.vote_average})]}),Object(D.jsxs)("div",{className:"director",children:[Object(D.jsxs)("h3",{children:["DIRECTOR",e.directors.length>1?"S":""]}),e.directors.map((function(n){return Object(D.jsx)("p",{children:n.name},n.credit_id)}))]})]})]})]})})},Fn=E.b.div(y||(y=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  min-height: 100px;\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]))),Un=E.b.div(k||(k=Object(B.a)(["\n  display: flex;\n  max-width: var(--maxWidth);\n  width: 100%;\n  margin: 0 auto;\n\n  .column {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: var(--medGrey);\n    border-radius: 20px;\n    margin: 0 20px;\n    flex: 1;\n\n    :first-child {\n      margin-left: 0;\n    }\n\n    :last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    display: block;\n\n    .column {\n      margin: 20px 0;\n    }\n  }\n"]))),Dn=function(n){var e=n.time,t=n.budget,r=n.revenue;return Object(D.jsx)(Fn,{children:Object(D.jsxs)(Un,{children:[Object(D.jsx)("div",{className:"column",children:Object(D.jsxs)("p",{children:["Running time: ",un(e)]})}),Object(D.jsx)("div",{className:"column",children:Object(D.jsxs)("p",{children:["Budget: ",bn(t)]})}),Object(D.jsx)("div",{className:"column",children:Object(D.jsxs)("p",{children:["Revenue: ",bn(r)]})})]})})},Ln=E.b.div(S||(S=Object(B.a)(["\n  color: var(--white);\n  background: var(--darkGrey);\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n\n  h3 {\n    margin: 10px 0 0 0;\n  }\n\n  p {\n    margin: 5px 0;\n  }\n"]))),An=E.b.img(_||(_=Object(B.a)(["\n  display: block;\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 15px;\n"]))),Hn=function(n){var e=n.name,t=n.character,r=n.imageUrl;return Object(D.jsxs)(Ln,{children:[Object(D.jsx)(An,{src:r,alt:"actor-thumb"}),Object(D.jsx)("h3",{children:e}),Object(D.jsx)("p",{children:t})]})},Pn=function(){var n=Object(I.g)().movieId,e=function(n){var e=Object(M.useState)({}),t=Object(cn.a)(e,2),r=t[0],a=t[1],c=Object(M.useState)(!0),i=Object(cn.a)(c,2),o=i[0],s=i[1],d=Object(M.useState)(!1),u=Object(cn.a)(d,2),b=u[0],l=u[1],j=Object(M.useState)(""),h=Object(cn.a)(j,2),p=h[0],x=h[1];return Object(M.useEffect)((function(){var e=function(){var e=Object(an.a)(en.a.mark((function e(){var t,r,c;return en.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),l(!1),e.next=5,dn.fetchMovie(n);case 5:return t=e.sent,e.next=8,dn.fetchCredits(n);case 8:r=e.sent,c=r.crew.filter((function(n){return"Director"===n.job})),a(Object(rn.a)(Object(rn.a)({},t),{},{actors:r.cast,directors:c})),s(!1),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("From useMovieFetch",e.t0.message),l(!0),s(!1),x(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),t=ln(n);if(t)return a(t),void s(!1);e()}),[n]),Object(M.useEffect)((function(){sessionStorage.setItem(n,JSON.stringify(r))}),[n,r]),{state:r,loading:o,error:b,errorMessage:p}}(n),t=e.state,r=e.loading,a=e.error,c=e.errorMessage;return isNaN(n)?Object(D.jsx)("div",{className:"error-container",children:"Movie url not found"}):r?Object(D.jsx)(yn,{}):a?Object(D.jsx)("div",{className:"error-container",children:c}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Rn,{movieTitle:t.original_title}),Object(D.jsx)(Cn,{movie:t}),Object(D.jsx)(Dn,{time:t.runtime,budget:t.budget,revenue:t.revenue}),Object(D.jsx)(vn,{header:"Actors",children:t.actors.map((function(n){return Object(D.jsx)(Hn,{name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(Y).concat($).concat(n.profile_path):Gn},n.credit_id)}))})]})},Kn=function(){return Object(D.jsx)("div",{children:"not found"})},Qn=function(){return Object(D.jsxs)(G.a,{children:[Object(D.jsx)(L,{}),Object(D.jsxs)(I.c,{children:[Object(D.jsx)(I.a,{path:"/",element:Object(D.jsx)(In,{})}),Object(D.jsx)(I.a,{path:"/:movieId",element:Object(D.jsx)(Pn,{})}),Object(D.jsx)(I.a,{path:"/q*",element:Object(D.jsx)(Kn,{})})]}),Object(D.jsx)(R,{})]})};N.a.render(Object(D.jsx)(T.a.StrictMode,{children:Object(D.jsx)(Qn,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4808fd72.chunk.js.map