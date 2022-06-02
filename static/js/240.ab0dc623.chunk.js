"use strict";(self.webpackChunkoddaj_rzeczy=self.webpackChunkoddaj_rzeczy||[]).push([[240],{6167:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(3504),s=n(184),i=function(e){var t=e.to,n=e.text,i=e.className;return(0,s.jsx)(a.OL,{to:t,className:i,children:n})}},2228:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(184),s=function(e){var t=e.children;return(0,a.jsx)("div",{className:"container",children:t})}},538:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var a=n(184),s=function(e){var t=e.className;return(0,a.jsx)("div",{className:t})}},493:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3495),s=n(184),i=function(e){var t=e.isMobile,n=e.closeMobileMenu,i=function(){"function"===typeof n&&!0===t&&n()};return(0,s.jsxs)("ul",{className:"nav__list",children:[(0,s.jsx)("li",{className:"nav__list-item",children:(0,s.jsx)(a.fO,{smooth:!0,to:"/#top",className:"nav__list-link",onClick:i,children:"Start"})}),(0,s.jsx)("li",{className:"nav__list-item",children:(0,s.jsx)(a.fO,{smooth:!0,to:"/#steps",className:"nav__list-link",onClick:i,children:"O co chodzi?"})}),(0,s.jsx)("li",{className:"nav__list-item",children:(0,s.jsx)(a.fO,{smooth:!0,to:"/#about",className:"nav__list-link",onClick:i,children:"O nas"})}),(0,s.jsx)("li",{className:"nav__list-item",children:(0,s.jsx)(a.fO,{smooth:!0,to:"/#organizations",className:"nav__list-link",onClick:i,children:"Fundacja i organizacje"})}),(0,s.jsx)("li",{className:"nav__list-item",children:(0,s.jsx)(a.fO,{smooth:!0,to:"/#contact",className:"nav__list-link",onClick:i,children:"Kontakt"})})]})},r=function(){return(0,s.jsx)("nav",{className:"nav__desktop",children:(0,s.jsx)(i,{})})},c=n(885),o=n(2791),l=n(8014),u=n(6053),m=function(){var e=(0,o.useState)(!1),t=(0,c.Z)(e,2),n=t[0],a=t[1],r=function(){return a(!n)},m=(0,s.jsx)(l.vHB,{className:"nav__mobile-icon",size:"50px",onClick:r}),d=(0,s.jsx)(u.v8y,{className:"nav__mobile-icon",size:"50px",onClick:r});return(0,s.jsxs)("nav",{className:"nav__mobile",children:[n?d:m,n&&(0,s.jsx)(i,{isMobile:!0,closeMobileMenu:function(){return a(!1)}})]})},d=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{}),(0,s.jsx)(r,{})]})}},8337:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(538),s=n(4942),i=n(1413),r=n(885),c=n(2791),o=n(8647),l=function(e){fetch("".concat("https://fer-api.coderslab.pl/v1/portfolio/contact"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},u=n(184),m=function(){var e=(0,c.useState)({name:"",email:"",message:""}),t=(0,r.Z)(e,2),n=t[0],a=t[1],m=(0,c.useState)({name:"",email:"",message:""}),d=(0,r.Z)(m,2),_=d[0],j=d[1],h=(0,c.useState)(""),x=(0,r.Z)(h,2),p=x[0],f=x[1],g=function(e){a((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,s.Z)({},e.target.name,e.target.value))})),""!==e.target.value.length&&j((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,s.Z)({},e.target.name,""))}))},N=function(){return!(_.name||_.email||_.message||!n.name||!n.email||!n.message)};return(0,u.jsxs)("form",{className:p?"contact__content-form success":"contact__content-form",onSubmit:function(e){e.preventDefault(),N()&&(l(n),a({name:"",email:"",message:""}),f("Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana!\nWkr\xf3tce si\u0119 skontaktujemy."))},children:[p&&(0,u.jsx)("div",{className:"contact__form-success",children:p}),(0,u.jsxs)("div",{className:"contact__form-inputs",children:[(0,u.jsxs)("div",{className:"contact__form-input",children:[(0,u.jsx)("label",{className:"contact__input-label",htmlFor:"name",children:"Wpisz swoje imi\u0119:"}),(0,u.jsx)("input",{className:_.name?"contact__input-input error":"contact__input-input",type:"text",id:"name",name:"name",placeholder:"Marta",value:n.name,onChange:g,onBlur:function(){(""===n.name.trim()||n.name.includes(" "))&&j((function(e){return(0,i.Z)((0,i.Z)({},e),{},{name:"Podane imi\u0119 jest nieprawid\u0142owe!"})}))}}),_.name&&(0,u.jsx)("span",{className:"input__error-name",children:_.name})]}),(0,u.jsxs)("div",{className:"contact__form-input",children:[(0,u.jsx)("label",{className:"contact__input-label",htmlFor:"email",children:"Wpisz sw\xf3j mail:"}),(0,u.jsx)("input",{className:_.email?"contact__input-input error":"contact__input-input",type:"email",id:"email",name:"email",placeholder:"abcd@xyz.pl",value:n.email,onChange:g,onBlur:function(){""!==n.email.trim()&&o.Z.test(n.email)||j((function(e){return(0,i.Z)((0,i.Z)({},e),{},{email:"Podany email jest nieprawid\u0142owy!"})}))}}),_.email&&(0,u.jsx)("span",{className:"input__error-email",children:_.email})]})]}),(0,u.jsxs)("div",{className:"contact__form-textarea",children:[(0,u.jsx)("label",{className:"contact__textarea-label",htmlFor:"message",children:"Wpisz swoj\u0105 wiadomo\u015b\u0107:"}),(0,u.jsx)("textarea",{className:_.message?"contact__textarea-textarea error":"contact__textarea-textarea",id:"message",name:"message",rows:4,placeholder:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae tempora minima aut magnam id corporis nostrum blanditiis. Totam, illo? Maxime at ducimus eius incidunt ex? Minima quasi quo suscipit ipsum aperiam.",value:n.message,onChange:g,onBlur:function(){n.message.length<120&&j((function(e){return(0,i.Z)((0,i.Z)({},e),{},{message:"Wiadomo\u015b\u0107 musi mie\u0107 co najmniej 120 znak\xf3w!"})}))}}),_.message&&(0,u.jsx)("span",{className:"input__error-message",children:_.message})]}),(0,u.jsx)("button",{className:"contact__form-button",type:"submit",disabled:!N(),children:"Wy\u015blij"})]})},d=function(e){var t=e.linkClassName,n=e.href,a=e.divClassName;return(0,u.jsx)("a",{className:t,href:n,children:(0,u.jsx)("div",{className:a})})},_=function(){return(0,u.jsx)("footer",{className:"footer",children:(0,u.jsx)("div",{className:"footer__content",children:(0,u.jsxs)("div",{className:"footer__content-icons",children:[(0,u.jsx)(d,{linkClassName:"footer__icon-link",href:"/",divClassName:"footer__icon-icon facebook"}),(0,u.jsx)(d,{linkClassName:"footer__icon-link",href:"/",divClassName:"footer__icon-icon instagram"})]})})})},j=function(){return(0,u.jsxs)("section",{id:"contact",className:"contact",children:[(0,u.jsx)("div",{className:"contact__content",children:(0,u.jsxs)("div",{className:"contact__content-text",children:[(0,u.jsx)("h2",{className:"contact__content-title",children:"Skontaktuj si\u0119 z nami"}),(0,u.jsx)(a.Z,{className:"contact__text-decoration"}),(0,u.jsx)(m,{})]})}),(0,u.jsx)(_,{})]})}},3939:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(2228),s=n(493),i=n(6167),r=n(184),c=function(){return(0,r.jsxs)("div",{className:"header__auth",children:[(0,r.jsx)(i.Z,{to:"/login",className:"header_auth-link",text:"Zaloguj"}),(0,r.jsx)(i.Z,{to:"/register",className:"header_auth-link",text:"Za\u0142\xf3\u017c konto"})]})},o=function(){return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(s.Z,{})]})})}},8240:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(3939),s=n(493),i=n(2228),r=n(6871),c=n(3495),o=n(3755),l=n(184),u=function(){var e=(0,o.I)(),t=e.user,n=e.logOut,a=(0,r.s0)();return(0,l.jsxs)("div",{className:"header__auth user",children:[t.email&&(0,l.jsxs)("p",{className:"header__auth user-name",children:["Cze\u015b\u0107 ",t.email]}),(0,l.jsxs)("div",{className:"header_auth-links user",children:[(0,l.jsx)(c.fO,{smooth:!0,to:"/oddaj-rzeczy#top",className:"header_auth-form user",children:"Oddaj rzeczy"}),(0,l.jsx)("button",{className:"header_auth-logout",onClick:function(){n().then((function(){a("/logout")})).catch((function(e){console.log(e.message)}))},children:"Wyloguj"})]})]})},m=function(){return(0,l.jsx)("header",{className:"header user",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(u,{}),(0,l.jsx)(s.Z,{})]})})},d=n(538),_=function(e){var t=e.divClassName,n=e.imgClassName;return(0,l.jsx)("div",{className:t,children:(0,l.jsx)("div",{className:n})})},j=n(3504),h=function(e){var t=e.to,n=e.className,a=e.text;return(0,l.jsx)(j.OL,{to:t,className:n,children:a})},x=function(){var e=(0,o.I)().user;return(0,l.jsxs)("div",{className:"start__links",children:[(0,l.jsx)(h,{to:e?"/oddaj-rzeczy":"/login",className:"start__links-login",text:"Oddaj\nrzeczy"}),(0,l.jsx)(h,{to:e?"/oddaj-rzeczy":"/login",className:"start__links-login",text:"Zorganizuj\nzbi\xf3rk\u0119"})]})},p=function(e){var t=e.number,n=e.title,a=e.description;return(0,l.jsxs)("div",{className:"start__statistic",children:[(0,l.jsx)("h3",{className:"start__statistic-number",children:t}),(0,l.jsx)("h4",{className:"start__statistic-title",children:n}),(0,l.jsx)("p",{className:"start__statistic-description",children:a})]})},f=function(){return(0,l.jsx)("div",{className:"start__statistics",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(p,{number:10,title:"Oddanych work\xf3w",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non blanditiis optio debitis nihil repellat."}),(0,l.jsx)(p,{number:5,title:"Wspartych organizacji",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non blanditiis optio debitis nihil repellat."}),(0,l.jsx)(p,{number:7,title:"Zorganizowanych zbi\xf3rek",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non blanditiis optio debitis nihil repellat."})]})})},g=function(){return(0,l.jsxs)("section",{id:"start",className:"start",children:[(0,l.jsxs)("div",{className:"start__hero",children:[(0,l.jsxs)("div",{className:"start__content",children:[(0,l.jsxs)("div",{className:"start__content-text",children:[(0,l.jsx)("h1",{className:"start__content-title",children:"Zacznij pomaga\u0107!"}),(0,l.jsx)("h2",{className:"start__content-subtitle",children:"Oddaj niechciane rzeczy w zaufane r\u0119ce"}),(0,l.jsx)(d.Z,{className:"start__text-decoration"})]}),(0,l.jsx)(x,{})]}),(0,l.jsx)(_,{divClassName:"start__content-image",imgClassName:"start__image-img"})]}),(0,l.jsx)(f,{})]})},N=function(e){var t=e.title,n=e.description;return(0,l.jsxs)("div",{className:"steps__step",children:[(0,l.jsx)("div",{className:"setps__step-decoration"}),(0,l.jsx)("h5",{className:"steps__step-title",children:t}),(0,l.jsx)("p",{className:"steps__step-decsription",children:n})]})},v=function(){return(0,l.jsx)("div",{className:"steps__steps",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(N,{title:"Wybierz rzeczy",description:"ubrania, zabawki,\nsprz\u0119t i inne"}),(0,l.jsx)(N,{title:"Spakuj je",description:"skorzystaj z\nwork\xf3w na \u015bmieci"}),(0,l.jsx)(N,{title:"Zdecyduj komu\nchcesz pom\xf3c",description:"wybierz zaufane\nmiejsce"}),(0,l.jsx)(N,{title:"Zam\xf3w kuriera",description:"kurier przyjedzie\nw dogodnym terminie"})]})})},z=function(){var e=(0,o.I)().user;return(0,l.jsxs)("section",{id:"steps",className:"steps",children:[(0,l.jsx)("h4",{className:"steps__title",children:"Wystarcz\u0105 4 proste kroki"}),(0,l.jsx)(d.Z,{className:"steps__decoration"}),(0,l.jsx)("div",{className:"steps__container",children:(0,l.jsx)(v,{})}),(0,l.jsx)(c.fO,{smooth:!0,to:e?"/oddaj-rzeczy#top":"/login",className:"steps__link",children:"Oddaj\nrzeczy"})]})},b=function(){return(0,l.jsxs)("section",{id:"about",className:"about",children:[(0,l.jsx)("div",{className:"about__content",children:(0,l.jsxs)("div",{className:"about__content-text",children:[(0,l.jsx)("h2",{className:"about__content-title",children:"O nas"}),(0,l.jsx)(d.Z,{className:"about__text-decoration"}),(0,l.jsx)("p",{className:"about__content-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem ab velit odio aliquid ullam facilis quasi consequuntur quae exercitationem? Amet aperiam dolorem reprehenderit consequatur?"}),(0,l.jsx)("div",{className:"about__content-signature"})]})}),(0,l.jsx)(_,{divClassName:"about__content-image",imgClassName:"about__image-img"})]})},Z=n(1413),k=n(5861),y=n(885),C=n(7757),w=n.n(C),O=n(2791),S=function(e){var t=e.organizationType,n=e.label,a=e.value;return(0,l.jsxs)("div",{className:"organizations__input",children:[(0,l.jsx)("label",{className:t===a?"organizations__input-label checked":"organizations__input-label",name:"type",htmlFor:a,children:n}),(0,l.jsx)("input",{className:"organizations__input-radio",type:"radio",name:"type",value:a,id:a})]})},P=function(e){var t=e.organizationType,n=e.setOrganizationType,a=e.setCurrentPage;return(0,l.jsxs)("div",{className:"organizations__content-input",onChange:function(e){n(e.target.value),a(1)},children:[(0,l.jsx)(S,{organizationType:t,label:"Fundacjom",value:"fundation"}),(0,l.jsx)(S,{organizationType:t,label:"Organizacjom\npozarz\u0105dowym",value:"non-govermental organization"}),(0,l.jsx)(S,{organizationType:t,label:"Zbi\xf3rkom\nlokalnym",value:"localCollection"})]})},I=function(e){var t=e.organization;return(0,l.jsxs)("li",{className:"organizations__listItem",children:[(0,l.jsx)("h5",{className:"organizations__listItem-name",children:t.name}),(0,l.jsxs)("div",{className:"organizations__listItem-content",children:[(0,l.jsx)("p",{className:"organizations__listItem-description",children:t.description}),(0,l.jsx)("div",{className:"organizations__listItem-items",children:t.collectedItems.map((function(e,t){return(0,l.jsx)("p",{className:"organizations__listItem-item",children:e},t)}))})]})]})},T=n(2982),W=function(e){var t=e.totalPages,n=e.currentPage,a=e.organizations,s=e.handlePageChange,i=(0,O.useState)(1),r=(0,y.Z)(i,2),c=r[0],o=r[1];return(0,O.useEffect)((function(){var e=(0,T.Z)(Array(t).keys()).map((function(e){return e+1}));o(e)}),[t,a]),c.length>1?(0,l.jsx)("div",{className:"organizations__list-pagination",children:c.map((function(e){return(0,l.jsx)("button",{className:e===n?"organizations__list-button active":"organizations__list-button",onClick:function(){return s(e)},children:e},e)}))}):null},M=function(e){var t=e.organizationsData,n=e.currentPage,a=e.setCurrentPage,s=(0,O.useState)([]),i=(0,y.Z)(s,2),r=i[0],c=i[1],o=(0,O.useState)([]),u=(0,y.Z)(o,2),m=u[0],d=u[1],_=(0,O.useState)(3),j=(0,y.Z)(_,1)[0],h=(0,O.useState)(0),x=(0,y.Z)(h,2),p=x[0],f=x[1];(0,O.useEffect)((function(){c(t.map((function(e){return e.objects})).flat())}),[t]),(0,O.useEffect)((function(){f(Math.ceil(r.length/j))}),[r,j]);var g=(n-1)*j,N=n*j;(0,O.useEffect)((function(){d((function(){return r.slice(g,N)}))}),[r,n,g,N]);return(0,l.jsxs)("div",{className:"organizations__list",children:[(0,l.jsx)("ul",{className:"organizations__list-list",children:m.map((function(e){return(0,l.jsx)(I,{organization:e},e.id)}))}),(0,l.jsx)(W,{totalPages:p,currentPage:n,organizations:r,handlePageChange:function(e){a(e)}})]})},q=n(9559),A=n(9062),F=function(){var e=(0,O.useState)("fundation"),t=(0,y.Z)(e,2),n=t[0],a=t[1],s=(0,O.useState)([]),r=(0,y.Z)(s,2),c=r[0],o=r[1],u=(0,O.useState)(1),m=(0,y.Z)(u,2),_=m[0],j=m[1],h=(0,A.hJ)(q.db,"organizations");return(0,O.useEffect)((function(){var e=function(){var e=(0,k.Z)(w().mark((function e(){var t,a;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,A.PL)(h);case 3:t=e.sent,a=t.docs.map((function(e){return(0,Z.Z)({},e.data())})),o(function(e){return a.filter((function(t){return t.type===e}))}(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,h]),(0,l.jsx)("section",{id:"organizations",className:"organizations",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("h2",{className:"organizations__content-title",children:"Komu pomagamy?"}),(0,l.jsx)(d.Z,{className:"organizations__content-decoration"}),(0,l.jsx)(P,{setCurrentPage:j,organizationType:n,setOrganizationType:a}),c.map((function(e){return(0,l.jsx)("p",{className:"organizations__content-description",children:e.description},e.type)})),(0,l.jsx)(M,{organizationsData:c,currentPage:_,setCurrentPage:j})]})})},L=F,E=n(8337),B=function(){var e=(0,o.I)().user;return(0,l.jsxs)(l.Fragment,{children:[e?(0,l.jsx)(m,{}):(0,l.jsx)(a.Z,{}),(0,l.jsx)(g,{}),(0,l.jsx)(z,{}),(0,l.jsx)(b,{}),(0,l.jsx)(L,{}),(0,l.jsx)(E.Z,{})]})}},8647:function(e,t){t.Z=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}}]);
//# sourceMappingURL=240.ab0dc623.chunk.js.map