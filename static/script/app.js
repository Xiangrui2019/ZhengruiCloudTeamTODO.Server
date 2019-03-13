// Build Of Webpack

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

$.ajaxSetup
({
  dataType: "text"
});

/*
send form data via ajax and return the data to callback function 
*/
function send_form( name , func )
{
	var url = $('#'+name).attr('action');
	
	var params = {};
	$.each( $('#'+name).serializeArray(), function(index,value) 
	{
		params[value.name] = value.value;
	});
	
	
	$.post( url , params , func );	
}

/*
send form data via ajax and show the return content to pop div 
*/

function send_form_pop( name )
{
	return send_form( name , function( data ){ show_pop_box( data ); } );
}

/*
send form data via ajax and show the return content in front of the form 
*/
function send_form_in( name )
{	
	return send_form( name , function( data ){ set_form_notice( name , data ) } );
}


function save_sendkey()
{
	send_form( 'sendkey_form' , function(data){ sendkeysaved( data ); } )
}

function sendkeysaved(data)
{
	var data_obj = $.parseJSON( data );
	 
	if( data_obj.err_code == 0 )
	{
		swal("SUCCESS", __('JS_SENDKEY_SAVED'), 'success');
		close_float_box();
	}
	else
	{
		swal("ERROR", __('JS_API_CONNECT_ERROR'), 'error');
	}
}

function set_form_notice( name , data )
{
	data = '<span class="label label-important">' + data + '</span>';
	
	if( $('#form_'+name+'_notice').length != 0 )
	{
		$('#form_'+name+'_notice').html(data);
	}
	else
	{
		var odiv = $( "<div class='form_notice'></div>" );
		odiv.attr( 'id' , 'form_'+name+'_notice' );
		odiv.html(data);
		$('#'+name).prepend( odiv );
	} 
	
}


function show_pop_box( data , popid )
{
	if( popid == undefined ) popid = 'lp_pop_box'
	//console.log($('#' + popid) );
	if( $('#' + popid).length == 0 )
	{
		var did = $('<div><div id="' + 'lp_pop_container' + '"></div></div>');
		did.attr( 'id' , popid );
		did.css( 'display','none' );
		$('body').prepend(did);
	} 
	
	if( data != '' )
		$('#lp_pop_container').html(data);
	
	var left = ($(window).width() - $('#' + popid ).width())/2;
	
	$('#' + popid ).css('left',left);
	$('#' + popid ).css('display','block');
}

function hide_pop_box( popid )
{
	if( popid == undefined ) popid = 'lp_pop_box'
	$('#' + popid ).css('display','none');
}

function __( text , values )
{
	return $.i18n._( text , values);
}


function remember()
{
	$("input.remember").each( function()
	{
		// read cookie
		if( $.cookie( 'tt2-'+$(this).attr('name')) == 1)
		{
			$(this).attr('checked','true');
		}

		$(this).unbind('click');
		$(this).bind('click',function(evt)
		{
			if( $(this).is(':checked') )
				$.cookie( 'tt2-'+$(this).attr('name') , 1  );
			else
				$.cookie( 'tt2-'+$(this).attr('name') , 0  );
		});

	});

}

function namecard()
{
	 $('.namecard').tooltipster
	 ({
	 	'interactive':true,
	 	'functionBefore':load_user_tooltips
     });
}

function load_user_tooltips( origin , continueTooltip )
{
	$.ajax(
	{
        type: 'POST',
        url: '?c=dashboard&a=user_tooltips&uid='+origin.data('uid'),
        success: function(data)
        {
            origin.data('tooltipsterContent', data);
            continueTooltip();
        }
    });
}

function load_buddy()
{
	var url = '?c=buddy&a=data' ;
	var params = { };
	$.post( url , params , function( data )
	{
		$('#buddy_list').html(data);
		done();
		
	} );
	doing();
}

function load_feed( max_id )
{
	var url = '?c=feed&a=data' ;
	var params = { 'max_id':max_id };
	$.post( url , params , function( data )
	{
		$('#feed_list li.more').remove();
		$('#feed_list').append(data);
		bind_feed();
		namecard();
		done();
		
	} );
	doing();
}

function load_inbox( max_id )
{
	var url = '?c=inbox&a=data' ;
	var params = { 'max_id':max_id };
	$.post( url , params , function( data )
	{
		$('#notice_list li.more').remove();
		$('#notice_list').append(data);
		bind_notice();
		namecard();
		done();
		$.post( '?c=inbox&a=mark_read' , {}  );
	} );
	doing();
}

function load_todo( type )
{
	var url = '?c=dashboard&a=todo_data&type=' + type ;
	var params = {};
	$.post( url , params , function( data )
	{
		// add content to list
		$('#todo_list_'+type).html(data);

		// bind event
		if( type != 'follow' )
			bind_todo();
		else
			bind_follow_todo();

		done();
	} );

	doing();	

}

function todo_add( text , private , star , uid )
{
	var url = '?c=dashboard&a=todo_add' ;
	if( private == 1 ) is_public = 0 ;
	else is_public = 1;

	if( star == 1 ) is_star = 1 ;
	else is_star = 0;


	var params = { 'text' : text , 'is_public' : is_public , 'is_star' : is_star , 'uid' : uid  };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			if( data_obj.data.other != 1 )
			{
				if( is_star == 0 )
					$('#todo_list_normal').prepend( $(data_obj.data.html) );
				else
					$('#todo_list_star').prepend( $(data_obj.data.html) );
			
				bind_todo();
			}
			

			$('#todo_form [name=content]').val('');
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}

		done();
	} );

	doing();
}


