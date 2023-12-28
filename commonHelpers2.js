import{u as r,f as L,s as w}from"./assets/footer-ff9b61fb.js";import{a as l,i as p}from"./assets/vendor-2dcf4ad5.js";async function E(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await l.get(`${t}`)).data}catch(s){return s.message}}async function A(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await l.get(`${t}`)).data}catch(s){return s.message}}async function g(t){const s="https://food-boutique.b.goit.study/api/products/";try{return(await l.get(`${s}${t}`)).data}catch(o){return o.message}}const n="/project-ptnpnh24js/assets/sprite-fe336fca.svg",h=document.querySelector(".popular-list");async function I(){try{return await E()}catch(t){console.log(t)}}function B(t){const s=t.map(({_id:o,img:e,name:a,category:c,size:i,popularity:d})=>`<li class="popular-item" data-id='${o}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${e}" alt="${a}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${a}</h4>
    <p class="info-popular-item">Category:
    <b>${c}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${i}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${d}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket unused" type="button">

    <svg class = "icon-check is-hidden unused"  width="12" height="12">
    <use class="unused" href="${n}#icon-check"></use></svg>

    <svg class="icon-shop unused" width="12" height="12">
    <use class="unused" href="${n}#icon-shop"></use></svg>

    </button>
    </div>
    </li>`);h.insertAdjacentHTML("beforeend",s.join(""))}function q(t){const s=t.target.closest(".popularbtn-basket");if(!s)return;const e=t.target.closest(".popular-item").dataset.id,a=y();if(a.includes(e)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const c=s.querySelector(".icon-check");s.querySelector(".icon-shop").classList.add("is-hidden"),c.classList.remove("is-hidden"),a.push(e),v(a),r()}function y(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function v(t){localStorage.setItem("basket",JSON.stringify(t))}const D=document.querySelectorAll(".product-card");function m(t){const{_id:s,img:o,name:e,category:a,size:c,popularity:i,desc:d,price:k}=t,$=`
    <div class="modal-box"  data-id='${s}'>
    <div class="card-info">
    <div class="img-box">
      <img class="card-image" src="${o}" alt="${e}" width="160px" height="160px">
      </div>
      <div class="modal-tablet ">
      <h4 class="card-modal-name">${e}</h4>
      <div class="card-modal-data">
      <p class="info-modal-item">Category: <b>${a}</b></p>
      <p class="info-modal-item">Size: <b>${c}</b></p>
       </div>
      <p class="info-modal-item">Popularity: <b>${i}</b></p>
      <p class="modal-desc">${d}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">$${k}</p>
      <button type="button" class="modal-btn">
        Add to
        <svg  width="18" height="18">
          <use href="${n}#icon-shop"></use>
        </svg>
      </button>
      </div>
      <button class="button-icon-close" type="button">
        <svg class="modal-close">
          <use href="${n}#icon-close"></use>
        </svg>
    </div>
    </div>
  `,f=document.getElementById("modal"),S=f.querySelector(".modal-content");S.innerHTML=$,f.style.display="block"}D.forEach(t=>{t.addEventListener("click",async function(){const s=t.getAttribute("data-id");try{const o=await g(s);m(o)}catch(o){console.error(o)}})});const u=document.getElementById("modal");u.addEventListener("click",function(t){t.target.classList.contains("modal-close")&&(u.style.display="none")});u.addEventListener("click",P);function P(t){if(!t.target.closest(".modal-btn"))return;const o=t.target.closest(".modal-box").getAttribute("data-id"),e=y();if(e.includes(o)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}e.push(o),v(e),r()}const b=document.querySelector(".discount-list");async function C(){try{const t=await A(),s=x(t,2);b.insertAdjacentHTML("beforeend",M(s))}catch(t){console.log(t.message)}}function x(t,s){return t.sort(()=>.5-Math.random()).slice(0,s)}function M(t){return t.map(({name:s,img:o,price:e,_id:a})=>`
    <li data-id="${a}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="${n}#icon-discount"></use>
        </svg>
        <img src="${o}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${s}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${e}</p>
            <button class="discount-btn unused" type="button">

            <svg class = "icon-check is-hidden unused"  width="12" height="12">
            <use class="unused" href="${n}#icon-check"></use></svg>

            <svg class="icon-shop unused" width="12" height="12">
            <use class="unused" href="${n}#icon-shop"></use></svg>

        </button>
        </div>
    </div>
    </li>`).join("")}b.addEventListener("click",R);function R(t){if(t.target===t.currentTarget)return;const o=t.target.closest(".discount-product").dataset.id,e=t.target.closest(".discount-btn");if(!e)return;const a=j();if(a.includes(o)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const c=e.querySelector(".icon-check");e.querySelector(".icon-shop").classList.add("is-hidden"),c.classList.remove("is-hidden"),a.push(o),J(a),r()}function j(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function J(t){localStorage.setItem("basket",JSON.stringify(t))}r();L.addEventListener("submit",w);h.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const s=t.target.closest(".popular-item").getAttribute("data-id");try{const o=await g(s);m(o)}catch(o){console.error(o)}});I().then(B).catch(t=>{console.log(t)});h.addEventListener("click",q);C();b.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const s=t.target.closest(".discount-product").getAttribute("data-id");try{const o=await g(s);m(o)}catch(o){console.error(o)}});
//# sourceMappingURL=commonHelpers2.js.map
