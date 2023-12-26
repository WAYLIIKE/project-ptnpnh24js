import{a as v,b,r as y,c as f,u as h}from"./assets/header-ec84368f.js";import{a as k}from"./assets/vendor-a61d8330.js";async function L(){const e="https://food-boutique.b.goit.study/api/products/popular";try{return(await k.get(`${e}`)).data}catch(t){return t.message}}const S="/img/icons/sprite.svg#icon-shop",E="/img/icons/sprite.svg#icon-check",l=document.querySelector(".popular-list");async function w(){try{return await L()}catch(e){console.log(e)}}function B(e){const t=e.map(({_id:c,img:s,name:o,category:a,size:i,popularity:g})=>`<li class="popular-item" data-id='${c}'>
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
    <use href="${E}"></use></svg>
   
   
    <svg class="icon-shop" width="12" height="12" >
    <use href="${S}"></use></svg>
    
    </button>
    </div>
    </li>`);l.insertAdjacentHTML("beforeend",t.join(""))}function M(e){const t=e.target.closest(".popularbtn-basket");if(!t)return;const s=e.target.closest(".popular-item").dataset.id,o=q();if(o.includes(s))return;const a=t.querySelector(".icon-check");t.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),o.push(s),$(o)}function q(){const e=localStorage.getItem("basket");return e?JSON.parse(e):[]}function $(e){localStorage.setItem("basket",JSON.stringify(e))}const r=document.querySelector(".bob"),n=document.querySelector(".backdrop"),d=document.querySelector(".button-modal-icon");document.addEventListener("keydown",m);r.addEventListener("click",u);d.addEventListener("click",p);function u(){n.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function p(){n.classList.toggle("is-visible"),document.body.style.overflow=""}function m(e){e.key==="Escape"&&n.classList.contains("is-visible")&&(n.classList.toggle("is-visible"),document.body.style.overflow="")}const I=()=>{const e={openModalBtn:document.querySelector(".modal-error-open"),closeModalBtn:document.querySelector(".modal-error-close"),modal:document.querySelector(".modal-error")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",c),document.addEventListener("keydown",s);function t(){e.modal.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function c(){e.modal.classList.toggle("is-visible"),document.body.style.overflow=""}function s(o){o.key==="Escape"&&e.modal.classList.contains("is-visible")&&(e.modal.classList.toggle("is-visible"),document.body.style.overflow="")}};document.addEventListener("keydown",m);r.addEventListener("click",u);d.addEventListener("click",p);v.addEventListener("click",function(){b(Math.random())});y.addEventListener("click",function(){f(0)});h();I();w().then(B).catch(e=>{console.log(e)});l.addEventListener("click",M);
//# sourceMappingURL=commonHelpers2.js.map
