(this.webpackJsonpjaseem=this.webpackJsonpjaseem||[]).push([[0],{160:function(e,t,a){e.exports=a(309)},165:function(e,t,a){},166:function(e,t,a){},290:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){e.exports=a.p+"static/media/me.28378a1f.jpg"},294:function(e,t,a){e.exports=a.p+"static/media/python.014fddba.png"},295:function(e,t,a){e.exports=a.p+"static/media/john.2899c700.png"},296:function(e,t,a){e.exports=a.p+"static/media/AINIT.e9db3c75.png"},297:function(e,t,a){e.exports=a.p+"static/media/HNIT.47e0a086.png"},298:function(e,t,a){e.exports=a.p+"static/media/robo.111b6a65.png"},299:function(e,t,a){e.exports=a.p+"static/media/linux.f98141e8.png"},300:function(e,t,a){e.exports=a.p+"static/media/hedge.8c846568.png"},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),c=a.n(r),o=(a(165),a(1)),l=a(5),s=a(14),d=a(3),m=a(4),u=a(332),h=a(66),p=a.n(h),f=a(146),v=a.n(f),b=a(70),g=a.n(b),E=(a(166),a(103),a(36));function y(e){var t=i.a.useState(!1),a=Object(E.a)(t,2),n=a[0],r=a[1],c=i.a.useRef();return i.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return r(e.isIntersecting)}))})).observe(c.current)}),[]),i.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:c},e.children)}var w=window.innerWidth<600,j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[i.a.createElement("a",{href:"#intro"},"/home"),i.a.createElement("a",{href:"#about"},"/about"),i.a.createElement("a",{href:"#experience"},"/skills_Bs_Cr"),i.a.createElement("a",{href:"#projects"},"/software-creations")];return i.a.createElement("div",{className:"sidebar-nav"},!w&&i.a.createElement(u.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},i.a.createElement(u.a.Body,null,i.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("div",null,e))}))))),i.a.createElement("div",{className:"sidebar-logos",href:"/"},i.a.createElement("a",{href:"mailto:ajkkalappatt@gmail.com"},i.a.createElement(p.a,{style:{fontSize:20}})),i.a.createElement("a",{href:"https://github.com/jaseem1999"},i.a.createElement(g.a,{style:{fontSize:19}})),i.a.createElement("a",{href:"https://www.linkedin.com/in/adil-jaseem-615655191/"},i.a.createElement(v.a,{style:{fontSize:21}}))))}}]),a}(i.a.Component),S=(a(290),a(147)),k=a.n(S),x=a(6),N=a(148),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){!function(){var e,t,a,n,i,r,c,o=new x.i;function l(e,t,a){var n=function(e,t,a){var n=0,i=0,r={x:window.innerWidth,y:window.innerHeight};e<=r.x/2&&(n=a*((r.x/2-e)/(r.x/2)*100)/100*-1);e>=r.x/2&&(n=a*((e-r.x/2)/(r.x/2)*100)/100);t<=r.y/2&&(i=.5*a*((r.y/2-t)/(r.y/2)*100)/100*-1);t>=r.y/2&&(i=a*((t-r.y/2)/(r.y/2)*100)/100);return{x:n,y:i}}(e.x,e.y,a);t.rotation.y=x.G.degToRad(n.x),t.rotation.x=x.G.degToRad(n.y)}!function(){(e=new x.eb).background=new x.j(661807),e.fog=null,(t=new x.rb({alpha:!0})).shadowMap.enabled=!0,t.setSize(.35*window.innerWidth,.35*window.innerHeight),document.getElementById("gazi-model").appendChild(t.domElement),(a=new x.V(65,window.innerWidth/window.innerHeight,.1,1e3)).position.z=30,a.position.x=0,a.position.y=-3;var o=new x.L({color:13424374,skinning:!0});(new N.a).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb",(function(t){n=t.scene;var a=t.animations;n.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material=o),e.isBone&&"mixamorigNeck"===e.name&&(i=e),e.isBone&&"mixamorigSpine"===e.name&&(r=e)})),n.scale.set(15,15,15),n.position.y=-23,e.add(n),c=new x.b(n);var l=x.a.findByName(a,"idle");l.tracks.splice(3,3),l.tracks.splice(9,3),c.clipAction(l).play()}),void 0,(function(e){console.error(e)}));var l=new x.p(16777215,16777215,.61);l.position.set(0,50,0),e.add(l);var s=8.25,d=new x.k(16777215,.54);d.position.set(-8,12,8),d.castShadow=!0,d.shadow.mapSize=new x.ob(1024,1024),d.shadow.camera.near=.1,d.shadow.camera.far=1500,d.shadow.camera.left=-8.25,d.shadow.camera.right=s,d.shadow.camera.top=s,d.shadow.camera.bottom=-8.25,e.add(d);var m=new x.W(5e3,5e3,1,1),u=new x.L({color:661807,shininess:0}),h=new x.J(m,u);h.rotation.x=-.5*Math.PI,h.receiveShadow=!0,h.position.y=-11,e.add(h);var p=new x.ib(16,46,46),f=new x.K({color:6619098}),v=new x.J(p,f);v.position.z=-30,v.position.y=-2.5,v.position.x=-.25,e.add(v)}(),function n(){if(c&&c.update(o.getDelta()),function(e){var t=e.domElement,a=window.innerWidth,n=window.innerHeight,i=t.width/window.devicePixelRatio,r=t.height/window.devicePixelRatio,c=i!==a||r!==n;c&&e.setSize(a,n,!1);return c}(t)){var i=t.domElement;a.aspect=i.clientWidth/i.clientHeight,a.updateProjectionMatrix()}t.render(e,a),requestAnimationFrame(n)}(),document.addEventListener("mousemove",(function(e){var t=function(e){return{x:e.clientX,y:e.clientY}}(e);i&&r&&(l(t,i,50),l(t,r,30))}))}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){return e.mount=t}})}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",visible:!0},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"intro"},i.a.createElement("div",{id:"gazi-model"},i.a.createElement(O,null)),i.a.createElement(k.a,{avgTypingDelay:120},i.a.createElement("span",{className:"intro-title"},"hi, ",i.a.createElement("span",{className:"intro-name"},"Jaseem")," here.")),i.a.createElement(y,null,i.a.createElement("div",{className:"intro-subtitle"},"I create stuff sometimes."),i.a.createElement("div",{className:"intro-desc"},"A skilled web developer and hands-on technology enthusiast. Being a business administration major I'm very passionate about the cross between technology and business and adequately leveraging the profits with better IT support. I aim towards innovative digitization in the field of business."),i.a.createElement("a",{href:"mailto:ajkkalappatt@gmail.com",className:"intro-contact"},i.a.createElement(p.a,null),"  Say hello")))}}]),a}(i.a.Component),T=(a(292),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=i.a.createElement("p",null,"I am currently studying ",i.a.createElement("b",null,"BBA")," at"," ",i.a.createElement("b",null," University of Calicut "),", with a focus in Software  and Business."),t=i.a.createElement("p",null,"I'm into any sort of ",i.a.createElement("b",null,"Web Designer")," that requires creativity. My other areas of interest include ",i.a.createElement("b",null,"machine learning"),","," ",i.a.createElement("b",null,"r programming")," and ",i.a.createElement("b",null,"frontend development"),"."),n=[e,t],r=["Javascript","Python","React.js","Java","C++","c","MySql","HTML & CSS"],c=(r.map((function(e){return i.a.createElement("li",null,e)})),a(293));return i.a.createElement("div",{id:"about"},i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ about me")),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-description"},n,"Here are some technologies I have been working with:",i.a.createElement("ul",{className:"tech-stack"},r.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))})))),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:c})))))}}]),n}(i.a.Component)),I=a(153),z=a(330),J=a(334),K=a(331),M=a(329),R=a(333),D=window.innerWidth<600;function A(e){var t=e.children,a=e.value,n=e.index,r=Object(I.a)(e,["children","value","index"]);return D?i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),a===n&&i.a.createElement(R.a,{p:3},i.a.createElement(M.a,null,t))):i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},r),a===n&&i.a.createElement(R.a,{p:3},i.a.createElement(M.a,null,t)))}var H=Object(z.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),L=function(){var e=H(),t=i.a.useState(0),n=Object(E.a)(t,2),r=n[0],c=n[1],o={Python:{jobTitle:"Programming for everybody (Getting started with Python)@",duration:"Nov 21, 2020",img:i.a.createElement("img",{src:a(294),alt:"python"}),desc:["Python is a programming language that lets you work quickly and integrate systems more effectively.","I have been learning Python for about a year now and have been using it to build a few projects.","An online non-credit course authorized by university of Michiga and offered through Coursera."],certificate:["Verify at  ",i.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/verify/AQ396EV6K4VB"},"Certificate")]},Web_Desingn:{jobTitle:"HTML, CSS, and JavaScript for Web Developers@",duration:"Nov 11, 2020",img:i.a.createElement("img",{src:a(295),alt:"web design"}),desc:["This course is designed to help you get started with HTML, CSS, and JavaScript.","It covers all the basics of HTML, CSS, and JavaScript so you can create a dynamic website.","An online non-credit course authorized by Jhons hopkins University and offered through Coursera."],certificate:["Verify at  ",i.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/certificate/ZQJXJX5QJXJX"},"Certificate")]},WorkShope_AI:{jobTitle:"WorkShope AI event of Tarang'19@",duration:"Nov 2,3 , 2019",img:i.a.createElement("img",{src:a(296),alt:"work shope AI"}),desc:["WorkShope AI is an event organized by WorkShope, a non-profit organization that aims to provide a platform for students to learn and share their knowledge.","This workshop provide School of Management Studies of National Institute of Technology, Calicut."]},Ethical_hacking:{jobTitle:"Ethical Hacking of Ragam'20@",duration:"jan 10,11,12 2020",img:i.a.createElement("img",{src:a(297),alt:"Ethical Hacking of Ragam"}),desc:["Ethical Hacking workshop provide national institute of Technology calicut in Ragam'20'."]},"Robogreek'19":{jobTitle:"MES KC IEDC Robogreek'19@",duration:"Dec 10 and 11, 2019",img:i.a.createElement("img",{src:a(298),alt:"Robogreek"}),desc:["MES KC IEDC Robogreek'19 is an event organized by MES, a non-profit organization that aims to provide a platform for students to learn and share their knowledge.","This workshop use Arduino UNO Genuino UNO , The UNO is the best board to get started with electronics and coding. If this is your first experience tinkering with the platform, the UNO is the most robust board you can start playing with. The UNO is the most used and documented board of the whole Arduino & Genuino famil.","This workshop provide IEDC MES kalladi College "]},"Command Line in Linux":{jobTitle:"Command Line in Linux@",duration:"Mar 28, 2022",img:i.a.createElement("img",{src:a(299),alt:"Command Line in Linux"}),desc:["Command Line in Linux is an interactive shell that allows you to execute commands on a Linux system.","This workshop provide Couresara.org"],certificate:["Verify at  ",i.a.createElement("a",{href:"https://www.coursera.org/account/accomplishments/verify/QAPDDF7RRFJJ"},"Certificate")]},Hedge:{jobTitle:"Geteway to financial freedom@",duration:"Dec 6, 2019",img:i.a.createElement("img",{src:a(300),alt:"Hedge"}),desc:["Geteway to financial freedom is an event organized by Geteway to financial freedom, a non-profit organization that aims to provide a platform for students to learn and share their knowledge.","foundation programme in capital markets. Conducted by hedge school of applied Economics, Kochin"]}};return i.a.createElement("div",{className:e.root},i.a.createElement(J.a,{orientation:D?null:"vertical",variant:D?"fullWidth":"scrollable",value:r,onChange:function(e,t){c(t)},className:e.tabs},Object.keys(o).map((function(e,t){return i.a.createElement(K.a,Object.assign({label:D?"0".concat(t,"."):e},(a=t,D?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(o).map((function(e,t){return i.a.createElement(A,{value:r,index:t},i.a.createElement("span",{className:"joblist-job-title"},o[e].jobTitle+" "),i.a.createElement("span",{className:"joblist-job-company"},e),i.a.createElement("div",{className:"joblist-duration"},o[e].duration),i.a.createElement("div",{className:"joblist-img"},i.a.createElement(y,{delay:"".concat(t+1,"00ms")},o[e].img)),i.a.createElement("ul",{className:"job-description"},o[e].desc.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",{key:t},e))}))),i.a.createElement("div",{className:"joblist-certificate"},i.a.createElement(y,{delay:"".concat(t+1,"00ms")},o[e].certificate)))})))},W=(a(301),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"experience"},i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ Skill Based Certificates ")),i.a.createElement(L,null)))}}]),a}(i.a.Component)),B=(a(302),a(149)),P=a.n(B),G=a(150),_=a.n(G),U=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e={"SFI MES KC React.js project":{desc:"Official web site for sfi mes kalladi college.",techStack:"React.js,git,github",link:"https://github.com/jaseem1999/react-sfikc",open:"https://sfimeskc.in/"},"Dr. Saleej sir":{desc:"It's web site for Dr Saleej K.T .",techStack:"Javascript, HTML / CSS /SCSS/ Bootstrap /git,github",link:"https://github.com/jaseem1999/Dr_saleej_sir",open:"https://jaseem1999.github.io/Dr_saleej_sir/"},"Jhone hopkins university project":{desc:"Its my first project of john hopkins university .",techStack:"Javascript, HTML / CSS /SCSS/ Bootstrap /git,github",link:"https://github.com/jaseem1999/RestaurantJunaid",open:"https://jaseem1999.github.io/RestaurantJunaid/"},"My Netflix trailer Project of React.js":{desc:"Netflix app ",techStack:"React.js, API, ",link:"https://github.com/jaseem1999/netflixDemo",open:"https://jaseem1999.github.io/netflixDemo/"},Correlation:{desc:"correlation of two variables",techStack:"C programming, ",link:"https://github.com/jaseem1999/correlation-",open:""}};return i.a.createElement("div",{id:"projects"},i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ software-creations")),i.a.createElement("div",{className:"project-container"},i.a.createElement("ul",{className:"projects-grid"},Object.keys(e).map((function(t,a){return i.a.createElement(y,{delay:"".concat(a+1,"00ms")},i.a.createElement("li",{className:"projects-card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"folder-icon"},i.a.createElement(P.a,{style:{fontSize:35}})),i.a.createElement("span",{className:"external-links"},i.a.createElement("a",{className:"github-icon",href:e[t].link},i.a.createElement(g.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),e[t].open&&i.a.createElement("a",{className:"open-icon",href:e[t].open},i.a.createElement(_.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))),i.a.createElement("div",{className:"card-title"},t),i.a.createElement("div",{className:"card-desc"},e[t].desc),i.a.createElement("div",{className:"card-tech"},e[t].techStack)))})))))}}]),a}(i.a.Component),V=(a(303),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement(y,null,i.a.createElement("div",{id:"credits"},i.a.createElement("div",{className:"ending-credits"},i.a.createElement("div",null,"Built and designed by Gazi Jarin. THANK YOU \u2764\ufe0f ",i.a.createElement("a",{href:"https://github.com/gazijarin/Gazi"},"Gazil Jarin"),"   "),i.a.createElement("div",null,"All rights reserved. \xa9"))))}}]),a}(i.a.Component));a(304),a(305),a(306);var q=function(){return i.a.createElement("div",null)};var X=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"content"},i.a.createElement(C,null),i.a.createElement(T,null),i.a.createElement(W,null),i.a.createElement(q,null),i.a.createElement(U,null),i.a.createElement(V,null)),i.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(307);var F=a(152);c.a.render(i.a.createElement(F.a,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.7850f336.chunk.js.map