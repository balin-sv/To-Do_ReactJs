(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),o=n(0),l=n.n(o),i=n(6),c=n(10),u=n(7),s=n(1),d=n(2),m=n(4),f=n(3),b=n(5),p=(n(16),function(e){var t=e.toDo,n=e.done;return l.a.createElement("div",{className:"flex-row-wrap"},l.a.createElement("h1",{className:"app-header__title"},"ToDo List"),l.a.createElement("h2",{className:"app-header__subtitle"},t," more to do, ",n," done"))}),h=(n(17),function(e){var t=e.onFilter,n=e.filter,a=[{name:"all"},{name:"active"},{name:"done"}].map(function(e){var a=n===e.name?" btn-info":" btn-outline-section";return l.a.createElement("button",{type:"button",className:"btn".concat(a),key:e.name,onClick:function(){t(e.name)}},e.name)});return l.a.createElement("div",{className:"btn-group",role:"group"},a)}),v=(n(18),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).onChangeHandler=function(e){n.setState({value:e.target.value}),n.props.onSearch(e.target.value)},n.state={value:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{value:this.state.value,onChange:this.onChangeHandler,type:"text",placeholder:"type to search"}))}}]),t}(o.Component)),E=(n(19),function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(f.a)(t).call(this,e))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelite,a=e.onImportant,r=e.onDone,o="span-style";return e.important&&(o+=" important"),e.done&&(o+=" done"),l.a.createElement("div",{className:o},l.a.createElement("span",{onClick:r},t),l.a.createElement("div",{className:"btn-wrap"},l.a.createElement("button",{onClick:a,type:"button",className:"btn btn-outline-success btn-sm "},l.a.createElement("i",{className:"fa fa-exclamation"})),l.a.createElement("button",{onClick:n,type:"button",className:"btn btn-outline-danger btn-sm"},l.a.createElement("i",{className:"fa fa-trash"}))))}}]),t}(o.Component)),O=(n(20),function(e){var t=e.data,n=e.onDelite,a=e.onImportant,r=e.onDone,o=t.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(E,{label:e.label,important:e.important,done:e.done,onDelite:function(){n(e.id)},onImportant:function(){a(e.id)},onDone:function(){r(e.id)}}))});return l.a.createElement("ul",{className:"list-group"},o)}),j=(n(21),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).onChangeHandler=function(e){n.setState({value:e.target.value})},n.onSubmitHandler=function(e){e.preventDefault(),n.props.onAdd(n.state.value),n.setState({value:""})},n.state={value:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"btn-add d-flex",onSubmit:this.onSubmitHandler},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"type what you nead to do",onChange:this.onChangeHandler,value:this.state.value}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add Item"))}}]),t}(o.Component)),y=(n(22),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).maxID=100,n.onDeliteHandler=function(e){n.setState(function(t){return{data:t.data.filter(function(t){return t.id!==e})}})},n.onAddHandler=function(e){var t={label:e,important:!1,id:n.maxID++,done:!1};n.setState(function(e){var n=e.data;return{data:[].concat(Object(u.a)(n),[t])}})},n.onSearchHandler=function(e){n.setState({term:e})},n.onFilterHandler=function(e){n.setState({filter:e}),n.filterElements(n.state.data,e)},n.onImportantHeandler=function(e){n.setState(function(t){var a=t.data;return{data:n.toggleProperty(a,e,"important")}})},n.onDoneHeandler=function(e){n.setState(function(t){var a=t.data;return{data:n.toggleProperty(a,e,"done")}})},n.state={data:[{label:"drink cofe",important:!1,id:1,done:!1},{label:"fix notebook",important:!1,id:2,done:!1},{label:"buy milk",important:!1,id:3,done:!1}],term:"",filter:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"filterElements",value:function(e,t){var n=[];switch(t){case"active":n=e.filter(function(e){return!1===e.done});break;case"all":n=e;break;case"done":n=e.filter(function(e){return!0===e.done});break;default:n=e}return n}},{key:"searchElements",value:function(e,t){return""===t?e:e.filter(function(e){return e.label.indexOf(t)>-1})}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),r=e[a],o=Object(c.a)({},r,Object(i.a)({},n,!r[n])),l=e.slice(0,a),s=e.slice(a+1);return[].concat(Object(u.a)(l),[o],Object(u.a)(s))}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,r=this.state.data.filter(function(e){return!1===e.done}).length,o=this.state.data.length-r,i=this.filterElements(this.searchElements(t,n),a);return l.a.createElement("div",{className:"main-app-wrap"},l.a.createElement(p,{toDo:r,done:o}),l.a.createElement("div",{className:"flex-row-wrap"},l.a.createElement(v,{onSearch:this.onSearchHandler}),l.a.createElement(h,{filter:a,onFilter:this.onFilterHandler})),l.a.createElement(O,{data:i,onDelite:this.onDeliteHandler,onImportant:this.onImportantHeandler,onDone:this.onDoneHeandler}),l.a.createElement(j,{onAdd:this.onAddHandler}))}}]),t}(o.Component));r.a.render(l.a.createElement(y,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ddcaa93b.chunk.js.map