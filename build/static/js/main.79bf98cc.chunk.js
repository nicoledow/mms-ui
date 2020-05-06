(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.fe069604.png"},30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),s=(a(35),a(2)),i=a(3),l=a(5),u=a(4),m=a(19),p=a(10),f=(a(36),a(18)),h=a.n(f),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:h.a,alt:"Logo",className:"header__logo"}),r.a.createElement("p",{className:"header__p"},"Answer a few simple questions to get your estimate."),r.a.createElement("button",{className:"header__btn"},r.a.createElement(m.b,{to:"/form"},"Get Started")))}}]),a}(r.a.Component);function d(){return r.a.createElement("img",{src:h.a,alt:"Logo",className:"header__logo"})}var E=a(13),b=a(24),O=a.n(b),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){"startingCity"===t.target.name?e.setState({startingCity:t.target.value}):e.setState({destinationCity:t.target.value})},e.setDepartingStateValue=function(t){e.setState({startingState:t})},e.setDestinationStateValue=function(t){e.setState({destinationState:t})},e.handleSubmit=function(t){t.preventDefault();var a={startingCity:e.state.startingCity,destinationCity:e.state.destinationCity,startingState:e.state.startingState,destinationState:e.state.destinationState,infoType:"customer location"};e.props.updateStep(),e.props.saveData(a)},e.state={startingCity:"",destinationCity:"",startingState:"AL",destinationState:"AL"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{className:"formDiv__form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{className:"formDiv__form--label"},"Starting City:",r.a.createElement("input",{type:"text",name:"startingCity",value:this.state.startingCity,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(O.a,{onChange:function(t){return e.setDepartingStateValue(t)},className:"formDiv__form--select"}),r.a.createElement("label",{className:"formDiv__form--label"},"Destination City:",r.a.createElement("input",{type:"text",name:"destinationCity",value:this.state.destinationCity,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(O.a,{onChange:function(t){return e.setDestinationStateValue(t)},className:"formDiv__form--select"}),r.a.createElement("button",{type:"submit",className:"formDiv__form--button"},"Next")))}}]),a}(r.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).submitForm=function(t){t.preventDefault();var a={numOfBedrooms:document.querySelector("select").value,numOfFloors:document.querySelector("input[type=number").value,elevator:document.querySelector("input[type=checkbox]").checked,infoType:"bedroom and elevator info"};e.props.updateStep(),e.props.saveData(a)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{className:"formDiv__form",onSubmit:function(t){return e.submitForm(t)}},r.a.createElement("label",{className:"formDiv__form--label"},"How many bedrooms are you moving?",r.a.createElement("select",{name:"numOfBedrooms",className:"formDiv__form--select"},r.a.createElement("option",{value:"1"},"Studio or one-bedroom apartment"),r.a.createElement("option",{value:"2"},"Two bedroom home or apartment"),r.a.createElement("option",{value:"3"},"Three bedroom home or apartment"),r.a.createElement("option",{value:"4"},"Four or more bedrooms"))),r.a.createElement("br",null),r.a.createElement("label",{className:"formDiv__form--label"},"How many floors?",r.a.createElement("input",{type:"number",name:"numOfFloors"})),r.a.createElement("br",null),r.a.createElement("label",{className:"formDiv__form--label"},"Is there an elevator?",r.a.createElement("input",{type:"checkbox",name:"elevator"})),r.a.createElement("button",{className:"formDiv__form--button",type:"submit"},"Next")))}}]),a}(r.a.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(){var t={parkingDistance:document.querySelector("select").value,infoType:"parking"};e.props.updateStep(),e.props.saveData(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{className:"formDiv__form"},r.a.createElement("label",{className:"formDiv__form--label"},"Where will M.M.S. be able to park during your move?",r.a.createElement("select",{className:"formDiv__form--select"},r.a.createElement("option",{value:"driveway"},"In the driveway"),r.a.createElement("option",{value:"10-20"},"On the street, 10-20 feet away"),r.a.createElement("option",{value:"30-40"},"On the street, 30-40 feet away"),r.a.createElement("option",{value:"farther"},"Farther")))),r.a.createElement("button",{className:"formDiv__form--button",onClick:this.handleSubmit},"Next"))}}]),a}(r.a.Component),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleNameChange=function(t){var a=t.target.value;e.setState({customerName:a})},e.handleEmailChange=function(t){var a=t.target.value;e.setState({customerEmail:a})},e.handlePhoneChange=function(t){var a=t.target.value;e.setState({customerPhone:a})},e.handleSubmit=function(t){t.preventDefault();var a={customerName:e.state.customerName,customerEmail:e.state.customerEmail,customerPhone:e.state.customerPhone,infoType:"customer contact"};e.props.updateStep(),e.props.saveData(a)},e.state={customerName:"",customerEmail:"",customerPhone:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{className:"formDiv__form",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"text",name:"customerName",value:this.state.customerName,placeholder:"Name",onChange:function(t){return e.handleNameChange(t)}}),r.a.createElement("input",{type:"text",name:"customerEmail",value:this.state.customerEmail,placeholder:"Email address",onChange:function(t){return e.handleEmailChange(t)}}),r.a.createElement("input",{type:"text",name:"customerPhone",value:this.state.customerPhone,placeholder:"Phone number",onChange:function(t){return e.handlePhoneChange(t)}}),r.a.createElement("button",{type:"submit",className:"formDiv__form--button"},"Complete")))}}]),a}(r.a.Component),N=function(e){return function(t){t({type:"START_POSTING_CUSTOMER_INFO"}),fetch("".concat(x,"/estimates"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t({type:"QUOTE_GENERATED",quote:e.quote})})).catch((function(e){return console.log("error in getEstimate",e)}))}},S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.sendDataForEstimate(this.props.data)}},{key:"render",value:function(){return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h3",{className:"header__p"},"Calculating your estimate..."))}}]),a}(r.a.Component),C=Object(E.b)(null,(function(e){return{sendDataForEstimate:function(t){return e(N(t))}}}))(S),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h3",{className:"header__p"}," Your estimated quote is ",r.a.createElement("strong",null,"$",this.props.quote),".",r.a.createElement("br",null),"MMS will be in contact shortly to answer any questions and discuss the exact cost!"))}}]),a}(r.a.Component);var T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateStep=function(){e.setState((function(e){return{step:e.step+1}}))},e.state={step:1},e}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.completeState.quote)return r.a.createElement(j,{quote:this.props.completeState.quote});switch(this.state.step){case 1:return r.a.createElement(y,{updateStep:this.updateStep,saveData:this.props.saveData});case 2:return r.a.createElement(g,{updateStep:this.updateStep,saveData:this.props.saveData});case 3:return r.a.createElement(D,{updateStep:this.updateStep,saveData:this.props.saveData});case 4:return r.a.createElement(_,{updateStep:this.updateStep,saveData:this.props.saveData});case 5:return r.a.createElement(C,{data:this.props.completeState});default:return r.a.createElement("h3",null,"An error occurred.")}}}]),a}(r.a.Component),A=Object(E.b)((function(e){return{completeState:e}}),(function(e){return{saveData:function(t){return e((a=t,function(e){switch(a.infoType){case"customer location":e({type:"ADD_LOCATION_DATA",data:a});case"bedroom and elevator info":e({type:"ADD_BEDROOM_ELEVATOR_INFO",numOfBedrooms:a.numOfBedrooms,numOfFloors:a.numOfFloors,elevator:a.elevator});case"parking":e({type:"ADD_PARKING_INFO",parkingDistance:a.parkingDistance});case"customer contact":e({type:"ADD_CUSTOMER_CONTACT_INFO",customerName:a.customerName,customerEmail:a.customerEmail,customerPhone:a.customerPhone});default:e({type:"UNKNOWN"})}}));var a}}}))(T),k=function(){return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h2",null,"Estimate calculate goes here"),r.a.createElement("p",null,"Millennial Moving Solutions will be in touch shortly!"))},w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(p.a,{exact:!0,path:"/form"},r.a.createElement(d,null),r.a.createElement(A,null)),r.a.createElement(p.a,{exact:!0,path:"/estimate"},r.a.createElement(d,null),r.a.createElement(k,null)))))}}]),a}(r.a.Component),q=a(11);var F=a(29);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(15),I=Object(P.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{requesting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LOCATION_DATA":return Object(q.a)({},e,{startingCity:t.data.startingCity,destinationCity:t.data.destinationCity,startingState:t.data.startingState,destinationState:t.data.destinationState});case"ADD_BEDROOM_ELEVATOR_INFO":return Object(q.a)({},e,{numOfBedrooms:t.numOfBedrooms,numOfFloors:t.numOfFloors,elevator:t.elevator,requesting:!1});case"ADD_PARKING_INFO":return Object(q.a)({},e,{parkingDistance:t.parkingDistance,requesting:!1});case"ADD_CUSTOMER_CONTACT_INFO":return Object(q.a)({},e,{customerName:t.customerName,customerEmail:t.customerEmail,customerPhone:t.customerPhone,requesting:!1});case"START_POSTING_CUSTOMER_INFO":return Object(q.a)({},e,{requesting:!0});case"QUOTE_GENERATED":return Object(q.a)({},e,{requesting:!1,quote:t.quote});default:return e}}),Object(P.a)(F.a));c.a.render(r.a.createElement(E.a,{store:I},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));var x=t.default="https://mms-estimate-mgmt.herokuapp.com/"}},[[30,1,2]]]);