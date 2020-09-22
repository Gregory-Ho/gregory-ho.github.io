(this["webpackJsonpgregory-ho.github.io"]=this["webpackJsonpgregory-ho.github.io"]||[]).push([[0],{307:function(e,t,a){e.exports=a.p+"static/media/me.30eb9a50.jpg"},313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(76),r=a.n(l),i=(a(92),a(93),a(8)),c=a(9),s=a(11),m=a(10),d=(a(94),a(78)),u=a.n(d),p=a(80),h=a.n(p),g=a(33),E=a.n(g),f=a(77),b=a.n(f),y=function(e){Object(s.a)(o,e);var t=Object(m.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"introduction"},n.a.createElement(b.a,{className:"particles-bg",params:{particles:{color:{value:"#FFF"},number:{value:150,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:1,size_min:.1}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"random",out_mode:"out"}}}}),n.a.createElement("div",{className:"introduction-content"},n.a.createElement("img",{className:"profile-image",src:a(307),alt:"Gregory Ho"}),n.a.createElement("h1",{className:"name"},"I'm Gregory Ho"),n.a.createElement("h5",{className:"text-box"},"I'm currently completing my 3rd year in Computer Engineering at the University of Waterloo. I decided to go into computer engineering because I have a strong interest in both software and hardware, as well as the bridge that connects them together. Most of my experience has been in web development, but I also plan on getting some hardware experience before I complete my degree. Besides work, I enjoy the outdoors and doing activities with friends and co-workers. I would never turn down an invite to go camping, canoeing, finishing, hiking, exploring, ... I think you get the point. If you are interested in my work, my hobbies, or just someone I have not talked to in a while feel free to connect with me through one of the links below. I would be happy to hear from you!"),n.a.createElement("div",{className:"social"},n.a.createElement("a",{className:"col-4 contact-icon linkedin-icon",href:"https://www.linkedin.com/in/gregory-ho/"},n.a.createElement(u.a,{fontSize:"large",style:{fontSize:"40px"}}),n.a.createElement("span",{className:"contact-text"},"linkedin.com/in/gregory-ho")),n.a.createElement("a",{className:"col-4 contact-icon",href:"mailto:gregory.ho@uwaterloo.ca"},n.a.createElement(h.a,{fontSize:"large",style:{fontSize:"40px"}}),n.a.createElement("span",{className:"contact-text"},"gregory.ho@uwaterloo.ca")),n.a.createElement("a",{className:"col-4 contact-icon github-icon",href:"https://github.com/Gregory-Ho"},n.a.createElement(E.a,{fontSize:"large",style:{fontSize:"40px"}}),n.a.createElement("span",{className:"contact-text"},"github.com/Gregory-Ho")))))}}]),o}(n.a.Component),v=(a(313),a(314),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"section-title text-center"},n.a.createElement("h2",null,this.props.title),n.a.createElement("div",{className:"under-line"},n.a.createElement("div",{className:"line-up"},n.a.createElement("div",{className:"dot"}),n.a.createElement("div",{className:"dot"}),n.a.createElement("div",{className:"dot"})))))),n.a.createElement("div",{className:"timeline-page"},this.props.children))}}]),a}(n.a.Component)),w=(a(315),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"tool-pill "+this.props.tool[1]},this.props.tool[0])}}]),a}(n.a.Component)),N=a(81),k=a.n(N),j=a(82),C=a.n(j),S=a(83),T=a.n(S),O=a(85),x=a.n(O),I=a(84),A=a.n(I),R=(a(316),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.layoutClass,t=[];this.props.tools&&this.props.tools.forEach((function(a){" left"===e?t.push(n.a.createElement(w,{tool:a})):t.unshift(n.a.createElement(w,{tool:a}))}));var a=n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"item-info item-box"+e},this.props.company&&n.a.createElement("div",{className:"company"},this.props.company,n.a.createElement(k.a,{className:"company-icon"+e})),this.props.date&&n.a.createElement("div",{className:"date"},this.props.date,n.a.createElement(C.a,{className:"date-icon"+e})),this.props.location&&n.a.createElement("div",{className:"location"},this.props.location,n.a.createElement(T.a,{className:"location-icon"+e})),this.props.github&&n.a.createElement("div",{className:"github"},n.a.createElement("a",{href:this.props.github},"Check it out on GitHub!"),n.a.createElement(E.a,{className:"github-icon"+e})),this.props.link&&this.props.linkText&&n.a.createElement("div",{className:"project-link"},n.a.createElement("a",{href:this.props.link},this.props.linkText),n.a.createElement(A.a,{className:"link-icon"+e})),this.props.tools&&n.a.createElement("div",{className:"tools"},t,n.a.createElement(x.a,{className:"tools-icon"+e})))),o=n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"item-description item-box"+e},n.a.createElement("div",{className:"arrow"+e}),n.a.createElement("h3",null,this.props.title),n.a.createElement("p",{className:"timeline-subtitle"},this.props.description)));return n.a.createElement("div",{className:"timeline-item"},n.a.createElement("div",{className:"row"}," left"===e?a:o," left"===e?o:a))}}]),a}(n.a.Component)),G=["C","tool-color-language"],H=["Java","tool-color-language"],M=["Javascript","tool-color-language"],P=["SQL","tool-color-language"],D=["HTML","tool-color-web"],J=["CSS","tool-color-web"],W=["React","tool-color-web"],z=["Angular","tool-color-web"],F=["Spring Boot","tool-color-library"],B=[{layoutClass:" left",company:"StackAdapt",date:"Sep 2019 - Dec 2019",location:"Toronto, ON",tools:[W,["Redux","tool-color-library"],["Ruby","tool-color-language"],["Go","tool-color-language"],M,D,J],title:"Full Stack Developer",description:n.a.createElement("ul",{className:"item-description-list left"},n.a.createElement("li",null,"Implemented an automation system to detect similar ads which had already been reviewed to reduce the auditing team\u2019s workload by 20%"),n.a.createElement("li",null,"Redesigned our audience webpage to display metrics, which are aggregated over millions of trackers, in new formats"),n.a.createElement("li",null,"Worked with product managers and designers to analyze and implement new features from front-end to database using React, Ruby, and Go"))},{layoutClass:" right",company:"Ultimate Software",date:"Jan 2019 - Apr 2019",location:"Toronto, ON",tools:[["IntelliJ","tool-color-tool"],["Postman","tool-color-tool"],["RabbitMQ","tool-color-library"],z,F,H],title:"Software Test Engineer",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"Wrote integration and unit tests with JUnit to ensure microservices functioned as expected and maintained a 99% uptime"),n.a.createElement("li",null,"Improved existing tests by refactoring code structure and redesigning time sensitive tests to ensure consistent test reliability"),n.a.createElement("li",null,"Conducted end-to-end testing of new features from UI to database"))},{layoutClass:" left",company:"Allstream",date:"May 2018 - Aug 2018",location:"Toronto, ON",tools:[["Salesforce","tool-color-cloud"],["Visualforce","tool-color-web"],["Apex","tool-color-language"],H,["Jira","tool-color-tool"],P],title:"IT Co-op - Salesforce Development",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"Implemented new functionality using Visualforce pages, Apex classes and triggers, validation rules, and workflows"),n.a.createElement("li",null,"Wrote Apex test classes which tested over 8000 lines of code to improve code coverage"))}],U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"experience"},n.a.createElement(v,{title:"Experience"},B.map((function(e){return n.a.createElement(R,e)}))))}}]),a}(n.a.Component),L=(a(317),[{layoutClass:" right",date:"Jul 2020",github:"https://github.com/Gregory-Ho/RLTicTacToe",linkText:"Play Against The Model Here!",link:"https://gregoryho.me/RLTicTacToe/",tools:[["OpenAI Gym","tool-color-devops"],W,["NumPy","tool-color-library"],["Tensorflow","tool-color-library"],["Python","tool-color-language"]],title:"T-Cubed \u2013 Reinforcement Learning Tic Tac Toe Model",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"Created a Tic Tac Toe learning environment with OpenAI Gym and trained model using policy gradients"),n.a.createElement("li",null,"Refactored model multiple times and modified learning parameters to achieve a 97% win rate against a random player"),n.a.createElement("li",null,"Hosted model on AWS using TensorFlow Serving to serve model predictions over a REST API"))},{layoutClass:" left",date:"Jul 2019",tools:[G,["DipTrace","tool-color-tool"],["Code Composer Studio","tool-color-tool"]],title:"CoolAid \u2013 Clap Controlled Fan",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"System which allows the user to control a fan\u2019s speed using claps"),n.a.createElement("li",null,"Designed an add-on PCB from scratch to attach to a Texas Instruments MSP430"),n.a.createElement("li",null,"Uses an electret mic and op-amp circuit to get an input signal"),n.a.createElement("li",null,"Followed the engineering process from prototyping to production"))},{layoutClass:" right",date:"Mar 2019",github:"https://github.com/Gregory-Ho/work-board",tools:[["Git","tool-color-tool"],["Maven","tool-color-devops"],["AWS","tool-color-cloud"],P,F,z],title:"WorkBoard \u2013 Agenda and Planner",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"Responsive full stack web application that helps users track tasks and provides statistics on their productivity"),n.a.createElement("li",null,"Used REST endpoints to communicate between front-end and back-end"),n.a.createElement("li",null,"Hosted using AWS with a pipeline deploying from a GitHub repository"))},{layoutClass:" left",date:"Aug 2018",github:"https://github.com/Gregory-Ho/Daily-Dashboard",tools:[D,J,M,["jQuery","tool-color-library"],["Bootstrap","tool-color-library"]],title:"DailyDash \u2013 News and Weather Feed",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"Designed a dashboard which displays live news and weather by location"),n.a.createElement("li",null,"Used REST APIs from news and weather providers to populate the page"),n.a.createElement("li",null,"Created custom circular progress bar animation using JavaScript"))},{layoutClass:" right",date:"May 2017",tools:[G,["PIC32 Microcontroller","tool-color-hardware"]],title:"Line Following Robot \u2013 High School Project",description:n.a.createElement("ul",{className:"item-description-list right"},n.a.createElement("li",null,"Designed a robot from scratch using IR sensors and servo motors"),n.a.createElement("li",null,"Improved performance by adjusting timings and repositioning the sensors and motors"))}]),Q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"projects"},n.a.createElement(v,{title:"Projects"},L.map((function(e){return n.a.createElement(R,e)}))))}}]),a}(n.a.Component);var _=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null),n.a.createElement(U,null),n.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(318);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports=a(320)},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.d82847a4.chunk.js.map