function todo_public( tid , type )
{
	var url = '?c=dashboard&a=todo_public' ;
	var params = { 'tid' : tid  , 'type' : type };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			if( type == 'public' )
			{
				$("ul.gbox li.private").removeClass('private').addClass('public');
				bind_gbox( tid );
				$("#t-"+tid).removeClass('red').addClass('blue');
			}	
			else
			{
				$("ul.gbox li.public").removeClass('public').addClass('private');
				bind_gbox( tid );
				$("#t-"+tid).removeClass('blue').addClass('red');
			}
				
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}

		done();
	} );

	doing();
}

function todo_forward( tid , url )
{
	if( $('#t-'+tid).hasClass('red') ) return swal("ERROR", __('JS_CANNOT_ASSIGN_PRIVATE_TODO'), "error");
	else
	{
		show_float_box( __('JS_SELECT_MEMBER_TO_ASSIGN') , url );
	} 
}

// bind evt
function bind_gbox( tid , is_public )
{
	$(".gbox li.public a").unbind('click');
	$(".gbox li.public a").bind('click',function(evt)
	{
		todo_public( tid , 'private'  );
	});

	$(".gbox li.private a").unbind('click');
	$(".gbox li.private a").bind('click',function(evt)
	{
		todo_public( tid , 'public'  );
	});

	$(".gbox li.star.public a").unbind('click');
	$(".gbox li.star.public a").bind('click',function(evt)
	{
		todo_star( tid , 'remove' , 1 );
	});

	$(".gbox li.star.private a").unbind('click');
	$(".gbox li.star.private a").bind('click',function(evt)
	{
		todo_star( tid , 'remove' , 0 );
	});

	$(".gbox li.nostar.pri a").unbind('click');
	$(".gbox li.nostar.pri a").bind('click',function(evt)
	{
		todo_star( tid , 'add' , 0 );
	});

	$(".gbox li.nostar.pub a").unbind('click');
	$(".gbox li.nostar.pub a").bind('click',function(evt)
	{
		todo_star( tid , 'add' , 1 );
	});

		

	$(".gbox li.follow a").unbind('click');
	$(".gbox li.follow a").bind('click',function(evt)
	{
		todo_unfollow( tid  );
	});

	$(".gbox li.nofollow a").unbind('click');
	$(".gbox li.nofollow a").bind('click',function(evt)
	{
		todo_follow( tid  );
	});

}

function todo_star( tid , type , is_public )
{
	var url = '?c=dashboard&a=todo_star' ;
	var params = { 'tid' : tid  , 'type' : type };
	$.post( url , params , function( data )
	{
		done();

		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			if( type == 'add' )
			{
				if( is_public == 1 )
					$("ul.gbox li.nostar").removeClass('nostar pub pri').addClass('star public');
				else
					$("ul.gbox li.nostar").removeClass('nostar pub pri').addClass('star private');

				$('#todo_list_star').prepend( $("#t-"+tid) );
				bind_todo();
				bind_gbox( tid );
			}	
			else
			{
				if( is_public == 1 )
					$("ul.gbox li.star").removeClass('public private star').addClass('nostar pub');
				else
					$("ul.gbox li.star").removeClass('public private star').addClass('nostar pri');
				$('#todo_list_normal').prepend( $("#t-"+tid) );
				bind_todo();
				bind_gbox( tid );

			}
				

		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}

		
	} );	
	doing();
}

function todo_all_done()
{
	swal({
		title: 'CONFIRM',
		text: __('JS_MARK_ALL_TODO_DONE_CONFIRM'),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=dashboard&a=todo_all_done' ;
			var params = { };
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
				 
				if( data_obj.err_code == 0 )
				{
					load_todo('normal');
					load_todo('star');
					load_todo('done');
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}
	
				done();
			} );
			doing();
		}
	});
}

function todo_clean()
{
	swal({
		title: 'CONFIRM',
		text: __('JS_REMOVE_ALL_TODO_DONE_CONFIRM'),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=dashboard&a=todo_clean' ;
			var params = { };
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
				
				if( data_obj.err_code == 0 )
				{
					load_todo('done');
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}

				done();
			} );

			doing();

		}
	});
}

function feed_remove( fid )
{
	swal({
		title: 'CONFIRM',
		text: __('JS_REMOVE_CAST_CONFIRM'),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=feed&a=feed_remove' ;
			var params = { 'fid' : fid  };
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
				
				if( data_obj.err_code == 0 )
				{
					$('#fid-'+fid).remove();
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}
				done();
			} );
			doing();
		}
	});
}

function feed_remove_comment( cid )
{
	swal({
		title: 'CONFIRM',
		text: __('JS_REMOVE_COMMENT_CONFIRM'),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=feed&a=feed_remove_comment' ;
			var params = { 'cid' : cid  };
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
				
				if( data_obj.err_code == 0 )
				{
					$('#cid-'+cid).remove();
					var fid = data_obj.data.fid;

					var newcnt = parseInt( $("li#fid-"+fid+" span.cnt").text() ) - 1;
					$("li#fid-"+fid+" span.cnt").text( newcnt );
					if( newcnt <= 0 ) $("li#fid-"+fid+" a.ccount").hide();
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}
				done();
			} );
			doing();
		}
	});
}


function todo_remove_comment( hid )
{
	swal({
		title: 'CONFIRM',
		text: __('JS_REMOVE_COMMENT_CONFIRM'),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=dashboard&a=todo_remove_comment' ;
			var params = { 'hid' : hid  };
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
				
				if( data_obj.err_code == 0 )
				{
					$('#hid-'+hid).remove();
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}
				done();
			} );
			doing();
		}
	});
}

