import{H,B as U,ab as d,av as w,g as T,w as y,ax as x,o as A,ay as R}from"./index.6f2f8022.js";function B(){let o;const n=T();function a(){o=void 0}return H(a),U(a),{removeTick:a,registerTick(s){o=s,d(()=>{o===s&&(w(n)===!1&&o(),o=void 0)})}}}const P={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},h=["beforeShow","show","beforeHide","hide"];function D({showing:o,canShow:n,hideOnRouteChange:a,handleShow:s,handleHide:f,processOnMount:M}){const c=T(),{props:l,emit:t,proxy:m}=c;let u;function k(e){o.value===!0?r(e):p(e)}function p(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||n!==void 0&&n(e)!==!0)return;const i=l["onUpdate:modelValue"]!==void 0;i===!0&&(t("update:modelValue",!0),u=e,d(()=>{u===e&&(u=void 0)})),(l.modelValue===null||i===!1)&&v(e)}function v(e){o.value!==!0&&(o.value=!0,t("beforeShow",e),s!==void 0?s(e):t("show",e))}function r(e){if(l.disable===!0)return;const i=l["onUpdate:modelValue"]!==void 0;i===!0&&(t("update:modelValue",!1),u=e,d(()=>{u===e&&(u=void 0)})),(l.modelValue===null||i===!1)&&b(e)}function b(e){o.value!==!1&&(o.value=!1,t("beforeHide",e),f!==void 0?f(e):t("hide",e))}function g(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&t("update:modelValue",!1):e===!0!==o.value&&(e===!0?v:b)(u)}y(()=>l.modelValue,g),a!==void 0&&x(c)===!0&&y(()=>m.$route.fullPath,()=>{a.value===!0&&o.value===!0&&r()}),M===!0&&A(()=>{g(l.modelValue)});const V={show:p,hide:r,toggle:k};return Object.assign(m,V),V}function F(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),R.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{P as a,h as b,F as c,D as d,B as u};
