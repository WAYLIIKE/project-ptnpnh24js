import{a as l,b as p,r as u,c as d,u as h,f as m,s as g}from"./assets/footer-36c97624.js";import{a as b}from"./assets/vendor-2dcf4ad5.js";async function f(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await b.get(`${t}`)).data}catch(s){return s.message}}const v="../img/icons/sprite.svg#icon-check",k="../img/icons/sprite.svg#icon-shop",i=document.querySelector(".popular-list");async function y(){try{return await f()}catch(t){console.log(t)}}function S(t){const s=t.map(({_id:r,img:o,name:e,category:a,size:c,popularity:n})=>`<li class="popular-item" data-id='${r}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${o}" alt="${e}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${e}</h4>
    <p class="info-popular-item">Category:
    <b>${a}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${c}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${n}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket " type="button">
   
    <svg class = "icon-check  is-hidden"  width="12" height="12">
    <use href="${v}"></use></svg>
   
   
    <svg class="icon-shop" width="12" height="12" >
    <use href="${k}"></use></svg>
    
    </button>
    </div>
    </li>`);i.insertAdjacentHTML("beforeend",s.join(""))}function L(t){const s=t.target.closest(".popularbtn-basket");if(!s)return;const o=t.target.closest(".popular-item").dataset.id,e=$();if(e.includes(o))return;const a=s.querySelector(".icon-check");s.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),e.push(o),I(e)}function $(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function I(t){localStorage.setItem("basket",JSON.stringify(t))}l.addEventListener("click",function(){p(Math.random())});u.addEventListener("click",function(){d(0)});h();m.addEventListener("submit",g);y().then(S).catch(t=>{console.log(t)});i.addEventListener("click",L);
//# sourceMappingURL=commonHelpers2.js.map
