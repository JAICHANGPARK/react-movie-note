(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=(n(16),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(8),p=n(7),d=n(9);n(19),n(20),n(21);function f(e){var t=e.poster,n=e.alt;return o.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function g(e){var t=e.genre;return o.a.createElement("span",{className:"Movie__Genre"},t)}var h=function(e){var t=e.title,n=e.poster,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Column"},o.a.createElement(f,{poster:n,alt:t})),o.a.createElement("div",{className:"Movie__Column"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return o.a.createElement(g,{genre:e,key:t})})),o.a.createElement("div",{className:"Movie__Synopsis"},r)))},_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovies=function(){var e=n.state.movies.map(function(t,n){return console.log(e),o.a.createElement(h,{title:t.title,poster:t.medium_cover_image,key:t.id,genres:t.genres,synopsis:t.synopsis})});return e},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMuount")}},{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return o.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.7b169d22.chunk.js.map