function todo_add_comment( tid , comment )
{
	var url = '?c=dashboard&a=todo_add_comment' ;
	var params = { 'tid' : tid  , 'text' : comment };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#todo_history').prepend( $(data_obj.data.html) );
			$('#comment_text').val('');
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}

		done();

	} );

	doing();
}

function feed_add_comment( fid , comment )
{
	// 
	var url = '?c=feed&a=feed_add_comment' ;
	var params = { 'fid' : fid  , 'text' : comment };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#feed_comment').prepend( $(data_obj.data.html) );
			$('#fcomment_text').val('');
			$("li#fid-"+fid+" span.cnt").text( parseInt( $("li#fid-"+fid+" span.cnt").text() ) + 1 );
			$("li#fid-"+fid+" a.ccount").show();
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}

		done();

	} );

	doing();
}


function todo_follow( tid )
{
	var url = '?c=dashboard&a=todo_follow&type=follow' ;
	var params = { 'tid' : tid };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#t-'+tid).removeClass('nofollow').addClass('follow');
			bind_follow_todo();


			$(".gbox li.nofollow").removeClass('nofollow').addClass('follow');
			bind_gbox( tid );
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}

		done();
	} );
	doing();
}

function todo_unfollow( tid )
{
	var url = '?c=dashboard&a=todo_follow&type=unfollow' ;
	var params = { 'tid' : tid };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#t-'+tid).removeClass('follow').addClass('nofollow');
			bind_follow_todo();

			$(".gbox li.follow").removeClass('follow').addClass('nofollow');
			bind_gbox( tid );
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
		done();
	} );
	doing();
}

function todo_update( tid , text )
{
	var url = '?c=dashboard&a=todo_update' ;
	var params = { 'tid' : tid  , 'text' : text };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#t-'+tid).replaceWith( $(data_obj.data.html) );
			bind_todo();
			show_todo_detail( tid );
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
		done();
	} );	
	doing();
}

function todo_assign( tid , uid )
{
	var url = '?c=dashboard&a=todo_assign' ;
	var params = { 'tid' : tid  , 'uid' : uid };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			close_float_box();
			$('#t-'+tid).remove();
			tdboard_close();
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
		done();
	} );	
	doing();


}

function mark_todo_done( tid )
{
	
	var url = '?c=dashboard&a=todo_done' ;
	var params = { 'tid' : tid };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#todo_list_done').prepend($('#t-'+tid));
			bind_todo();
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
		done();
	} );	
	doing();
}

function mark_todo_undone( tid )
{
	var url = '?c=dashboard&a=todo_reopen' ;
	var params = { 'tid' : tid };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#todo_list_normal').prepend($('#t-'+tid));
			bind_todo();
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
		done();
	} );
	doing();
}

function show_feed_detail( fid )
{
	close_all_side_board();

	if( $('#fdboard').length == 0 )
	{
		var did = $('<div></div>');
		did.attr( 'id' , 'fdboard' );
		did.css( 'display','none' );
		$('body').prepend(did);
	}
	else
	{
		$('#fdboard').html('');
		$('#fdboard').hide();
	}

	var xy = $("#side_container").position();
	$('#fdboard').css('top' , xy.top);
	$('#fdboard').css('left' , xy.left);
	
	$('#fdboard').fadeIn('slow');

	var url = '?c=feed&a=feed_detail' ;
	var params = { 'fid' : fid };
	$.post( url , params , function( data )
	{
		// add content to list
		$('#fdboard').html(data);
		$('#side_container').css('visibility','hidden');
		enable_at('fcomment_text');
		namecard();
		done();
	} );

	$('#fdboard').html('<h2 class="loading">Loading...</h2>');
	doing();	

}

function enable_at( name )
{
	//console.log( at_users );
	if( at_users.length > 0 )
	{
		$('#'+name).atWho( '@' , { 'data': at_users  } );
	}
}

function show_todo_detail_center( tid )
{
	show_float_box( __('JS_TODO_CENTER_PAGE_TITLE') , '?c=dashboard&a=todo_center&tid=' + tid );
}

function show_todo_detail( tid )
{
	close_all_side_board();

	if( $('#tdboard').length == 0 )
	{
		var did = $('<div></div>');
		did.attr( 'id' , 'tdboard' );
		did.css( 'display','none' );
		$('body').prepend(did);
	}
	else
	{
		$('#tdboard').html('');
		$('#tdboard').hide();
	}

	var xy = $("#side_container").position();
	$('#tdboard').css('top' , xy.top);
	$('#tdboard').css('left' , xy.left);
	
	$('#tdboard').fadeIn('slow');

	var url = '?c=dashboard&a=todo_detail' ;
	var params = { 'tid' : tid };
	$.post( url , params , function( data )
	{
		// add content to list
		$('#tdboard').html(data);
		$('#side_container').css('visibility','hidden');
		namecard();
		enable_at('comment_text');
		done();

		if( typeof JS_TODO_DETAIL_CALLBACK == 'function'  ) JS_TODO_DETAIL_CALLBACK();

	} );

	$('#tdboard').html('<h2 class="loading">Loading...</h2>');
	doing();	

}

