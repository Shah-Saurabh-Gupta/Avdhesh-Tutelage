(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},47:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(32),i=c.n(r),l=(c(39),c(2)),o=c.n(l),d=c(6),j=c(4),u=c(5),b=c(7),h=(c(41),Object(n.createContext)(null));c(22);function m(){var e=Object(n.useContext)(h),t=e.userData,c=e.setUserData,s=Object(b.g)(),r=function(){c({token:void 0,role:void 0,user:void 0}),localStorage.setItem("auth-token",""),localStorage.setItem("role",""),s.push("/")};return Object(a.jsx)("div",{className:"nav",children:t.user?Object(a.jsx)(a.Fragment,{children:"admin"===t.role?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"link",onClick:function(){return s.push("/admin")},children:Object(a.jsx)("p",{className:"authLink",children:"ADMIN"})}),Object(a.jsx)("div",{className:"link",onClick:r,children:Object(a.jsx)("p",{className:"authLink",children:"LOG OUT"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"link",onClick:function(){return s.push("/student")},children:Object(a.jsx)("p",{className:"authLink",children:"STUDENT"})}),Object(a.jsx)("div",{className:"link",onClick:r,children:Object(a.jsx)("p",{className:"authLink",children:"LOG OUT"})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"link",onClick:function(){return s.push("/login")},children:Object(a.jsx)("p",{className:"authLink",children:"LOG IN"})})})})}var O=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(u.c,{to:"/",children:"HOME"})}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(u.c,{to:"/courses",children:"COURSES"})}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(u.c,{to:"/notice/:noticeId",children:"NOTICES"})}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(u.c,{to:"/notes",children:"NOTES"})}),Object(a.jsx)(m,{})]})})},x=(c(47),c(3)),p=c.n(x);var f=function(){var e=Object(n.useState)({content:"Eye for an eye will make the whole world blind",author:"Mahatma Gandhi"}),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(a.jsx)("div",{className:"quote__main",children:Object(a.jsxs)("div",{className:"quote__content",children:[Object(a.jsx)("div",{className:"quote__quote",children:Object(a.jsx)("p",{children:c.content})}),Object(a.jsx)("div",{className:"quote__author",children:Object(a.jsx)("p",{children:c.author})}),Object(a.jsx)("div",{className:"quote__button",onClick:function(){p.a.get("https://api.quotable.io/random").then((function(e){s(e.data)}))},children:"Load More"})]})})};c(66);var v=function(){return Object(a.jsxs)("div",{className:"course",children:[Object(a.jsxs)("div",{className:"course__left",children:[Object(a.jsxs)("div",{className:"course__lefttop",children:[Object(a.jsx)("div",{className:"course__lefttop__1",children:Object(a.jsxs)("div",{className:"card1",children:[Object(a.jsx)("div",{className:"card1__front",children:Object(a.jsx)("div",{className:"frontclass",children:"7th"})}),Object(a.jsx)("div",{className:"card1__back",children:Object(a.jsx)("div",{className:"backclass",children:"All Subjects"})})]})}),Object(a.jsx)("div",{className:"course__lefttop__2",children:Object(a.jsxs)("div",{className:"card2",children:[Object(a.jsx)("div",{className:"card2__front",children:Object(a.jsx)("div",{className:"frontclass",children:"8th"})}),Object(a.jsx)("div",{className:"card2__back",children:Object(a.jsx)("div",{className:"backclass",children:"All Subjects"})})]})})]}),Object(a.jsxs)("div",{className:"course__leftmiddle",children:[Object(a.jsx)("div",{className:"coursebanner",children:"Address"}),Object(a.jsx)("div",{className:"coursecontent"})]}),Object(a.jsxs)("div",{className:"course__leftbottom",children:[Object(a.jsx)("div",{className:"course__leftbottom__1",children:Object(a.jsxs)("div",{className:"card4",children:[Object(a.jsx)("div",{className:"card4__front",children:Object(a.jsx)("div",{className:"frontclass",children:"10th"})}),Object(a.jsx)("div",{className:"card4__back",children:Object(a.jsxs)("div",{className:"backclass",children:["English",Object(a.jsx)("br",{}),"science",Object(a.jsx)("br",{}),"Math"]})})]})}),Object(a.jsx)("div",{className:"course__leftbottom__2",children:Object(a.jsxs)("div",{className:"card5",children:[Object(a.jsx)("div",{className:"card5__front",children:Object(a.jsx)("div",{className:"frontclass",children:"9th"})}),Object(a.jsx)("div",{className:"card5__back",children:Object(a.jsxs)("div",{className:"backclass",children:["English",Object(a.jsx)("br",{}),"science",Object(a.jsx)("br",{}),"Math"]})})]})})]})]}),Object(a.jsxs)("div",{className:"course__right",children:[Object(a.jsxs)("div",{className:"course__righttop",children:[Object(a.jsx)("div",{className:"coursebanner",children:"Qoute of the day"}),Object(a.jsx)("div",{className:"coursecontent",children:Object(a.jsx)(f,{})})]}),Object(a.jsxs)("div",{className:"course__rightmiddle",children:[Object(a.jsx)("div",{className:"course__rightmiddle__1",children:Object(a.jsxs)("div",{className:"card7",children:[Object(a.jsx)("div",{className:"card7__front",children:Object(a.jsx)("div",{className:"frontclass",children:"+1 Science"})}),Object(a.jsx)("div",{className:"card7__back",children:Object(a.jsxs)("div",{className:"backclass",children:["Physics",Object(a.jsx)("br",{}),"chemistry",Object(a.jsx)("br",{})," maths"]})})]})}),Object(a.jsx)("div",{className:"course__rightmiddle__2",children:Object(a.jsxs)("div",{className:"card8",children:[Object(a.jsx)("div",{className:"card8__front",children:Object(a.jsx)("div",{className:"frontclass",children:"+2 Commerce"})}),Object(a.jsx)("div",{className:"card8__back",children:Object(a.jsxs)("div",{className:"backclass",children:["account",Object(a.jsx)("br",{}),"economics",Object(a.jsx)("br",{}),"b.st"]})})]})}),Object(a.jsx)("div",{className:"course__rightmiddle__3",children:Object(a.jsxs)("div",{className:"card9",children:[Object(a.jsx)("div",{className:"card9__front",children:Object(a.jsx)("div",{className:"frontclass",children:"+1 Commerce"})}),Object(a.jsx)("div",{className:"card9__back",children:Object(a.jsxs)("div",{className:"backclass",children:["account",Object(a.jsx)("br",{}),"economics",Object(a.jsx)("br",{}),"b.st"]})})]})})]}),Object(a.jsxs)("div",{className:"course__rightbottom",children:[Object(a.jsxs)("div",{className:"course__rightbottom__1",children:[Object(a.jsx)("div",{className:"coursebanner"}),Object(a.jsx)("div",{className:"coursecontent",children:"Maths Diploma"})]}),Object(a.jsxs)("div",{className:"course__rightbottom__2",children:[Object(a.jsx)("div",{className:"course__rightbottom__21",children:Object(a.jsxs)("div",{className:"card13",children:[Object(a.jsx)("div",{className:"card13__front",children:Object(a.jsx)("div",{className:"frontclass",children:"+2 Science"})}),Object(a.jsx)("div",{className:"card13__back",children:Object(a.jsxs)("div",{className:"backclass",children:["Physics",Object(a.jsx)("br",{}),"chemistry",Object(a.jsx)("br",{})," maths"]})})]})}),Object(a.jsx)("div",{className:"course__rightbottom__22",children:Object(a.jsxs)("div",{className:"card12",children:[Object(a.jsx)("div",{className:"card12__front",children:Object(a.jsx)("div",{className:"frontclass",children:"6th"})}),Object(a.jsx)("div",{className:"card12__back",children:Object(a.jsx)("div",{className:"backclass",children:"All Subjects"})})]})})]})]})]})]})};c(67);var N=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("h2",{children:[Object(a.jsx)("span",{children:"I"}),"M",Object(a.jsx)("span",{children:"POSSIBLE"})]})})};c(68);var g=function(){var e=Object(b.h)().noticeId,t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,p.a.get("https://pedagogy-tutelage.herokuapp.com/notice/".concat(e)).then((function(e){r(e.data)}));case 3:case"end":return t.stop()}}),t)})))()}),[e]),console.log(s),Object(a.jsxs)("div",{className:"noticemain",children:[Object(a.jsx)("div",{className:"noticemain__heading",children:Object(a.jsx)("h3",{children:s.title})}),Object(a.jsxs)("div",{className:"noticemain__content",children:[Object(a.jsx)("p",{children:s.content}),Object(a.jsx)("br",{}),Object(a.jsx)("h4",{children:s.author})]})]})};c(69);var _=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u.b,{to:"/notice/".concat(e.id),children:Object(a.jsx)("div",{className:"noticesidebar",children:Object(a.jsx)("h3",{children:e.title})})})})};c(70);var k=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/notice/").then((function(e){s(e.data.reverse())}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(a.jsxs)("div",{className:"notice",children:[Object(a.jsxs)("div",{className:"notice__sidebar",children:[Object(a.jsx)("h3",{className:"notice__banner",children:"NOTICE"}),Object(a.jsx)("div",{className:"notice__sidebarlist",children:c.map((function(e){return Object(a.jsx)(_,{id:e._id,title:e.title,content:e.content,author:e.author},e._id)}))})]}),Object(a.jsxs)("div",{className:"notice__main",children:[Object(a.jsx)("h3",{className:"notice__banner",children:"NOTICE CONTENTS"}),Object(a.jsx)("div",{className:"notice__maincontent",children:Object(a.jsx)(g,{})})]})]})};function y(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),i=Object(j.a)(r,2),l=i[0],u=i[1],m=Object(n.useContext)(h).setUserData,O=Object(b.g)(),x=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={email:c,password:l},e.next=5,p.a.post("https://pedagogy-tutelage.herokuapp.com/user/login",a);case 5:n=e.sent,m({token:n.data.token,role:n.data.role,user:n.data.user}),localStorage.setItem("auth-token",n.data.token),localStorage.setItem("role",n.data.user.role),"admin"===localStorage.getItem("role")?O.push("/admin"):O.push("/student"),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)("h2",{children:"Log in"}),Object(a.jsxs)("form",{className:"form",onSubmit:x,children:[Object(a.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(a.jsx)("input",{id:"login-email",type:"email",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(a.jsx)("input",{id:"login-password",type:"password",onChange:function(e){return u(e.target.value)}}),Object(a.jsx)("input",{type:"submit",value:"Log in"})]})]})}c(71);var w=function(){return Object(a.jsx)("div",{className:"error__page",children:Object(a.jsx)("div",{className:"error__background",children:Object(a.jsx)("h1",{children:"404 PAGE NOT FOUND"})})})};var S=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/notice/");case 2:t=e.sent,s(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("https://pedagogy-tutelage.herokuapp.com/notice/".concat(t));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"adminnotice",children:[Object(a.jsx)("div",{className:"table__body",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{className:"tbody",children:c.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.title}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{className:"btn btn-danger",to:"",onClick:function(){return i(e._id)},children:"Delete"})})]},e._id)}))})]})}),Object(a.jsx)("div",{className:"table__footer",children:Object(a.jsx)(u.b,{className:"adduser__banner text-white",to:"/admin/addNotice",children:"ADD NEW NOTICE"})})]})},E=(c(72),function(e){var t=e.percentage;return Object(a.jsxs)("div",{className:"progress",children:[Object(a.jsx)("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(t,"%")}}),t,"%"]})});var C=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),l=i[0],b=i[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),O=m[0],x=m[1],f=Object(n.useState)(""),v=Object(j.a)(f,2),N=v[0],g=v[1],_=Object(n.useState)(""),k=Object(j.a)(_,2),y=k[0],w=k[1],S=Object(n.useState)(0),C=Object(j.a)(S,2),A=C[0],D=C[1],I=Object(n.useState)([]),T=Object(j.a)(I,2),F=T[0],U=T[1];Object(n.useEffect)((function(){L()}),[]);var L=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/files/");case 2:t=e.sent,U(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("https://pedagogy-tutelage.herokuapp.com/files/".concat(t));case 2:L();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("filename",O),a.append("batch",N),a.append("file",c),e.next=7,p.a.post("https://pedagogy-tutelage.herokuapp.com/files",a,{onUploadProgress:function(e){D(parseInt(Math.round(100*e.loaded/e.total))),setTimeout((function(){return D(0)}),1e4)}}).then((function(e){return console.log("res",e.data)})).catch((function(e){return console.error(e)}));case 7:x(""),g(""),b(""),w("File Uploaded");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"adminresources",children:[Object(a.jsxs)("div",{className:"uploadform",children:[y?Object(a.jsx)("p",{children:y}):null,Object(a.jsxs)("form",{onSubmit:W,children:[Object(a.jsx)("input",{type:"text",value:O,name:"filename",onChange:function(e){return x(e.target.value)},placeholder:"Enter File Name"}),Object(a.jsx)("input",{type:"text",value:N,name:"batch",onChange:function(e){return g(e.target.value)},placeholder:"Enter Batch Name"}),Object(a.jsx)("input",{type:"file",value:l,name:"file",onChange:function(e){var t=e.target;s(t.files[0]),b(t.value)},placeholder:"Upload File"}),Object(a.jsx)("button",{type:"submit",children:"UPLOAD FILE"}),Object(a.jsx)(E,{percentage:A})]})]}),Object(a.jsx)("div",{className:"getfiles",children:Object(a.jsx)("div",{className:"table__body",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{className:"tbody",children:F.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.filename}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{className:"btn btn-danger",to:"",onClick:function(){return P(e._id)},children:"Delete"})})]},e._id)}))})]})})})]})};c(73);var A=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/admin/");case 2:t=e.sent,s(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("https://pedagogy-tutelage.herokuapp.com/admin/".concat(t));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(c),Object(a.jsxs)("div",{className:"adminstudent",children:[Object(a.jsx)("div",{className:"table__body",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{className:"tbody",children:c.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.displayName}),Object(a.jsx)("td",{children:e.email}),Object(a.jsxs)("td",{children:[Object(a.jsx)(u.b,{className:"btn btn-primary",to:"/admin/viewStudent/".concat(e._id),children:"View"}),Object(a.jsx)(u.b,{className:"btn btn-warning text-white",to:"/admin/editStudent/".concat(e._id),children:"Edit"}),Object(a.jsx)(u.b,{className:"btn btn-danger",to:"",onClick:function(){return i(e._id)},children:"Delete"})]})]},e._id)}))})]})}),Object(a.jsx)("div",{className:"table__footer",children:Object(a.jsx)(u.b,{className:"adduser__banner text-white",to:"/admin/addStudent",children:"ADD NEW STUDENT"})})]})};c(74);var D=function(){return Object(a.jsxs)("div",{className:"adminpanel",children:[Object(a.jsx)("div",{className:"adminpanel__students",children:Object(a.jsx)(A,{})}),Object(a.jsx)("div",{className:"adminpanel__notices",children:Object(a.jsx)(S,{})}),Object(a.jsx)("div",{className:"adminpanel__resources",children:Object(a.jsx)(C,{})})]})};var I=function(){var e=Object(n.useContext)(h).userData,t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var t=Object(d.a)(o.a.mark((function t(){var c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user.batch){t.next=7;break}return t.next=3,p.a.get("https://pedagogy-tutelage.herokuapp.com/files/".concat(e.user.batch));case 3:c=t.sent,r(c.data.reverse()),t.next=11;break;case 7:return t.next=9,p.a.get("https://pedagogy-tutelage.herokuapp.com/files/".concat(e.user.user.batch));case 9:a=t.sent,r(a.data.reverse());case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"table__body",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{className:"tbody",children:s.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.filename}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{className:"btn btn-danger",to:"",onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}("".concat(e.avatar))},children:"Download"})})]},e._id)}))})]})})})};c(75);var T=function(){var e=Object(n.useContext)(h).userData;return Object(a.jsxs)("div",{className:"studentpanel",children:[Object(a.jsx)("div",{className:"studentpanel__students",children:e.user.user?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"Studentpanel__students-name",children:Object(a.jsxs)("h3",{children:["Welcome ",e.user.user.displayName]})}),Object(a.jsxs)("div",{className:"Studentpanel__students-batch",children:[" ",Object(a.jsxs)("h3",{children:["Batch: ",e.user.user.batch]})]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"Studentpanel__students-name",children:Object(a.jsxs)("h3",{children:["Welcome ",e.user.displayName]})}),Object(a.jsxs)("div",{className:"Studentpanel__students-batch",children:[" ",Object(a.jsxs)("h3",{children:["Batch: ",e.user.batch]})]})]})}),Object(a.jsx)("div",{className:"studentpanel__resources__notes",children:Object(a.jsx)(I,{})})]})},F=function(){var e=Object(n.useState)({email:"",displayName:"",batch:"",address:"",phone:""}),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){i()}),[]);var r=Object(b.h)().id,i=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/admin/".concat(r));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"container py-4",children:Object(a.jsxs)("ul",{className:"list-group w-50",children:[Object(a.jsxs)("li",{className:"list-group-item text-dark",children:["Email: ",c.email]}),Object(a.jsxs)("li",{className:"list-group-item text-dark",children:["Name: ",c.displayName]}),Object(a.jsxs)("li",{className:"list-group-item text-dark",children:["Batch: ",c.batch]}),Object(a.jsxs)("li",{className:"list-group-item text-dark",children:["Address: ",c.address]}),Object(a.jsxs)("li",{className:"list-group-item text-dark",children:["phone: ",c.phone]})]})})},U=c(14),L=c(9),P=function(){var e=Object(b.g)(),t=Object(b.h)().id,c=Object(n.useState)({email:"",password:"",displayName:"",batch:"",address:"",phone:""}),s=Object(j.a)(c,2),r=s[0],i=s[1],l=r.email,u=r.password,h=r.displayName,m=r.batch,O=r.address,x=r.phone,f=function(e){i(Object(L.a)(Object(L.a)({},r),{},Object(U.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){N()}),[]);var v=function(){var c=Object(d.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.next=3,p.a.put("https://pedagogy-tutelage.herokuapp.com/admin/".concat(t),r);case 3:e.push("/admin");case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/admin/".concat(t));case 2:c=e.sent,i(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(a.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Email",name:"email",value:l,onChange:function(e){return f(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Enter Password",name:"password",value:u,onChange:function(e){return f(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Name",name:"displayName",value:h,onChange:function(e){return f(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Batch",name:"batch",value:m,onChange:function(e){return f(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Address",name:"address",value:O,onChange:function(e){return f(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"number",className:"form-control form-control-lg",placeholder:"Enter Phone Number",name:"phone",value:x,onChange:function(e){return f(e)}})}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Update Student Info"})]})]})})},W=function(){var e=Object(b.g)(),t=Object(n.useState)({email:"",password:"",displayName:"",batch:"",address:"",phone:""}),c=Object(j.a)(t,2),s=c[0],r=c[1],i=s.email,l=s.password,u=s.displayName,h=s.batch,m=s.address,O=s.phone,x=function(e){r(Object(L.a)(Object(L.a)({},s),{},Object(U.a)({},e.target.name,e.target.value)))},f=function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,p.a.post("https://pedagogy-tutelage.herokuapp.com/admin/registerStudent",s);case 3:e.push("/admin");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(a.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Email",name:"email",value:i,onChange:function(e){return x(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Enter Password",name:"password",value:l,onChange:function(e){return x(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Name",name:"displayName",value:u,onChange:function(e){return x(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Batch",name:"batch",value:h,onChange:function(e){return x(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Address",name:"address",value:m,onChange:function(e){return x(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Phone Number",name:"phone",value:O,onChange:function(e){return x(e)}})}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},J=function(){var e=Object(b.g)(),t=Object(n.useState)({title:"",content:"",author:""}),c=Object(j.a)(t,2),s=c[0],r=c[1],i=s.title,l=s.content,u=s.author,h=function(e){r(Object(L.a)(Object(L.a)({},s),{},Object(U.a)({},e.target.name,e.target.value)))},m=function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,p.a.post("https://pedagogy-tutelage.herokuapp.com/notice/",s);case 3:e.push("/admin");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Add A Notice"}),Object(a.jsxs)("form",{onSubmit:function(e){return m(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Title",name:"title",value:i,onChange:function(e){return h(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Content",name:"content",value:l,onChange:function(e){return h(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Author Name",name:"author",value:u,onChange:function(e){return h(e)}})}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Add Notice"})]})]})})},M=c(17),B=function(e){var t=e.component,c=e.isAuthenticated,n=Object(M.a)(e,["component","isAuthenticated"]);return Object(a.jsx)(b.b,Object(L.a)(Object(L.a)({},n),{},{render:function(e){return"user"===c?Object(a.jsx)(t,Object(L.a)({},e)):Object(a.jsx)(b.a,{to:{pathname:"/",state:{from:e.location}}})}}))},q=function(e){var t=e.component,c=(e.JWTAuthenticated,e.isAuthenticated),n=Object(M.a)(e,["component","JWTAuthenticated","isAuthenticated"]);return Object(a.jsx)(b.b,Object(L.a)(Object(L.a)({},n),{},{render:function(e){return"admin"===c?Object(a.jsx)(t,Object(L.a)({},e)):Object(a.jsx)(b.a,{to:{pathname:"/",state:{from:e.location}}})}}))};c(76);var G=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pedagogy-tutelage.herokuapp.com/files/Free");case 2:t=e.sent,s(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"getnotes",children:Object(a.jsx)("div",{className:"table__body",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{className:"tbody",children:c.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.filename}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{className:"btn btn-danger",to:"",onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}("".concat(e.avatar))},children:"Download"})})]},e._id)}))})]})})})};var V=function(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth-token"),c=localStorage.getItem("role"),null===t&&(localStorage.setItem("auth-token",""),t=""),null===c&&(localStorage.setItem("role",""),c=""),e.next=6,p.a.post("https://pedagogy-tutelage.herokuapp.com/user/tokenIsValid",null,{headers:{"x-auth-token":t}});case 6:if(!e.sent.data){e.next=12;break}return e.next=10,p.a.get("https://pedagogy-tutelage.herokuapp.com/user/",{headers:{"x-auth-token":t}});case 10:a=e.sent,s({token:t,role:a.data.user.role,user:a.data});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(h.Provider,{value:{userData:c,setUserData:s},children:[Object(a.jsx)("div",{className:"navbar",children:Object(a.jsx)(O,{})}),Object(a.jsx)("div",{className:"main",children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/",component:N}),Object(a.jsx)(b.b,{exact:!0,path:"/courses",component:v}),Object(a.jsx)(b.b,{path:"/notice/:noticeId",component:k}),Object(a.jsx)(b.b,{path:"/notes",component:G}),Object(a.jsx)(b.b,{exact:!0,path:"/login",component:y}),Object(a.jsx)(q,{exact:!0,path:"/admin",component:D,JWTAuthenticated:c.token,isAuthenticated:c.role}),Object(a.jsx)(q,{exact:!0,path:"/admin/viewStudent/:id",component:F,JWTAuthenticated:c.token,isAuthenticated:c.role}),Object(a.jsx)(q,{exact:!0,path:"/admin/editStudent/:id",component:P,JWTAuthenticated:c.token,isAuthenticated:c.role}),Object(a.jsx)(q,{exact:!0,path:"/admin/addStudent",component:W,JWTAuthenticated:c.token,isAuthenticated:c.role}),Object(a.jsx)(q,{exact:!0,path:"/admin/addNotice",component:J,JWTAuthenticated:c.token,isAuthenticated:c.role}),Object(a.jsx)(B,{exact:!0,path:"/student",component:T,JWTAuthenticated:c.token,isAuthenticated:c.role}),Object(a.jsx)(b.b,{path:"/error",component:w}),Object(a.jsx)(b.a,{to:"/error",component:w})]})})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),H()}},[[77,1,2]]]);
//# sourceMappingURL=main.cadeba14.chunk.js.map