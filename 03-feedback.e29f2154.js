!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("1WSnx"),a={formEl:document.querySelector("form"),textaria:document.querySelector("textarea")},l={};a.formEl.addEventListener("input",(0,o.throttle)((function(e){var t=e.target.value;localStorage.setItem("feedback-form-state",t)}),500)),a.formEl.addEventListener("input",(function(e){l[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(l))}))}();
//# sourceMappingURL=03-feedback.e29f2154.js.map