function check_online()
{
	var url = '?c=dashboard&a=user_online' ;
	
	var params = {};
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		//console.log( data_obj ); 
		if( data_obj.err_code == 0 )
		{
			var uids = new Array();
			if(!data_obj.data) return false;
			for( var i = 0; i < data_obj.data.length ; i++ )
			{
				uids.push(parseInt(data_obj.data[i].uid));
			}

			//console.log( uids );
				
			if( uids.length > 0 )
			{
				$('#im_buddy_list li').each( function()
				{
					if( $.inArray( parseInt($(this).attr('uid')) , uids ) == -1 )
						$(this).removeClass('online');
					else
						$(this).addClass('online');
				} );
			}	
		}
	});		
}


function check_notice()
{
	var url = '?c=dashboard&a=user_unread' ;
	
	var params = {};
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			if( data_obj.data.all && parseInt(data_obj.data.all) > 0 )
			{
				if( data_obj.data.notice && parseInt(data_obj.data.notice) > 0 )
					$('div.inbox img.reddot').css( 'visibility' , 'visible' );	

				var old_nid = parseInt($.cookie('last_nid'));
				var nid = parseInt(data_obj.data.nid);
				if( isNaN( old_nid )  ) old_nid = 0;


				var old_mid = parseInt($.cookie('last_mid'));
				var mid = parseInt(data_obj.data.mid);
				if( isNaN( old_mid )  ) old_mid = 0;

				var title = __('JS_NOTICE_PREFIX');
				var content = '';
				var send = false;

				if( parseInt(data_obj.data.notice) > 0 )
				{
					title +=  __( 'JS_NOTICE_NOTIFACTION' , [data_obj.data.notice] ) ;
					content += data_obj.data.text;

					if( old_nid < 1  ||  old_nid < nid ) send = true;
				}

				if( parseInt(data_obj.data.message) > 0 )
				{
					title += __( 'JS_NOTICE_DM' , [data_obj.data.message] );
					if( old_mid < 1  ||  old_mid < mid ) send = true;
				}


				


				if( send )
				{
					$.titleAlert(title, 
					{
					    requireBlur:false,
					    stopOnFocus:true,
					    duration:10000,
					    interval:500 
					});	

					play_sound();

					if( window.webkitNotifications && window.webkitNotifications.checkPermission() == 0 )
					{
						var notification = window.webkitNotifications.createNotification
						(
		  					favicon,
		  					title,
		  					content
		  				);

		  				notification.onclick = function()
		  				{
		  					window.open(site_url);
		  				};

		  				if( !$.browser.mozilla )
		  					notification.onshow = function() { setTimeout(function() {notification.close()}, 15000)};

						notification.show();
					}

					
					if( parseInt(data_obj.data.notice) > 0 ) $.cookie('last_nid',nid);
					if( parseInt(data_obj.data.message) > 0 ) $.cookie('last_mid',mid);
				}

				
				
				
				
			}
			else
			{
				$('div.inbox img.reddot').css( 'visibility' , 'hidden' );	
			}

			// deal with im
			if( data_obj.data.message && parseInt(data_obj.data.message) > 0 )
			{
				alert_message( data_obj.data.uids.split( '|' ) );
			}
			else
			{
				blue_buddy_list();
			}
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
	} );
}

function alert_message( uids )
{
	$('#im_header').addClass('new_message');
	$.each( uids , function()
	{
		// 名字加红、提升到列表顶部
		$('#im_blist_'+this).addClass('new_message');
		var tmp = $('#im_blist_'+this);
		$('#im_blist_'+this).remove();
		$('#im_buddy_list').data('jsp').getContentPane().prepend( tmp );
		$('#im_buddy_list').data('jsp').reinitialise();
		$('#im_buddy_list').data('jsp').scrollToY(0);
		
		// 重新绑定事件
		$('#im_buddy_list li').unbind('click');
		$('#im_buddy_list li').bind( 'click' , function()
		{
			$('#imkeyword').val('');
			$('#imkeyword').trigger('keydown');
			show_im_box( $(this).attr('uid') );
		});

	} );
}

function update_im_order()
{
	var ouids = new Array();
	if( !kget('im_order') ) return true;

	ouids = kget('im_order').split('|');
	for( var i = 0 ; i < ouids.length ; i++ )
	{
		var tmp = $('#im_blist_'+ouids[i]);
		$('#im_blist_'+ouids[i]).remove();
		$('#im_buddy_list').prepend( tmp );
	}
}

function save_im_order( uid )
{
	var ouids = new Array();
	if( kget('im_order') )
		ouids = kget('im_order').split('|');
	
	ouids.push(uid);
	ouids = ouids.unique();

	kset( 'im_order' , ouids.join('|') );
}



function blue_buddy_list()
{
	if( $( '#im_buddy_list li.user_line.new_message').length < 1 )
		if($('#im_header'))
			$('#im_header').removeClass('new_message');
}

function cast_send( text )
{
	var url = '?c=feed&a=cast' ;
	
	var params = { 'text' : text  };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		if( data_obj.err_code == 0 )
		{
			$('#feed_list').prepend( $(data_obj.data.html) );
			bind_feed();
			$('#cast_form [name=text]').val('');
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
		done();
	} );
	doing();
}



function tdboard_close()
{
	$('#tdboard').fadeOut('fast');
	$('#side_container').css('visibility','visible');
}

function fdboard_close()
{
	$('#fdboard').fadeOut('fast');
	$('#side_container').css('visibility','visible');
}

function bind_follow_todo()
{
	$('#todo_list_follow li a.item').each( function()
	{
		$(this.parentNode).unbind( 'click' );
		$(this.parentNode).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			show_todo_detail( $('#'+this.parentNode.parentNode.id).attr('tid') );
			return false;
		} );

		$('#'+this.parentNode.parentNode.parentNode.id).unbind('click');
		$('#'+this.parentNode.parentNode.parentNode.id).bind('click' , 	function( )
		{
			if( $(this).hasClass('nofollow') )
				todo_follow( $(this).attr('tid') );
			else
				todo_unfollow( $(this).attr('tid') );	

		});
		
		
		
		
	});
}

