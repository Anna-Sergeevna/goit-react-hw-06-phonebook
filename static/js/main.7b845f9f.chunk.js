(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={container:"Container_container__3lCaA",title:"Container_title__4q_nk"}},17:function(t,e,n){t.exports={section:"Section_section__3Cc6f",title:"Section_title__2lPmk"}},18:function(t,e,n){t.exports={filter:"Filter_filter__v9bhj",text:"Filter_text__G3hv8",input:"Filter_input__3wLPP"}},26:function(t,e,n){t.exports={loader:"Loader_loader__IXdg0"}},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(11),o=n.n(i),s=n(4),l=n(21),u=n(5),b=n(22),j=n.n(b),d=n(6),m=n(23),O=n.n(m),h=n(13),x=n(27),f=n(3),_=n(24),p=n.n(_),v={addContact:Object(u.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:p.a.generate(),name:e,number:n}}})),deleteContact:Object(u.b)("contacts/delete"),changeFilter:Object(u.b)("contacts/filter")},C=Object(u.c)([],(a={},Object(h.a)(a,v.addContact,(function(t,e){var n=e.payload;return[].concat(Object(x.a)(t),[n])})),Object(h.a)(a,v.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),g=Object(u.c)("",Object(h.a)({},v.changeFilter,(function(t,e){return e.payload}))),N=Object(f.b)({items:C,filter:g}),F={key:"contacts",storage:O.a,blacklist:["filter"]},k=Object(u.a)({reducer:{contacts:Object(d.g)(F,N)},middleware:function(t){return t({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}}).concat(j.a)},devTools:!1}),y=Object(d.h)(k),A=n(25),w=n.n(A),z=n(26),L=n.n(z),S=n(1),Z=function(){return Object(S.jsx)("div",{className:L.a.loader,children:Object(S.jsx)(w.a,{type:"ThreeDots",color:"#00BFFF",height:200,width:200,timeout:3e3})})},q=(n(67),n(16)),P=n.n(q);var T=function(t){var e=t.title,n=t.children;return Object(S.jsxs)("section",{className:P.a.container,children:[e&&Object(S.jsx)("h2",{className:P.a.title,children:e}),n]})},B=n(17),D=n.n(B);var J=function(t){var e=t.title,n=t.children;return Object(S.jsxs)("section",{className:D.a.section,children:[e&&Object(S.jsx)("h2",{className:D.a.title,children:e}),n]})},M=n(19),G=function(t){return t.contacts.items},I=function(t){return t.contacts.filter},X=function(t){var e=G(t),n=I(t).toLowerCase().trim();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},$=n(7),E=n.n($);var H=function(){var t=Object(c.useState)(""),e=Object(M.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),i=Object(M.a)(r,2),o=i[0],l=i[1],u=Object(s.c)(G),b=Object(s.b)(),j=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},d=function(){a(""),l("")};return Object(S.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):b(v.addContact({name:n,number:o})),d()},children:[Object(S.jsxs)("label",{children:[Object(S.jsx)("p",{className:E.a.text,children:"Name"}),Object(S.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:E.a.input,value:n,onChange:j})]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("p",{className:E.a.text,children:"Number"}),Object(S.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:E.a.input,value:o,onChange:j})]}),Object(S.jsx)("button",{type:"submit",disabled:!n,className:E.a.button,children:"Add contact"})]})},R=n(18),U=n.n(R);var K=function(){var t=Object(s.c)(I),e=Object(s.b)();return Object(S.jsxs)("label",{children:[Object(S.jsx)("p",{className:U.a.text,children:"Find contacts by name"}),Object(S.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:U.a.input,value:t,onChange:function(t){return e(v.changeFilter(t.currentTarget.value))}})]})},Q=n(8),V=n.n(Q);var W=function(){var t=Object(s.c)(X),e=Object(s.b)();return Object(S.jsx)("ul",{className:V.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(S.jsxs)("li",{className:V.a.item,children:[Object(S.jsxs)("p",{className:V.a.name,children:[a,":"]}),Object(S.jsx)("p",{className:V.a.number,children:c}),Object(S.jsx)("button",{type:"button",className:V.a.button,onClick:function(){return function(t){return e(v.deleteContact(t))}(n)},children:"Delete"})]},n)}))})};n(68);var Y=function(){return Object(S.jsxs)(T,{title:"",children:[Object(S.jsx)(J,{title:"Phonebook",children:Object(S.jsx)(H,{})}),Object(S.jsxs)(J,{title:"Contacts",children:[Object(S.jsx)(K,{}),Object(S.jsx)(W,{})]})]})};o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(s.a,{store:k,children:Object(S.jsx)(l.a,{loading:Object(S.jsx)(Z,{}),persistor:y,children:Object(S.jsx)(Y,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={text:"ContactForm_text__9qHTo",input:"ContactForm_input__2vnjj",button:"ContactForm_button__2GrDR"}},8:function(t,e,n){t.exports={list:"ContactList_list__bSF1U",item:"ContactList_item__1ak6X",name:"ContactList_name__7Pmr4",button:"ContactList_button__11AFn"}}},[[69,1,2]]]);
//# sourceMappingURL=main.7b845f9f.chunk.js.map