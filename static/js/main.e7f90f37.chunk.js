(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},14:function(e,t,a){e.exports={img:"ImageGalleryItem_img__2bF1s"}},16:function(e,t,a){e.exports={button:"Button_button__3QF_k"}},17:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=(a(22),a(23),a(11)),l=a(2),s=a(3),u=a(4),m=a(5),g=a(7),h={page:1,query:"Cat",fethImages:function(){var e=this,t="&q=".concat(this.query),a="&page=".concat(this.page);return fetch("https://pixabay.com/api/?key=14998986-82322fa46abf8765da09830ba"+t+"&per_page=12"+a).then((function(e){return e.json()})).then((function(t){return e.incrementPage(),t.hits}))},incrementPage:function(){this.page+=1},get currentQuery(){return this.query},set currentQuery(e){this.query=e},get currentPage(){return this.page},resetPage:function(){this.page=1}},p=function(e){return e.map((function(e){return{id:e.id,smallImg:e.webformatURL,bigImg:e.largeImageURL}}))},d=a(8),f=a.n(d),b=a(9),y=a(14),v=function(e){var t=e.src,a=e.alt;return r.a.createElement("img",{src:t,alt:a,className:y.img})},_=a(10),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyPress=function(t){"Escape"===t.code&&e.props.onClick()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,n=e.onClick;return r.a.createElement("div",{className:_.overlay,onClick:n},r.a.createElement("div",{className:_.modal},r.a.createElement("img",{src:t,alt:a})))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isModalOpen:!1,modalImg:""},e.openModalHandler=function(t){var a=t.currentTarget.dataset.img;e.setState({modalImg:a,isModalOpen:!0})},e.closeModalHandler=function(t){t&&t.currentTarget!==t.target||e.setState({isModalOpen:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isModalOpen,n=t.modalImg,o=this.props,c=o.images,i=o.alt;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:b.list},c.map((function(t){var a=t.id,n=t.smallImg,o=t.bigImg;return r.a.createElement("li",{key:a,className:b.item,onClick:e.openModalHandler,"data-img":o},r.a.createElement(v,{src:n,alt:i}))}))),a&&r.a.createElement(E,{src:n,alt:i,onClick:this.closeModalHandler}))}}]),a}(n.Component),j=a(6),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:j.bar},r.a.createElement("form",{className:j.form,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:j.button},r.a.createElement("span",{className:j.label},"Search")),r.a.createElement("input",{className:j.input,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),a}(n.Component),w=a(15),I=a.n(w),S=function(e){var t=e.type;return r.a.createElement(I.a,{type:t,color:"#00BFFF",height:100,width:100,timeout:0})};S.defaultProps={type:"ThreeDots"};var C=S,N=a(16),M=function(e){var t=e.onClick;return r.a.createElement("button",{className:N.button,onClick:t,type:"button"},"Load More")},q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isLoading:!1},e.fetchImages=function(t){t&&"string"===typeof t&&(e.setState({images:[]}),h.currentQuery=t,h.resetPage()),h.fethImages().then((function(t){0===t.length&&Object(g.error)("No result with your query!"),e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(p(t)))}}))})).catch((function(e){return Object(g.error)(e)})).finally((function(){e.setState({isLoading:!1})}))},e.getNewImgHandler=function(){e.setState({isLoading:!0}),e.fetchImages()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchImages()}},{key:"componentDidUpdate",value:function(e,t){t.images.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=h.currentQuery;return r.a.createElement("div",{className:f.a.container},r.a.createElement(k,{onSubmit:this.fetchImages}),r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{images:t,alt:n}),r.a.createElement("div",{className:f.a.loadingWrap},a?r.a.createElement(C,{type:"ThreeDots"}):r.a.createElement(M,{onClick:this.getNewImgHandler}))):r.a.createElement(C,{type:"Oval"})))}}]),a}(n.Component);a(46);c.a.render(r.a.createElement(q,null),document.querySelector("#root"))},6:function(e,t,a){e.exports={bar:"Searchbar_bar__3lszv",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}},8:function(e,t,a){e.exports={container:"App_container__16xz_",loadingWrap:"App_loadingWrap__3s7IG"}},9:function(e,t,a){e.exports={list:"ImageGallery_list__3mqUc",item:"ImageGallery_item__35Kd3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.e7f90f37.chunk.js.map