function bind_todo()
{
	$('li a.todo_play').unbind('click');
	$('li a.todo_play').bind('click' , function(evt)
	{
		var mtype;

		if( $(this.parentNode).hasClass('ing') )
			mtype = 'pause';
		else
			mtype = 'start';
		
		var tid = $(this).attr('tid');
		var url = '?c=dashboard&a=todo_start&tid=' + tid + '&type=' + mtype  ;
	
		var params = {};
		$.post( url , params , function( data )
		{
			var data_obj = $.parseJSON( data );
				 
			if( data_obj.err_code == 0 )
			{
				if( mtype == 'pause' )
				{
					$('#t-'+tid).removeClass('ing');
					console.log('remove class');
				}
					
				else
				{
					$('#t-'+tid).addClass('ing');
					console.log('add class');
				}
					
				// buddy_click();
				done();

			}
			else
			{
				swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
			}
		} );

		doing();
		evt.stopPropagation();
		
	});



	$('#todo_list_star li a.item,#todo_list_normal li a.item,#todo_list_done li a.item').each( function()
	{
		// this -- > a 
		// this.parentNode --> .todo_row
		// this.parentNode.parentNode ---> .todo_fav
		// this.parentNode.parentNode.parentNode -----> li		

		$(this.parentNode).unbind( 'click' );
		$(this.parentNode).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			show_todo_detail( $('#'+this.parentNode.parentNode.id).attr('tid') );
			return false;
		} );

		$(this.parentNode.parentNode).unbind( 'click' );
		$(this.parentNode.parentNode).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			
			if( this.parentNode.parentNode.id != 'todo_list_done' )
			{
				var is_public = 0;
				if( $('#'+this.parentNode.id).hasClass('blue') ) 
					is_public  = 1;

				if( this.parentNode.parentNode.id == 'todo_list_star' )
					todo_star( $('#'+this.parentNode.id).attr('tid')  , 'remove' , is_public );
				else
					todo_star( $('#'+this.parentNode.id).attr('tid')  , 'add' , is_public );
			}

			

			return false;
		} );
		


		
		$('#'+this.parentNode.parentNode.parentNode.id).unbind('click');
		$('#'+this.parentNode.parentNode.parentNode.id).bind('click' , 	function( )
		{
			if( this.parentNode.id == 'todo_list_done' )
			{
				mark_todo_undone( $(this).attr('tid') );
			}
			else
			{
				mark_todo_done( $(this).attr('tid') );  
				// 
			}	
				

		});
		
	});
	

}

function bind_feed()
{
	$('#feed_list li.todo .hotarea').each( function()
	{
		$(this).css({'cursor':'pointer'});

		$(this).unbind( 'click' );
		$(this).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			show_todo_detail( $('#'+this.parentNode.id).attr('tid') );
			return false;
		} );
	});

	$('#feed_list li.cast .hotarea').each( function()
	{
		$(this).css({'cursor':'pointer'});

		$(this).unbind( 'click' );
		$(this).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			show_feed_detail( $('#'+this.parentNode.id).attr('fid') );
			return false;
		} );
	});


}

function bind_notice()
{
	$('#notice_list li.todo').each( function()
	{
		$(this).css({'cursor':'pointer'});

		$(this).unbind( 'click' );
		$(this).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			show_todo_detail( $('#'+this.id).attr('tid') );
			return false;
		} );	
	});

	$('#notice_list li.cast').each( function()
	{
		$(this).css({'cursor':'pointer'});

		$(this).unbind( 'click' );
		$(this).bind( 'click' , function(evt)
		{
			evt.stopPropagation();
			show_feed_detail( $('#'+this.id).attr('fid') );
			return false;
		} );	
	});
}

function buddy_search()
{
	$('#buddy_key').bind( 'keyup keydown' , function(evt)
	{
		if( $('#buddy_key').val() != '' )
		{
			$('#buddy_list li.user').each(function()
			{
				if( ($(this).attr('pinyin').indexOf( $('#buddy_key').val() ) < 0) 
					&& ( $(this).attr('user').indexOf( $('#buddy_key').val() ) < 0 ))
				 	$(this).css('display','none');
				else 
					$(this).css('display','block');
			});
		}
		else
		{
			$('#buddy_list li.user').each(function()
			{
				$(this).css('display','block');
			});
		}

		
	});
}

function buddy_click()
{
	
	$('li.user').unbind('click');
	$('li.user').bind('click',function(evt)
	{
		$(this).toggleClass('selected');
		buddy_build_names();

		if( $("li.selected").length > 0 )
			$('#buddy_mulit_box').slideDown();
		else
			$('#buddy_mulit_box').slideUp();
		
	});
}

function buddy_build_names()
{
	$("#namelist").empty();
	$('li.user.selected').each( function()
	{
		$("#namelist").append( $('<li class="nameitem" uid="' + $(this).attr('uid') + '"><i class="icon-user"></i>'+ $(this).attr('user') +'</li>') )
	});
	
}

function cast_at_check()
{
	$('#cast_text').bind( 'keydown keyup' , function(evt)
	{
		if( /@/.test( $('#cast_text').val() ) ) $('#cast_user_tips').text(__('JS_CAST_MENTION_EXPLAIN_MENONTED'));
		else $('#cast_user_tips').text(__('JS_CAST_MENTION_EXPLAIN_ALL'));

		if( $('#cast_text').val() == '' ) $('#cast_form [type=submit]').attr('disabled',true);
		else  $('#cast_form [type=submit]').attr('disabled',false);
	});
}


