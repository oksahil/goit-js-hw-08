!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector(".feedback-form"),o=document.querySelector('[name="email"]'),r=document.querySelector('[name="message"]'),i={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,T=function(){return g.Date.now()};function h(e,t,n){var o,r,i,a,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(u);function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,l=setTimeout(h,t),s?v(e):a}function p(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function h(){var e=T();if(p(e))return S(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?b(n,i-(e-c)):n}(e))}function S(e){return l=void 0,m&&o?v(e):(o=r=void 0,a)}function O(){var e=T(),n=p(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return g(f);if(d)return l=setTimeout(h,t),v(f)}return void 0===l&&(l=setTimeout(h,t)),a}return t=x(t)||0,j(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(x(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},O.flush=function(){return void 0===l?a:S(T())},O}function j(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=c.test(e);return o||s.test(e)?d(e.slice(2),o?2:8):f.test(e)?NaN:+e}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),h(e,t,{leading:o,maxWait:t,trailing:r})},n.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,o=t.email.value,r=t.message.value;if(""===o||""===r)return console.log("Please fill in all the fields!");console.log("Email: ".concat(o,", message: ").concat(r)),n.reset(),localStorage.clear()})),n.addEventListener("input",i((function(e){try{var t=e.currentTarget.elements,n=t.email.value,o=t.message.value,r={email:n,message:o};return localStorage.setItem("feedback-form-state",JSON.stringify(r))}catch(e){console.log("input all fields")}}),500)),function(e){try{formsTextContent=localStorage.getItem("feedback-form-state")||"",parseFormsTextContent=JSON.parse(formsTextContent)||"",o.value=parseFormsTextContent.email||"",r.value=parseFormsTextContent.message||""}catch(e){console.log("input all fields")}}()}();
//# sourceMappingURL=03-feedback.3f65bc65.js.map
