(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,img:"/img/girls/Slice0.png",clicked:!1},{id:2,img:"/img/girls/Slice1.png",clicked:!1},{id:3,img:"/img/girls/Slice2.png",clicked:!1},{id:4,img:"/img/girls/Slice3.png",clicked:!1},{id:5,img:"/img/girls/Slice4.png",clicked:!1},{id:6,img:"/img/girls/Slice5.png",clicked:!1},{id:7,img:"/img/girls/Slice6.png",clicked:!1},{id:8,img:"/img/girls/Slice7.png",clicked:!1},{id:9,img:"/img/girls/Slice8.png",clicked:!1},{id:10,img:"/img/girls/Slice9.png",clicked:!1},{id:11,img:"/img/girls/Slice10.png",clicked:!1},{id:12,img:"/img/girls/Slice11.png",clicked:!1},{id:13,img:"/img/girls/Slice12.png",clicked:!1},{id:14,img:"/img/girls/Slice13.png",clicked:!1},{id:15,img:"/img/girls/Slice14.png",clicked:!1},{id:16,img:"/img/girls/Slice15.png",clicked:!1},{id:17,img:"/img/girls/Slice16.png",clicked:!1},{id:18,img:"/img/girls/Slice17.png",clicked:!1},{id:19,img:"/img/girls/Slice18.png",clicked:!1},{id:20,img:"/img/girls/Slice19.png",clicked:!1},{id:21,img:"/img/girls/Slice20.png",clicked:!1},{id:22,img:"/img/girls/Slice21.png",clicked:!1},{id:23,img:"/img/girls/Slice22.png",clicked:!1},{id:24,img:"/img/girls/Slice23.png",clicked:!1}]},15:function(e,i,a){},16:function(e,i,a){"use strict";a.r(i);var c=a(0),t=a.n(c),l=a(3),n=a.n(l),r=a(4),s=a(5),g=a(7),m=a(6),d=a(8);var o=function(e){return t.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-warning py-3"},t.a.createElement("a",{className:"navbar-brand",href:"/"},t.a.createElement("h3",null,t.a.createElement("strong",null,t.a.createElement("i",{className:"fas fa-mouse-pointer pr-2"}," "),"Clicky Game"))),t.a.createElement("span",{className:"navbar-text text-dark"},t.a.createElement("h3",{className:"align-baseline"},"Score ",t.a.createElement("span",{className:"badge badge-primary mx-1 align-top"},e.score),"  |  Top Score ",t.a.createElement("span",{className:"badge badge-primary mx-1 align-top"},e.topScore))))};var p=function(){return t.a.createElement("div",{className:"jumbotron jumbotron-fluid"},t.a.createElement("div",{className:"container text-center"},t.a.createElement("h1",{className:"display-4 font-weight-bolder"}," ",t.a.createElement("i",{className:"far fa-meh-blank pr-2"})," Face Blindness Terminator!"),t.a.createElement("h3",{className:"mt-3"},"Click on any girl to earn points, ",t.a.createElement("span",{className:"text-primary"},"but not the same one twice!"))))};var u=function(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"cardcontainer"},t.a.createElement("img",{className:"article-img",id:e.id,src:""+e.img,alt:" ",onClick:function(i){return e.handleClick(e.id,i)}})))};var k=function(){return t.a.createElement("div",{className:"sticky-bottom bg-warning py-4"},t.a.createElement("p",{className:"text-center"}," ",t.a.createElement("i",{className:"fab fa-react pr-2"})," Proudly created by Yuwen with React"))},f=a(1),S=(a(15),function(e){function i(){var e,a;Object(r.a)(this,i);for(var c=arguments.length,t=new Array(c),l=0;l<c;l++)t[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(m.a)(i)).call.apply(e,[this].concat(t)))).state={score:0,topScore:0,girls:f},a.shuffleGirls=function(e){for(var i=e.length-1;i>0;i--){var a=Math.floor(Math.random()*(i+1)),c=[e[a],e[i]];e[i]=c[0],e[a]=c[1]}return e},a.handleClick=function(e){if(a.state.girls.find(function(i){return i.id===e}).clicked)a.endGame();else{var i=a.state.girls.map(function(i){return i.id===e&&(i.clicked=!0),i});a.nextRound(i)}},a.nextRound=function(e){a.setState({score:a.state.score+1,girls:a.shuffleGirls(e)})},a.endGame=function(){f.map(function(e){return e.clicked=!1}),a.state.score>a.state.topScore?a.setState({topScore:a.state.score,score:0,girls:a.shuffleGirls(f)}):a.setState({score:0,girls:a.shuffleGirls(f)}),alert("You lose! Try again!")},a}return Object(d.a)(i,e),Object(s.a)(i,[{key:"render",value:function(){var e=this;return t.a.createElement(t.a.Fragment,null,t.a.createElement(o,{score:this.state.score,topScore:this.state.topScore}),t.a.createElement(p,null),t.a.createElement("div",{className:"imgcard"},this.state.girls.map(function(i){return t.a.createElement(u,{key:i.id,id:i.id,img:i.img,clicked:i.clicked,handleClick:e.handleClick})})),t.a.createElement(k,null))}}]),i}(t.a.Component));n.a.render(t.a.createElement(S,null),document.getElementById("root"))},9:function(e,i,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.61c5d1d7.chunk.js.map