function admin_user_on( uid )
{
	return admin_user( uid , 1 );
}

function admin_user_off( uid )
{
	return admin_user( uid , 0 );
}


function admin_user( uid , on )
{
	var url = '?c=buddy&a=admin_user&set=' + on  ;
	
	var params = { 'uid' : uid  };
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
			 
		if( data_obj.err_code == 0 )
		{
			$('li#uid-'+uid).replaceWith( $(data_obj.data.html) );
			// buddy_click();
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
	} );
}

function plugin_turn( fold_name , name , obj )
{
	var on , doo ;
	if( $(obj).is(':checked') ) on = 1 ;
	else on = 0;

	if( on == 0 )
	{
		swal({
			title: 'CONFIRM',
			text:  __('JS_STOP_PLUGIN_CONFIRM',[name]),
			icon: "warning",
			buttons: true
		}).then(function (confi) {
			if(confi)
				doo = 1
		});
	}
	else doo = 1;

	if( doo == 1 )
	{
		var url = '?c=pluglist&a=turn&on=' + on + '&folder_name=' + fold_name ;
		var params = {};
		$.post( url , params , function( data )
		{
			var data_obj = $.parseJSON( data );
			 
			if( data_obj.err_code == 0 )
			{
				location='?c=pluglist';
			}
			else
			{
				swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
			}		
		}); 

	}
}

function save_password()
{
	if( $('#password_form [name=oldpassword]').val() == '' )
	{
		swal("ERROR", __('JS_OLD_PASSWORD_CANNOT_EMPTY'), 'error');
		return false;
	}

	if( $('#password_form [name=newpassword]').val() == '' )
	{
		swal("ERROR", __('JS_NEW_PASSWORD_CANNOT_EMPTY'), 'error');
		return false;
	}

	if( $('#password_form [name=newpassword]').val() != $('#password_form [name=newpassword2]').val() )
	{
		swal("ERROR", __('JS_TWO_PASSWORDS_NOT_SAME'), 'error');
		return false;
	}

	send_form( 'password_form' , function(data){ password_updated( data ); } )
}


function password_updated( data )
{
	var data_obj = $.parseJSON( data );
	 
	if( data_obj.err_code == 0 )
	{
		swal("SUCCESS", __('JS_PASSWORD_CHANGED'), 'success');
		close_float_box();
		location = '?c=guest&a=logout';
	}
	else
	{
		swal("ERROR", __('JS_API_CONNECT_ERROR'), 'error');
	}
}


function profile_updated( data )
{
	var data_obj = $.parseJSON( data );
	 
	if( data_obj.err_code == 0 )
	{
		
		close_float_box();
	}
	else
	{
		if( data_obj.err_code == 10006 )
			swal("ERROR", __('JS_FILL_MOBILE_EMAIL_PLZ'), 'error');
		else
		swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
	}
}


function admin_close_user( uid )
{
	swal({
		title: 'CONFIRM',
		text:  __('JS_ACCOUNT_CLOSE_CONFIRM'),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=buddy&a=user_close' ;
			var params = { 'uid' : uid  };
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
				if( data_obj.err_code == 0 )
				{
					$('li#uid-'+uid).remove();
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}
			} );	
		}
	});
}

var at_users = new Array();

function load_im_buddy_list()
{
	var url = '?c=dashboard&a=im_buddy_list' ;
	
	var params = {};
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		if( data_obj.err_code == 0 )
		{
			$('#im_buddy_list').html( data_obj.data.html );
			update_im_order();
			
			$('#im_header').bind( 'click' ,  toggle_im );
			if( $.cookie('im_hide') == 1 ) toggle_im();
			$('#im').show();
			$('#im_buddy_list').jScrollPane();

			$('#im_buddy_list li').unbind('click');
			$('#im_buddy_list li').bind( 'click' , function()
			{
				$('#imkeyword').val('');
				$('#imkeyword').trigger('keydown');
				show_im_box( $(this).attr('uid') );
			});

			$('#imkeyword').bind('keyup keydown' , function(evt)
			{
				if( $('#imkeyword').val() != '' )
				{
					$('#im_buddy_list li.user_line').each(function()
					{
						if( ($(this).attr('pinyin').indexOf( $('#imkeyword').val() ) < 0) 
							&& ( $(this).attr('user').indexOf( $('#imkeyword').val() ) < 0 ))
						 	$(this).css('display','none');
						else 
							$(this).css('display','block');
					});
				}
				else
				{
					$('#im_buddy_list li.user_line').each(function()
					{
						$(this).css('display','block');
					});
				}

				
			});

			$('#im_buddy_list li.user_line').each(function()
			{
				at_users.push( {  'name':$(this).attr('user') 
								, 'pinyin':$(this).attr('pinyin') 
								, 'value':$(this).attr('user') 
								, 'id':$(this).attr('uid') 
								} );			
			});

			// add groups
			var url = '?c=buddy&a=groups' ;
			$.post( url , {} , function( data2 )
			{
				var data_obj2 = $.parseJSON( data2 );
				if( data_obj2 && data_obj2.err_code == 0 && data_obj2.data != null )
				{
					$.each(data_obj2.data , function(k,v)
					{
						at_users.push({'name':v});
					});
				}
			});


			if( $('#cast_text') ) enable_at('cast_text');
		}
		else
		{
			console.log( __('JS_API_ERROR_INFO' , [ data_obj.err_code , data_obj.message ] ) );
		}
	});	
}

