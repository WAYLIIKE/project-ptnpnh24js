import{a as v,b,r as y,c as f,u as h}from"./assets/header-e039c823.js";import{a as k}from"./assets/vendor-a61d8330.js";const l=document.querySelector(".bob"),n=document.querySelector(".backdrop"),r=document.querySelector(".button-modal-icon");document.addEventListener("keydown",p);l.addEventListener("click",d);r.addEventListener("click",u);function d(){n.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function u(){n.classList.toggle("is-visible"),document.body.style.overflow=""}function p(e){e.key==="Escape"&&n.classList.contains("is-visible")&&(n.classList.toggle("is-visible"),document.body.style.overflow="")}const L=()=>{const e={openModalBtn:document.querySelector(".modal-error-open"),closeModalBtn:document.querySelector(".modal-error-close"),modal:document.querySelector(".modal-error")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",c),document.addEventListener("keydown",s);function t(){e.modal.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function c(){e.modal.classList.toggle("is-visible"),document.body.style.overflow=""}function s(o){o.key==="Escape"&&e.modal.classList.contains("is-visible")&&(e.modal.classList.toggle("is-visible"),document.body.style.overflow="")}};async function S(){const e="https://food-boutique.b.goit.study/api/products/popular";try{return(await k.get(`${e}`)).data}catch(t){return t.message}}const E="/img/icons/sprite.svg#icon-shop",w="/img/icons/sprite.svg#icon-check",m=document.querySelector(".popular-list");async function B(){try{return await S()}catch(e){console.log(e)}}function M(e){const t=e.map(({_id:c,img:s,name:o,category:a,size:i,popularity:g})=>`<li class="popular-item" data-id='${c}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${s}" alt="${o}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${o}</h4>
    <p class="info-popular-item">Category:
    <b>${a}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${i}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${g}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket " type="button">
   
    <svg class = "icon-check  is-hidden"  width="12" height="12">
    <use href="${w}"></use></svg>
   
   
    <svg class="icon-shop" width="12" height="12" >
    <use href="${E}"></use></svg>
    
    </button>
    </div>
    </li>`);m.insertAdjacentHTML("beforeend",t.join(""))}function q(e){const t=e.target.closest(".popularbtn-basket");if(!t)return;const s=e.target.closest(".popular-item").dataset.id,o=$();if(o.includes(s))return;const a=t.querySelector(".icon-check");t.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),o.push(s),I(o)}function $(){const e=localStorage.getItem("basket");return e?JSON.parse(e):[]}function I(e){localStorage.setItem("basket",JSON.stringify(e))}document.addEventListener("keydown",p);l.addEventListener("click",d);r.addEventListener("click",u);v.addEventListener("click",function(){b(Math.random())});y.addEventListener("click",function(){f(0)});h();L();B().then(M).catch(e=>{console.log(e)});m.addEventListener("click",q);
//# sourceMappingURL=commonHelpers2.js.map
