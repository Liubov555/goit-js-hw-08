var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const l={formEl:document.querySelector(".feedback-form"),textaria:document.querySelector("textarea")};let n={};l.formEl.addEventListener("input",(0,a.throttle)((function(e){e.preventDefault();const t=l.formEl.elements.email.value,o=l.textaria.value;n={email:t,message:o},localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),l.formEl.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state");if(t){const e=JSON.parse(t);console.log(e)}localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);l.formEl.elements.email.value=t.email||"",l.textaria.value=t.message||""}}();
//# sourceMappingURL=03-feedback.b08a1a68.js.map
