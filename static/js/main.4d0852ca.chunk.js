(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(8),u=n(22),o=n(6),l=n(9),j=n.n(l),d=n(16),b=n(24);n(40),n(51),n(52);b.a.initializeApp({apiKey:"AIzaSyCJMfo_CLdgnmih6MDXg8e3gqrhIdUQAbs",authDomain:"nwitter-3879c.firebaseapp.com",projectId:"nwitter-3879c",storageBucket:"nwitter-3879c.appspot.com",messagingSenderId:"120995367242",appId:"1:120995367242:web:787925c92d5ea248f5d9b3"});var p=b.a,f=b.a.auth(),O=b.a.firestore(),h=b.a.storage(),m=n(1),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),p=b[0],O=b[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(m.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},v=n(12),g=n(23),y=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})]})},w=n(34),N=n(19),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),b=l[0],p=l[1],f=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){u((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("nweets/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},type:"text",placeholder:"Edit your Nweet",value:b,required:!0,autoFocus:!0,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(v.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(v.a,{icon:N.a})})]})]})})},I=n(54),k=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],b=o[1],p=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("nweets").add(u);case 15:s(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return b("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){O.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(k,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,c=Object(o.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),u=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("nweets").where("creatorId","==",n.uid).orderBy("createAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){b()}),[]);var p=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(m.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Display name",onChange:function(e){var t=e.target.value;l(t)},value:u,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(u.a,{children:[n&&Object(m.jsx)(F,{userObj:a}),Object(m.jsx)(o.c,{children:n?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(C,{userObj:a})}),Object(m.jsx)(o.a,{exact:!0,path:"/profile",children:Object(m.jsx)(A,{userObj:a,refreshUser:t})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(null),j=Object(i.a)(l,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){e?(o(!0),b(e),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(o(!1),b(null)),c(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(U,{refreshUser:function(){var e=f.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:u,userObj:d}):"Initializing..."})};n(49);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.4d0852ca.chunk.js.map