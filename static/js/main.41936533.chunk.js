(this.webpackJsonptry=this.webpackJsonptry||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),r=a.n(o),l=(a(25),a(26),a(6)),s=a(7),c=a(9),h=a(8),d=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{height:"100vh",minHeight:"100vh",maxHeight:"100vh"}},i.a.createElement("div",{style:{height:"100%",overflow:"auto"}},i.a.createElement("div",{style:{height:"20%",maxHeight:"20%",minHeight:"20%",margin:"0% 5% 2% 5%",overflow:"auto"}},i.a.createElement("h2",null,"HARSHIT BIREN SHAH"),i.a.createElement("p",null,"Developer . Architect . Bug Hunter")),i.a.createElement("div",{style:{display:"flex",height:"5%",maxHeight:"5%",minHeight:"5%",width:"15%",justifyContent:"space-between",margin:"0% 5% 0% 5%",overflow:"auto"}},i.a.createElement("a",{href:"https://github.com/harshitshah4",target:"_blank"},i.a.createElement("i",{class:"fab fa-github"})),i.a.createElement("a",{href:"https://twitter.com/harshitsh4h",target:"_blank"},i.a.createElement("i",{class:"fab fa-twitter"}))),i.a.createElement("div",{style:{maxHeight:"60%",margin:"2% 5% 2% 5%",overflow:"auto",textAlign:"justify",fontSize:"small"}},i.a.createElement("p",null,"I have keen interest in building and architecting web and internet applications .  I have been experimenting with cloud solutions to develop a fully scalable and highly reliable system , that helps in tackling latest Big Data problems . I also practice Security Researching in my free time . I run with the motto of Security First , Internet is not secure by default , it requires great effort to making it secure , and that is what I like to do."),i.a.createElement("p",null,"I am really fanatic about technology and implementing them in real life applications."),i.a.createElement("p",null,"But the most important of all , I am a ",i.a.createElement("b",null,"Learner")," , We as humans underestimate ourselfs by only exploring/learning limited fields , I believe that any concept or field , is just a Google Search and few books away.")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"10%",maxHeight:"10%"}},i.a.createElement("a",{href:"mailto:harshitshah4@gmail.com"},i.a.createElement("button",{style:{border:"none",borderRadius:"20px",padding:"20%",color:"white",fontWeight:"bold",backgroundColor:"#0EED4A"}},"CONTACT")))))}}]),a}(i.a.Component),m=a(11);a(27);function u(e){return i.a.createElement("div",{className:"project-card",style:{display:"flex",flexDirection:"column",height:"98%",margin:"2%",padding:"2%",backgroundColor:"white"}},i.a.createElement("h3",{style:{textAlign:"center"}},e.title),i.a.createElement("div",{style:{display:"flex",minHeight:"10%",maxHeight:"10%",flexWrap:"wrap",justifyContent:"space-between",overflowY:"auto"}},e.tags.map((function(e){return i.a.createElement("button",{style:{cursor:"default",backgroundColor:"transparent",border:"1px solid grey",borderRadius:"10px",maxHeight:"50%",fontSize:"small"}},e)}))),i.a.createElement("p",{style:{height:"60%",minHeight:"60%",maxHeight:"60%",overflowX:"auto",textAlign:"justify",fontSize:"small"}},e.description),i.a.createElement("br",null),!0===e.action.external?i.a.createElement("a",{href:e.action.link,target:"_blank"},i.a.createElement("button",{style:{border:"none",borderRadius:"20px",padding:"2% 15% 2% 15%",backgroundColor:"#F5F5F5",color:"black",fontWeight:"lighter"}},e.action.text)):i.a.createElement(m.b,{to:e.action.link},i.a.createElement("button",{style:{border:"none",borderRadius:"20px",padding:"2% 15% 2% 15%",backgroundColor:"#F5F5F5",color:"black",fontWeight:"lighter"}},e.action.text)))}var g=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={projects:[{title:"JainSaraswati",description:"It is an Android App that focuses on making life easier for Jains , this app have various features including Panchang , being one of the most important. Various astronomical calculations are performed within Panchang fragment ,Some informations such as Sunrise , Sunset are taken from SwissEph . This app communicates to Apache Server written in PHP , which fetches data such as music  , books , etc and link to media files. I didn't knew anything about astronmical calcluations , so I started doing my own research , I read articles , blogs , and got deep into history of it . This teaches us that , we can almost learn anything if we set our mind to it.",tags:["Android","PHP","MySQL"],action:{text:"View",link:"https://play.google.com/store/apps/details?id=com.saraswati.jain.jainsaraswati",external:!0}},{title:"Whose picture is this ?",description:"This Web app provides a platform for the user/organization to train/re-train and test theirs ML/AI Image recognition . User could upload images , get predictions , relabel or fix those predictions and then re-train and get predictions again . The app is hosted on cloud , and consists of Frontend , A backend server  and a model server . Backend server talks with model server and get predictions . This was a custom made model , where in an image could lie within given categories . ",tags:["React","Node js","Mongo","Flask","AI","AWS","Websockets","REST"],action:{text:"View",link:"/project/YeTasveerKiskiHai"}},{title:"Pothole Problem",description:"It provides an end to end to solution for Authorties and Users  , to track ,filter, montior a Pothole . This app leverages AWS Rekognition to identify Pothole images . The solution is deployed on AWS Cloud , and is architectured under EC2 instances running Node js under Auto Scaling Group , also uses AWS S3 , AWS Cloudfront , AWS Lambda , and more . All In All it is a highly scalable solution.",tags:["Android","Node js","Mongo","AWS","Cloud Architecture","JWT","REST"],action:{text:"View",link:"/project/PotholeProblem"}},{title:"LC3",description:"A LC-3 Virtual Machine implementation in GO . This is a simple project written to demonstrate LC-3 VM About LC3 is a fictional VM used to teach graduate students about assembly.forms basis to understand the working of a Virtual Machine. This VM is originally based on article written by @justinmeiners and @rpendleton.",tags:["Virtual Machine","Golang","Assembly"],action:{text:"View",link:"https://github.com/harshitshah4/lc3-go",external:!0}},{title:"And more...",description:"Checkout my Github Profile to see some of my other projects.",tags:["Github"],action:{text:"View",link:"https://github.com/harshitshah4",external:!0}}]},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row",overflow:"hidden",overflowX:"scroll"}},this.state.projects.map((function(e){return i.a.createElement(u,{title:e.title,description:e.description,action:e.action,tags:e.tags})}))))}}]),a}(i.a.Component),p=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={tabs:[{name:"Projects",component:i.a.createElement(g,null)}],selected:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{height:"100vh",maxHeight:"100vh",minHeight:"100vh"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"4%",padding:"1%"}},this.state.tabs.map((function(t,a){return e.state.selected===a?i.a.createElement("button",{style:{border:"none",borderRadius:"20px",padding:"0% 3% 0% 3%",backgroundColor:"#0EED4A",color:"white",margin:"0% 1% 0% 1%"}},t.name):i.a.createElement("button",{onClick:function(){e.setState({selected:a})},style:{border:"none",borderRadius:"20px",padding:"0% 3% 0% 3%",backgroundColor:"white",color:"black",margin:"0% 1% 0% 1%"}},t.name)}))),i.a.createElement("div",{style:{width:"100%",height:"80%"}},this.state.tabs[this.state.selected].component))}}]),a}(i.a.Component),f=a(1),b=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100vh",minHeight:"100vh",maxHeight:"100vh"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row",backgroundColor:"#0EED4A",color:"white",height:"10%",minHeight:"10%",maxHeight:"10%",overflow:"auto"}},i.a.createElement(m.b,{to:"/",style:{alignSelf:"center",margin:"1%"}},i.a.createElement("i",{style:{color:"white"},class:"fas fa-times"})),i.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"medium"}},this.props.title),i.a.createElement("div",null)),i.a.createElement("iframe",{style:{width:"100%",height:"85%",minHeight:"85%",maxHeight:"85%",border:"none"},src:this.props.link}))}}]),a}(i.a.Component);var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(m.a,{basename:""},i.a.createElement(f.c,null,i.a.createElement(f.a,{exact:!0,path:"/project/PotholeProblem"},i.a.createElement("div",{style:{border:"none"}},i.a.createElement(b,{title:"Pothole Problem",link:"/pothole.html"}))),i.a.createElement(f.a,{exact:!0,path:"/project/YeTasveerKiskiHai"},i.a.createElement("div",null,i.a.createElement(b,{title:"Whose picture is this ?",link:"/yetasveerkiskihai.html"}))),i.a.createElement(f.a,{path:"/"},i.a.createElement("div",{style:{backgroundColor:"#F5F5F5"}},i.a.createElement(p,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.41936533.chunk.js.map