var im_check_ref;

function show_im_box( uid )
{
	var url = '?c=dashboard&a=im_buddy_box&uid=' + uid ;
	
	var params = {};
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		if( data_obj.err_code == 0 )
		{
			save_im_order( uid );

			if( $('#im_box_'+uid).length > 0 )
				$('#im_box_'+uid).replaceWith( data_obj.data.html  );
			else
				$('#im_area_list').prepend( data_obj.data.html  );

			namecard();
			
			$('#im_area_list li').hide();
			$('#im_area_list li#im_box_'+uid).show();
			$('#im_box').show();

			$('#im_area_list li#im_box_'+uid+' .im_history').jScrollPane();
			$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').scrollToBottom();		

			$('#im_area_list li#im_box_'+uid+' .im_form_textarea').bind( 'keypress' , function(e)
			{
				if( e.which == 13 )
				{
					var text = $('#im_area_list li#im_box_'+uid+' .im_form_textarea').val();
					var url = '?c=dashboard&a=im_send&uid=' + uid + '&text=' + encodeURIComponent( text ) ;

					var params = {};
					$.post( url , params , function( data )
					{
						done();
						var data_obj = $.parseJSON( data );
						if( data_obj.err_code == 0 )
						{
							$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').getContentPane().append( data_obj.data.html );
							$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').reinitialise();
							$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').scrollToBottom();
							$('#im_area_list li#im_box_'+uid+' .im_form_textarea').val('');
						}
						else
						{
							swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
						}

						$('#im_area_list li#im_box_'+uid+' .im_form_textarea').attr('disabled',false);
					});		

					doing();
					$('#im_area_list li#im_box_'+uid+' .im_form_textarea').attr('disabled','disabled');
					
				}

			} );

			var url = '?c=dashboard&a=im_history&uid=' + uid ;
			var params = {};
			$.post( url , params , function( data )
			{
				$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').getContentPane().append( data );
				$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').reinitialise();
				$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').scrollToBottom();

				im_check_ref = setInterval( function(){ check_im( uid ); } , 1000*10 );
			});	

			//check_im( uid );
			$( '#im_blist_'+uid ).removeClass('new_message');
			blue_buddy_list();
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
	});
}

function user_reset_password( uid , uname )
{
	swal({
		title: 'CONFIRM',
		text:  __('JS_RESET_PASSWORD_CONFIRM',[uname]),
		icon: "warning",
		buttons: true
	}).then(function (confi) {
		if(confi)
		{
			var url = '?c=dashboard&a=user_reset_password&uid=' + uid ;
			var params = {};
			$.post( url , params , function( data )
			{
				var data_obj = $.parseJSON( data );
								
				if( data_obj.err_code == 0 )
				{
					noty(
					{
						layout:'topRight',
						text:uname+'的密码已经被重置为' + data_obj.data.newpass,
						closeWith:['button'],
						buttons: [
							{
								addClass: 'btn btn-primary btn-small', text: '关闭', onClick: function($noty) 
								{
									$noty.close()
									}
							}]
					});
				}
				else
				{
					swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
				}
			});

		}
	});
}

function check_im( uid )
{
	var url = '?c=dashboard&a=get_fresh_chat&uid=' + uid ;
	var params = {};
	$.post( url , params , function( data )
	{
		if( data )
		{
			$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').getContentPane().append( data );
			$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').reinitialise();
			$('#im_area_list li#im_box_'+uid+' .im_history').data('jsp').scrollToBottom();

			$.titleAlert( __('JS_NEW_DM') , 
			{
			    requireBlur:false,
			    stopOnFocus:true,
			    duration:10000,
			    interval:500 
			});
			play_sound();	
		}  
		//im_check_ref = setInterval( function( uid ){ check_im( uid ); } , 100000 );
});	

}

function close_im_box()
{
	$('#im_box').hide();
	clearInterval( im_check_ref );
	//$('#im_area_list').html('');
}



function toggle_im()
{
	if( $('#im').hasClass('peep') )
	{
		$('#im').removeClass('peep');
		$('#im_swith').html('&minus;');
		$.cookie('im_hide' , 0 );
	}
	else
	{
		$('#im').addClass('peep');
		$('#im_swith').html('&plus;');
		$.cookie('im_hide' , 1 );
	}						
}

function user_added( data )
{
	var data_obj = $.parseJSON( data );
			 
	if( data_obj.err_code == 0 )
	{
		$('#buddy_list').append( $(data_obj.data.html) );
		
		$('html, body').animate({
                    scrollTop: $("footer").offset().top
                     }, 1000);

		$('#buddy_form [type=text]').val('');
		$('#buddy_form [type=password]').val('');		
	}
	else
	{
		if( data_obj.err_code == 100002 )
		{
			return swal("ERROR", __('JS_ALL_CANNOT_EMPTY'), "error");
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
	}		
}


function edit_tag( uid )
{
	$('#t-tags-'+uid).hide();
	$('#t-tags-link-'+uid).hide();
	$('#t-tags-edit-'+uid).show();
	
	if( $('#t-tags-input-'+uid+'_tag').length < 1 )
		$('#t-tags-input-'+uid).tagsInput({'defaultText':__('JS_ADD_GRUOP_NAME')});
}

function save_tag( uid )
{
	var url = '?c=buddy&a=update_groups&uid='+uid+'&groups='+encodeURIComponent($('#t-tags-input-'+uid).val()) ;
	
	var params = {};
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		done();
		if( data_obj.err_code == 0 )
		{
			$('#uid-'+uid).replaceWith( $(data_obj.data.html) );
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
	} );

	doing();	

}

