import{u as i,f as h,s as g}from"./assets/footer-46b6302e.js";import{a as u}from"./assets/vendor-2dcf4ad5.js";async function f(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await u.get(`${t}`)).data}catch(s){return s.message}}async function m(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await u.get(`${t}`)).data}catch(s){return s.message}}const n="/project-ptnpnh24js/assets/sprite-fe336fca.svg",l=document.querySelector(".popular-list");async function b(){try{return await f()}catch(t){console.log(t)}}function k(t){const s=t.map(({_id:c,img:o,name:e,category:a,size:r,popularity:p})=>`<li class="popular-item" data-id='${c}'>
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
    <b>${r}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${p}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket " type="button">

    <svg class = "icon-check is-hidden"  width="12" height="12">
    <use href="${n}#icon-check"></use></svg>

    <svg class="icon-shop" width="12" height="12">
    <use href="${n}#icon-shop"></use></svg>

    </button>
    </div>
    </li>`);l.insertAdjacentHTML("beforeend",s.join(""))}function v(t){const s=t.target.closest(".popularbtn-basket");if(!s)return;const o=t.target.closest(".popular-item").dataset.id,e=S();if(e.includes(o))return;const a=s.querySelector(".icon-check");s.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),e.push(o),y(e),i()}function S(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function y(t){localStorage.setItem("basket",JSON.stringify(t))}const d=document.querySelector(".discount-list");async function $(){try{const t=await m(),s=L(t,2);d.insertAdjacentHTML("beforeend",w(s))}catch(t){console.log(t.message)}}function L(t,s){return t.sort(()=>.5-Math.random()).slice(0,s)}function w(t){return t.map(({name:s,img:c,price:o,_id:e})=>`
    <li data-id="${e}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="${n}#icon-discount"></use>
        </svg>
        <img src="${c}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${s}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${o}</p>
            <button class="discount-btn" type="button">

            <svg class = "icon-check is-hidden"  width="12" height="12">
            <use href="${n}#icon-check"></use></svg>

            <svg class="icon-shop" width="12" height="12">
            <use href="${n}#icon-shop"></use></svg>

        </button>
        </div>
    </div>
    </li>`).join("")}d.addEventListener("click",q);function q(t){if(t.target===t.currentTarget)return;const c=t.target.closest(".discount-product").dataset.id,o=t.target.closest(".discount-btn");if(!o)return;const e=A();if(e.includes(c))return;const a=o.querySelector(".icon-check");o.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),e.push(c),B(e),i()}function A(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function B(t){localStorage.setItem("basket",JSON.stringify(t))}i();h.addEventListener("submit",g);b().then(k).catch(t=>{console.log(t)});l.addEventListener("click",v);$();
//# sourceMappingURL=commonHelpers2.js.map
