(this["webpackJsonpphone-directory"]=this["webpackJsonpphone-directory"]||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),i=(a(26),a(27),a(7)),l=a(8),o=a(13),m=a(11),u=a(10),b=a(9),d=a(1),h=(a(28),a(29),function(e){return r.a.createElement("div",{className:"header"},e.heading)}),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).inputChangedHandler=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onFormSubmitted=function(t){t.preventDefault(),e.props.addSubscriberHandler(e.state),e.setState({id:0,name:"",phone:" "}),e.props.history.push("/")},e.state={id:0,name:"",phone:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.phone;return r.a.createElement("div",null,r.a.createElement(h,{heading:"Add Subscriber"}),r.a.createElement("div",{className:"component-body-container"},r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{className:"custom-btn back-btn"},"back")),r.a.createElement("form",{className:"subscriber-form",onSubmit:this.onFormSubmitted.bind(this)},r.a.createElement("label",{htmlFor:"name",className:"label-control"}," Name: "),r.a.createElement("br",null),r.a.createElement("input",{id:"name",type:"text",className:"input-control",name:"name",onChange:this.inputChangedHandler}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"phone",className:"label-control"},"Phone: "),r.a.createElement("br",null),r.a.createElement("input",{id:"phone",type:"number",className:"input-control",name:"phone",onChange:this.inputChangedHandler}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"subscriber-info-container"},r.a.createElement("span",{className:"subscriber-to-add-heading"}," Subscriber to be added: ")," ",r.a.createElement("br",null),r.a.createElement("span",{className:"subscriber-info"},"Name: ",t)," ",r.a.createElement("br",null),r.a.createElement("span",{className:"subscriber-info"},"Phone: ",a)," ",r.a.createElement("br",null)),r.a.createElement("button",{type:"submit",className:"custom-btn add-btn"},"Add"))))}}]),a}(n.Component),E=(a(35),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onDeleteClick=function(t){e.props.deleteSubscriberHandler(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"component-container"},r.a.createElement(h,{heading:"Phone Directory"}),r.a.createElement("div",{className:"component-body-container"},r.a.createElement(b.b,{to:"/add"},r.a.createElement("button",{className:"custom-btn add-btn"},"Add")),r.a.createElement("div",{className:"grid-container heading-container"},r.a.createElement("span",{className:"grid-item name-heading"},"Name"),r.a.createElement("span",{className:"grid-item name-heading"},"Phone")),this.props.subscribersList.map((function(t){return r.a.createElement("div",{key:t.id,className:"grid-container"},r.a.createElement("span",{className:"grid-item"},t.name),r.a.createElement("span",{className:"grid-item"},t.phone),r.a.createElement("button",{className:"custom-btn delete-btn",onClick:e.onDeleteClick.bind(e,t.id)},"Delete"))}))))}}]),a}(n.Component)),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).addSubscriberHandler=function(t){var a=e.state.subscribersList;a.length>0?t.id=a[a.length-1].id+1:t.id=1,a.push(t),e.setState({subscribersList:a})},e.deleteSubscriberHandler=function(t){var a=e.state.subscribersList,n=0;a.forEach((function(e,a){e.id===t&&(n=a)}),Object(o.a)(e));var r=a;r.splice(n,1),e.setState({subscribers:r})},e.state={subscribersList:[{id:1,name:"Suraj Singh",phone:"9999999999"},{id:2,name:"Ronit Singh Thakur",phone:"8888888888"}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(E,Object.assign({},t,{subscribersList:e.state.subscribersList,deleteSubscriberHandler:e.deleteSubscriberHandler}))}}),r.a.createElement(d.a,{exact:!0,path:"/add",render:function(t,a){var n=t.history;return r.a.createElement(p,Object.assign({},a,{history:n,addSubscriberHandler:e.addSubscriberHandler}))}}))}}]),a}(n.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1a26a71e.chunk.js.map