function cancel_tag( uid )
{
	$('#t-tags-'+uid).show();
	$('#t-tags-link-'+uid).show();
	$('#t-tags-edit-'+uid).hide();
}

function show_im_all_history( uid , uname )
{
	show_float_box( __('JS_CHAT_HISTORY_WITH_SOMEONE',[uname]) , '?c=dashboard&a=im_all&uid='+uid );
}

function im_next_btn()
{
	if( parseInt(im_his_more) == 1 )
	{
		$('#im_next_link').addClass('btn-primary');
		$('#im_next_link').removeClass('disable');
	}
	else
	{
		$('#im_next_link').removeClass('btn-primary');
		$('#im_next_link').addClass('disable');
	} 
}

function im_all_update( uid , keyword , max )
{
	// im_all_json
	var url = '?c=dashboard&a=im_all_json&uid='+uid+'&keyword='+encodeURIComponent(keyword)+'&max_id='+max ;
	
	var params = {};
	$.post( url , params , function( data )
	{
		var data_obj = $.parseJSON( data );
		 
		done();
		if( data_obj.err_code == 0 )
		{
			$('#im_all_text_div').html( $(data_obj.data.html) );
			$('#im_all_text_div').animate
			({
        		scrollTop: 0},
        	'fast');

			im_his_min = parseInt(data_obj.data.min);
			im_his_more = parseInt(data_obj.data.more);
			im_next_btn();

			
			
		}
		else
		{
			swal("ERROR", __('JS_API_CALL_ERROR', [data_obj.err_code, data_obj.message]), "error");
		}
	} );

	doing();
}


function doing()
{
	$("li#doing_gif").show();
}

function done()
{
	$("li#doing_gif").hide();
}

function show_float_box( title , url )
{
	$('#float_box').off('show');
	$('#float_box').on('show', function () 
	{
  		$('#float_box_title').text(title);
  		$('#float_box .modal-body').load(url);
	})

	$('#float_box .modal-body').html('<div class="muted"><center>Loading</center>');
	$('#float_box').modal({ 'show':true });

}

function close_float_box()
{
	$('#float_box').modal('hide');
}

function assign_chooser()
{
	if( $('#todo_form [name=private]:checked').val() == 1 )
	{
		swal("ERROR", __('JS_CANNOT_ADD_PRIVATE_TODO_TO_OTHERS'), "error");
		return false;
	} 

	show_float_box( '点击你要加TODO的同事' , '?c=dashboard&a=people_box&jsfunc=assign_set&self=1' );
}

function assign_set( tid , uid , uname )
{
	$('#assign_chooser_span a').html('给 <i class="icon-user"></i> '+uname);
	$('#todo_assign_uid').val(uid);
	close_float_box();
}

function at_chooser()
{
	show_float_box( __('JS_SELECT_MEMBER_TO_METION') , '?c=dashboard&a=people_box&jsfunc=cast_at_selected&multi=1' );
}

function cast_at_selected( uids , unames )
{
	$.each( unames , function()
	{
		var that = this;
		$('#cast_text').val( $('#cast_text').val() + ' @'+that );
	} );
	close_float_box();
	$('#cast_text').focus();
}

function close_all_side_board()
{
	$('#tdboard').hide();
	$('#fdboard').hide();	
	//$('#side_container').css( 'visibility' , 'visible' );
}



function get_img_src( file , fn ) 
{
	if ($.browser.msie) {
		if ($.browser.version <= 6) {
			fn(file.value);
			return;
		} else if ($.browser.version <= 8) {
			var src = '';
			file.select();
			try {
				src = document.selection.createRange().text;
			} finally {
				document.selection.empty();
			}
			src = src.replace(/[)'"%]/g, function(s){ return escape(escape(s)); });
			fn(src);
			return;
		}
	}
	if ($.browser.mozilla) {
		var oFile = file.files[0];
		if (oFile.getAsDataURL) {
			fn(oFile.getAsDataURL());
			return;
		}
	}
	try {
		var oFile = file.files[0];
		var oFReader = new FileReader();
		oFReader.onload = function (oFREvent) {
			/*
			var img = new Image();
			img.onload = function( evt )
			{

			}
			img.src = oFREvent.target.result;
			*/
			fn(oFREvent.target.result);
		};
		oFReader.onerror = function(a) {
			fn(options.okImg);
		};
		oFReader.readAsDataURL(oFile);
	} catch(e) {
		fn(options.okImg);
	}
}

function kset( key , value )
{
	if( window.localStorage )
	return window.localStorage.setItem( key , value );
}

function kget( key  )
{
	if( window.localStorage )
	return window.localStorage.getItem( key );
}

function kremove( key )
{
	if( window.localStorage )
	return window.localStorage.removeItem( key );
}


Array.prototype.unique =
  function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        // If this[i] is found later in the array
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };


function play_sound()
{
	if( $.cookie( 'tt2-sound-enable' ) == 1 )
		 document.getElementById('ttsoundplayer').play();
}

if( $.cookie( 'tt2-sound-enable' ) != 1 && $.cookie( 'tt2-sound-enable' ) != 0  )
$.cookie( 'tt2-sound-enable' , 1 );


/* post demo
$.post( 'url&get var'  , { 'post':'value'} , function( data )
{
	var data_obj = jQuery.parseJSON( data );
	console.log( data_obj  );
	
	if( data_obj.err_code == 0  )
	{
					
	}
	else
	{
		
	}	
} );

*/