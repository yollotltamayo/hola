(this["webpackJsonpbrainf-compiler"]=this["webpackJsonpbrainf-compiler"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);a(19);var n=a(0),r=a.n(n),l=a(11),o=a.n(l);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(7),u=a(12),s=a(13),i=a(17),m=a(15),E=a(4),h=a(6),f=a(16),d=a(8);function p(e){var t=function(e){for(var t=0,a=0;a<e.length;a++){if("["===e[a]){if("]"===e[a+1])return 2;t+=1}if("]"===e[a]){if(t<=0)return 1;t-=1}}return t>0?1:3}(e),a={Value:"",Errors:[]};if(1===t)return a.Errors.push("UNBALANCED BRACKETS"),a;if(2===t)return a.Errors.push("ENCLOSED BRACKETS"),a;for(var n=!1,r=0,l=0,o=Array(1e3).fill(0),c=0,u=[],s=0;s<e.length;s++){if(++l>1e4)return console.log(a),a.Errors.push("RANGE ERROR"),a;var i=e[s];if(n)"["===i&&r++,"]"===i&&(0===r?n=!1:r--);else switch(i){case"+":o[c]++;break;case"-":o[c]--;break;case",":o[c]=prompt("Input")[0].charCodeAt();break;case".":console.log(String.fromCharCode(o[c])),o[c]>=30&&o[c]<=126||10===o[c]?a.Value+=String.fromCharCode(o[c]):a.Value+=String(o[c]);break;case">":o[++c]=o[c]||0;break;case"<":o[--c]=o[c]||0;break;case"[":0===o[c]?n=!0:u.push(s);break;case"]":0!==o[c]?s=u[u.length-1]:u.pop()}}return console.log(a),a}a(26);a(27),a(28),a(29),a(30);var C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).runCode=function(){var e=p(n.state.outputText),t="";if(e.Errors.length>0)for(var a=0;a<e.Errors.length;a++)t+=e.Errors[a],t+="\0";else t=e.Value;console.log(t),n.setState({actCode:t})},n.state={runCode:!1,outputText:".++",actCode:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(c.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{md:6},r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",{class:"other"},r.a.createElement("center",null,"Code it!")))),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(d.UnControlled,{value:this.state.outputText,options:{mode:"brainfuck",theme:"zenburn",lineNumbers:!0},onChange:function(t,a,n){e.setState({runCode:!1,outputText:n})}})))),r.a.createElement(E.a,{md:6},r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",{class:"other"},r.a.createElement("center",null,"Output ")))),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(d.UnControlled,{value:this.state.actCode,options:{mode:"brainfuck",theme:"elegant",lineSeparator:"\0",lineNumbers:!0,readOnly:"nocursor"}}))))),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(f.a,{onClick:this.runCode},"run code")))))}}]),a}(n.Component),b=a(14);a(31);var v=function(e){return r.a.createElement(c.a,null,r.a.createElement(b.a,null,r.a.createElement(c.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",{class:"other"},"Compiler of "))),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement("center",null,r.a.createElement("h1",{class:"bit"},"BRAINF*CK")))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("body",null,r.a.createElement(c.a,null,r.a.createElement(v,null),r.a.createElement(C,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.7bc81262.chunk.js.map