(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);a(62),a(87);var n=a(0),o=a.n(n),s=a(37),i=a.n(s),r=a(17),c=a.n(r),l=a(23),d=a(24),u=a(26),h=a(25),p=a(27),v=a(10),b=a(5),m=(a(60),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(b.Panel,{id:"videos"},o.a.createElement(b.PanelHeader,null,"VKUI"),o.a.createElement(b.Search,{value:this.props.search,onChange:this.props.onChange}),o.a.createElement(b.Div,null,o.a.createElement(b.Button,{size:"xl",level:"secondary",onClick:this.props.onButtonHandler},"\u0418\u0441\u043a\u0430\u0442\u044c")),o.a.createElement(b.Group,null,o.a.createElement(b.List,null,this.props.videos.map(function(e,t){return o.a.createElement(b.Cell,{key:t},o.a.createElement(b.Header,null,e.title),o.a.createElement("iframe",{src:e.player,width:"607",height:"360",frameborder:"0"}))}))))}}]),t}(o.a.Component)),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"videos",token:null,search:"",videos:[]},a.onChange=a.onChange.bind(Object(v.a)(Object(v.a)(a))),a.onButtonHandler=a.onButtonHandler.bind(Object(v.a)(Object(v.a)(a))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({token:t.detail.data.access_token}),e.getVideos(0);break;case"VKWebAppCallAPIMethodResult":"videos"===t.detail.data.request_id&&e.setState({videos:t.detail.data.response.items});break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetAuthToken",{app_id:6923699,scope:"video"})}},{key:"getVideos",value:function(e){var t=this.state.search;c.a.send("VKWebAppCallAPIMethod",{method:"video.search",request_id:"videos",params:{q:t,adult:1,v:"5.92",offset:e,access_token:this.state.token}})}},{key:"onChange",value:function(e){this.setState({search:e})}},{key:"onButtonHandler",value:function(){this.getVideos(0)}},{key:"render",value:function(){return console.log(this.state),o.a.createElement(b.View,{activePanel:this.state.activePanel},o.a.createElement(m,{id:"videos",videos:this.state.videos,search:this.state.search,onChange:this.onChange,onButtonHandler:this.onButtonHandler}))}}]),t}(o.a.Component);c.a.send("VKWebAppInit",{}),i.a.render(o.a.createElement(f,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(110)}},[[61,1,2]]]);
//# sourceMappingURL=main.7947a127.chunk.js.map