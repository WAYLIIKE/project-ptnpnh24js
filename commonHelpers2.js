import{a as b,r as y,u as f}from"./assets/header-b98e882c.js";import{a as h}from"./assets/vendor-a61d8330.js";async function k(){const e="https://food-boutique.b.goit.study/api/products/popular";try{return(await h.get(`${e}`)).data}catch(t){return t.message}}const L="./img/icons/sprite.svg#icon-shop",S="./img/icons/sprite.svg#icon-check",l=document.querySelector(".popular-list");async function r(){try{return await k()}catch(e){console.log(e)}}console.log(r());r().then(E).catch(e=>{console.log(e)});function E(e){const t=e.map(({_id:c,img:s,name:o,category:a,size:i,popularity:v})=>`<li class="popular-item" data-id='${c}'>
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
    <b>${v}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket " type="button">
   
    <svg class = "icon-check  is-hidden"  width="12" height="12">
    <use href="${S}"></use></svg>
   
   
    <svg class="icon-shop" width="12" height="12" >
    <use href="${L}"></use></svg>
    
    </button>
    </div>
    </li>`);l.insertAdjacentHTML("beforeend",t.join(""))}l.addEventListener("click",w);function w(e){const t=e.target.closest(".popularbtn-basket");if(!t)return;const s=e.target.closest(".popular-item").dataset.id,o=B();if(o.includes(s)){const a=t.querySelector(".icon-check");t.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden");return}o.push(s),M(o)}function B(){const e=localStorage.getItem("basket");return e?JSON.parse(e):[]}function M(e){localStorage.setItem("basket",JSON.stringify(e))}const d=document.querySelector(".bob"),n=document.querySelector(".backdrop"),u=document.querySelector(".button-modal-icon");document.addEventListener("keydown",g);d.addEventListener("click",p);u.addEventListener("click",m);function p(){n.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function m(){n.classList.toggle("is-visible"),document.body.style.overflow=""}function g(e){e.key==="Escape"&&n.classList.contains("is-visible")&&(n.classList.toggle("is-visible"),document.body.style.overflow="")}const q=()=>{const e={openModalBtn:document.querySelector(".modal-error-open"),closeModalBtn:document.querySelector(".modal-error-close"),modal:document.querySelector(".modal-error")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",c),document.addEventListener("keydown",s);function t(){e.modal.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function c(){e.modal.classList.toggle("is-visible"),document.body.style.overflow=""}function s(o){o.key==="Escape"&&e.modal.classList.contains("is-visible")&&(e.modal.classList.toggle("is-visible"),document.body.style.overflow="")}};document.addEventListener("keydown",g);d.addEventListener("click",p);u.addEventListener("click",m);b.addEventListener("click",function(){addItemToLocalArray(Math.random())});y.addEventListener("click",function(){removeItemFromLocalArray(0)});f();q();
//# sourceMappingURL=commonHelpers2.js.map
