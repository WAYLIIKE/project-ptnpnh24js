import{i as c,a as f}from"./vendor-2dcf4ad5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();document.querySelector("#start");document.querySelector("#end");const m=document.querySelector("#cart-counter");function y(){let t=localStorage.getItem("basket");return t?(t=JSON.parse(t),t.length):0}function k(){m.textContent=y()}const g=document.querySelector(".bob"),n=document.querySelector(".backdrop"),p=document.querySelector(".button-modal-icon");document.addEventListener("keydown",v);g.addEventListener("click",u);p.addEventListener("click",b);function u(){n.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function b(){n.classList.toggle("is-visible"),document.body.style.overflow=""}function v(t){t.key==="Escape"&&n.classList.contains("is-visible")&&(n.classList.toggle("is-visible"),document.body.style.overflow="")}const L=document.querySelector(".modal-error-open"),h=document.querySelector(".modal-error-close"),i=document.querySelector(".modal-error");L.addEventListener("click",a);h.addEventListener("click",w);document.addEventListener("keydown",S);function a(){i.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function w(){i.classList.toggle("is-visible"),document.body.style.overflow=""}function S(t){t.key==="Escape"&&refs.modal.classList.contains("is-visible")&&(i.classList.toggle("is-visible"),document.body.style.overflow="")}const C=document.querySelector(".subscribe-form"),q="https://food-boutique.b.goit.study/api/subscription";async function M(t){if(t.preventDefault(),t.currentTarget.userAddress.value===""){c.warning({title:"Caution",message:"Please enter email!",position:"topRight"});return}try{(await f.post(q,{email:t.currentTarget.userAddress.value})).status===201&&u()}catch(s){s.response.status===409?a():c.warning({title:"Caution",message:s.message,position:"topRight"})}}export{C as f,M as s,k as u};
//# sourceMappingURL=footer-0ca8e3a3.js.map
