(this["webpackJsonpexp-10"]=this["webpackJsonpexp-10"]||[]).push([[0],{126:function(e,a,t){e.exports=t.p+"static/media/world3.4785af01.png"},127:function(e,a,t){e.exports=t.p+"static/media/map4.d190431a.png"},129:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(24),c=t.n(r),s=(t(83),t(84),t(35)),i=t(20),m=t(71),o=t(49),d={dataItems:[]},h=Object(i.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_LARGE_DATA":return Object(o.a)(Object(o.a)({},e),{},{dataItems:a.payload});default:return e}}}),u=[m.a],E=Object(i.e)(h,{},Object(i.d)(i.a.apply(void 0,u),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),p=t(4),v=(t(40),t(90),t(72)),g=(t(99),t(11)),f=t(12),N=t(14),b=t(13),x=t(47),y=t(8),_=t(34),D=t(136),O=t(137),j=t(138),k=t(139),w=t(140),A=t(141),C=t(142),I=t(75),S=t(132),T=t(133),R=t(134),M=t(144),L=t(135),X=function(e){var a=Object(n.useState)(!1),t=Object(I.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement(S.a,{color:"light",light:!0,expand:"md"},l.a.createElement(T.a,{href:"/"},"Track Corona Track"),l.a.createElement(R.a,{onClick:function(){return c(!r)}}),l.a.createElement(M.a,{isOpen:r,navbar:!0},l.a.createElement(L.a,{className:"mr-auto",navbar:!0}))))},B=(l.a.Component,t(143)),G=t(6),J=(t(125),t(28)),Y=function(e){Object(N.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).toggle=n.toggle.bind(Object(J.a)(n)),n.logout=n.logout.bind(Object(J.a)(n)),n.state={isOpen:!1,auth_success:!0},n}return Object(f.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"logout",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S.a,{color:"light",light:!0,expand:"md",className:"header fixed-top"},l.a.createElement(T.a,{href:"/home",className:"",style:{color:"#333"}},"Track Corona Track"),l.a.createElement(R.a,{onClick:this.toggle}),l.a.createElement(M.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(L.a,{className:"ml-auto",navbar:!0},l.a.createElement(C.a,{outline:!0,color:"primary",onClick:this.logout},"Logout")))))}}]),t}(l.a.Component);var H=Object(G.l)(G.j),U=function(e){Object(N.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).state={useCanvas:!1,graph_data_1:[],graph_data_2:[],indiaConfirmed:null,indiaActive:null,indiaDeaths:null,indiaRecovered:null,pieData:[],graph_data_11:[],graph_data_13:[],graph_data_14:[]},n}return Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchLargeData()}},{key:"componentDidUpdate",value:function(e){if(this.props.largeData!==e.largeData){var a=[],t=[],n=[],l=[];this.props.largeData.cases_time_series.map((function(e,r){a.push({x:r,y:e.totalconfirmed}),t.push({x:r,y:e.totalrecovered}),n.push({x:r,y:e.totaldeceased}),l.push({x:r,y:e.dailydeceased})}));var r=[];this.props.largeData.cases_time_series.map((function(e,a){r.push({x:a,y:e.totalconfirmed})}));var c=[];this.props.largeData.cases_time_series.map((function(e,a){c.push({x:a,y:e.dailyconfirmed})})),this.setState({indiaConfirmed:this.props.largeData.statewise[0].confirmed,indiaActive:this.props.largeData.statewise[0].active,indiaDeaths:this.props.largeData.statewise[0].deaths,indiaRecovered:this.props.largeData.statewise[0].recovered,graph_data_1:r,graph_data_2:c,graph_data_11:a,graph_data_13:t,graph_data_14:n,graph_data_21:l,pieData:[{angle:this.props.largeData.statewise[0].deaths},{angle:this.props.largeData.statewise[0].active},{angle:this.props.largeData.statewise[0].recovered}]})}}},{key:"render",value:function(){var e=this.state.useCanvas,a=e?G.d:G.c,t=e?G.g:G.f,n="";this.props.largeData.statewise&&(n=this.props.largeData.statewise.map((function(e,a){return l.a.createElement("tr",{key:e.state},l.a.createElement("th",{scope:"row"},"#"),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.confirmed),l.a.createElement("td",null,e.active),l.a.createElement("td",{className:"state-deaths-num"},e.deaths),l.a.createElement("td",{className:"state-recovered-num"},e.recovered))})));var r=[0,5e6],c=[0,250];return l.a.createElement("div",null,l.a.createElement(Y,null),l.a.createElement(D.a,{fluid:!0},l.a.createElement(O.a,{className:"mt-4"},l.a.createElement(j.a,{md:2}),l.a.createElement(j.a,{md:8},l.a.createElement("div",{className:"heading1"},"Covid-19 Dasboard India"),l.a.createElement(O.a,{className:"mb-5"},l.a.createElement(j.a,{md:3},l.a.createElement("div",{className:"card1"},l.a.createElement("div",null,"India Cases"),l.a.createElement("div",{className:"in-cases"},this.state.indiaConfirmed))),l.a.createElement(j.a,{md:3},l.a.createElement("div",{className:"card1"},l.a.createElement("div",null,"India Active"),l.a.createElement("div",{className:"in-active"},this.state.indiaActive))),l.a.createElement(j.a,{md:3},l.a.createElement("div",{className:"card1"},l.a.createElement("div",null,"India Deaths"),l.a.createElement("div",{className:"in-deaths"},this.state.indiaDeaths))),l.a.createElement(j.a,{md:3},l.a.createElement("div",{className:"card1"},l.a.createElement("div",null,"India Recovered"),l.a.createElement("div",{className:"in-recovered"},this.state.indiaRecovered))))),l.a.createElement(j.a,{md:2})),l.a.createElement(O.a,null,l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"graph-c px-5"},l.a.createElement("div",{className:"mt-3 mb-2 text-center"},"Total confirmed cases, (",l.a.createElement("s",null,"active cases"),",) recoveries and deaths"),l.a.createElement(H,Object.assign({height:250},{xDomain:c,yDomain:r}),l.a.createElement(G.b,null),l.a.createElement(G.h,null),l.a.createElement(G.i,null),l.a.createElement(G.k,null),l.a.createElement(G.a,{text:"X Axis",className:"alt-x-label",includeMargin:!1}),l.a.createElement(G.a,{text:"Y Axis",className:"alt-y-label",includeMargin:!1,style:{transform:"rotate(-90)",textAnchor:"end"}}),l.a.createElement(a,{className:"first-series",data:this.state.graph_data_11}),l.a.createElement(a,{className:"first-series",data:this.state.graph_data_13}),l.a.createElement(a,{className:"first-series",data:this.state.graph_data_14})))),l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"graph-c px-5"},l.a.createElement("div",{className:"mt-3 mb-2 text-center"},"Daily new deaths"),l.a.createElement(H,{height:250,xDomain:[0,250],yDomain:[0,2500]},l.a.createElement(G.b,null),l.a.createElement(G.h,null),l.a.createElement(G.i,null),l.a.createElement(G.k,null),l.a.createElement(G.a,{text:"X Axis",className:"alt-x-label",includeMargin:!1}),l.a.createElement(G.a,{text:"Y Axis",className:"alt-y-label",includeMargin:!1,style:{transform:"rotate(-90)",textAnchor:"end"}}),l.a.createElement(a,{className:"first-series",data:this.state.graph_data_21}))))),l.a.createElement(O.a,null,l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"graph-c px-5"},l.a.createElement("div",{className:"mt-3 mb-2 text-center"},"Daily new cases"),l.a.createElement(H,{height:250,yDomain:[0,1e5],xDomain:[0,250]},l.a.createElement(G.b,null),l.a.createElement(G.h,null),l.a.createElement(G.i,null),l.a.createElement(G.k,null),l.a.createElement(G.a,{text:"X Axis",className:"alt-x-label",includeMargin:!1}),l.a.createElement(G.a,{text:"Y Axis",className:"alt-y-label",includeMargin:!1,style:{transform:"rotate(-90)",textAnchor:"end"}}),l.a.createElement(a,{className:"first-series",data:this.state.graph_data_2})))),l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"graph-c px-5"},l.a.createElement("div",{className:"mt-3 mb-2 text-center"},"Daily new cases (Bar chart)"),l.a.createElement(H,{height:250,yDomain:[0,1e5],xDomain:[0,250]},l.a.createElement(G.h,null),l.a.createElement(G.b,null),l.a.createElement(G.i,null),l.a.createElement(G.k,null),l.a.createElement(t,{className:"vertical-bar-series-example",data:this.state.graph_data_2}))))),l.a.createElement(O.a,null,l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"graph-c px-5"},l.a.createElement("div",{className:"mt-3 mb-2 text-center"},"Total Confirmed from beginning (30th Jan to Today)"),l.a.createElement(H,Object.assign({height:250},{xDomain:c,yDomain:r}),l.a.createElement(G.b,null),l.a.createElement(G.h,null),l.a.createElement(G.i,null),l.a.createElement(G.k,null),l.a.createElement(G.a,{text:"X Axis",className:"alt-x-label",includeMargin:!1}),l.a.createElement(G.a,{text:"Y Axis",className:"alt-y-label",includeMargin:!1,style:{transform:"rotate(-90)",textAnchor:"end"}}),l.a.createElement(a,{className:"first-series",data:this.state.graph_data_1}))))),l.a.createElement(O.a,{className:"mt-3"},l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"graph-c px-5"},l.a.createElement("div",{className:"mt-3 mb-3 text-center"},"Statewise Statistics"),l.a.createElement("div",{style:{height:"400px",overflow:"auto"}},l.a.createElement(B.a,{hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"State"),l.a.createElement("th",null,"Confirmed"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null,"Recovered"))),l.a.createElement("tbody",null,n))))),l.a.createElement(j.a,{md:"6"},l.a.createElement("div",{className:"px-5 pie-container"},l.a.createElement("div",{className:"mt-3 mb-3 text-center"},"Overall Deaths vs Active Cases vs Recovered in India"),l.a.createElement("div",{className:"",style:{height:"400px",display:"flex",alignItems:"center"}},l.a.createElement(G.e,{data:this.state.pieData,width:300,height:300}))))),l.a.createElement(O.a,{className:"mt-5 card2-row"},l.a.createElement(j.a,{md:"3",className:"card2"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"c-title"},"State having highest cases"),l.a.createElement("div",{className:"state-name"},"Maharashtra"))),l.a.createElement(j.a,{md:"3",className:"card2"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"c-title"},"State having maximum death rate"),l.a.createElement("div",{className:"state-name"},"Punjab"))),l.a.createElement(j.a,{md:"3",className:"card2"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"c-title"},"State having highest recovery rate"),l.a.createElement("div",{className:"state-name"},"Andaman & Nicobar Islands")))),l.a.createElement("div",{className:"",style:{marginTop:"200px"}})))}}]),t}(l.a.Component),z=Object(s.b)((function(e){return{largeData:e.home.dataItems}}),{fetchLargeData:function(){return function(e){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(a){console.log(a),e({type:"FETCH_LARGE_DATA",payload:a})}))}}})(U),F=function(e){Object(N.a)(n,e);var a=Object(b.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"h2-container"},l.a.createElement("div",{className:"h2-hero-c"},l.a.createElement("img",{src:t(126),className:"img-fluid w-100 h2-bg-img"}),l.a.createElement("div",{className:"h2-center-text"},l.a.createElement("div",{className:"h2-title1"},"Global Deaths Due To Covid-19"),l.a.createElement("div",{className:"h2-death-count"},"1,00,000"))),l.a.createElement("div",null))}}]),n}(l.a.Component),V=function(e){Object(N.a)(n,e);var a=Object(b.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"h3-container"},l.a.createElement(D.a,{fluid:!0},l.a.createElement(O.a,{className:"pt-5"},l.a.createElement(j.a,{md:"5"},l.a.createElement("div",{className:"summary"},l.a.createElement("div",null,"Businesses bankrupted"),l.a.createElement("div",null,"Jobs lost"),l.a.createElement("div",null,"Shops closed"),l.a.createElement("div",null,"Roads emptied"),l.a.createElement("div",null,"Loved ones died"),l.a.createElement("div",null,"And world under the shadow of fear"),l.a.createElement("div",{style:{color:"red"}},"Solution: Not yet found"),l.a.createElement("hr",null))),l.a.createElement(j.a,{md:"7"})),l.a.createElement(O.a,null,l.a.createElement(j.a,{md:"5"}),l.a.createElement(j.a,{md:"7"},l.a.createElement("div",{className:"rhs1-container"},l.a.createElement("div",{className:"country-title"},"India"),l.a.createElement("div",{className:"h3-death-big-num"},"10,000 Deaths"),l.a.createElement("div",null,l.a.createElement("img",{src:t(127),style:{height:"400px"},className:"h2-bg-img"})))))))}}]),n}(l.a.Component),W=function(e){Object(N.a)(t,e);var a=Object(b.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement(x.a,null,l.a.createElement("div",null,l.a.createElement(y.a,{exact:!0,path:"/",component:z}),l.a.createElement(y.a,{exact:!0,path:"/home2",component:F}),l.a.createElement(y.a,{exact:!0,path:"/home3",component:V})))}}]),t}(l.a.Component);t(129);p.initializeApp({apiKey:"AIzaSyBG0HaNk2YWBp1cHllsVpYszZFI3J-hG1c",authDomain:"trackcoronatrack01.firebaseapp.com",databaseURL:"https://trackcoronatrack01.firebaseio.com",projectId:"trackcoronatrack01",storageBucket:"trackcoronatrack01.appspot.com",messagingSenderId:"245771598728",appId:"1:245771598728:web:402f79ff525fd35f13983d",measurementId:"G-QDTDEHXB7J"});new v.a.AuthUI(p.auth());var K=function(){return l.a.createElement(s.a,{store:E},l.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,a,t){e.exports=t(130)},83:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.9d74843f.chunk.js.map