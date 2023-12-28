import{u as d,f as v,s as y}from"./assets/footer-3542f7b2.js";import{a as l}from"./assets/vendor-2dcf4ad5.js";async function $(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await l.get(`${t}`)).data}catch(s){return s.message}}async function k(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await l.get(`${t}`)).data}catch(s){return s.message}}async function S(t){const s="https://food-boutique.b.goit.study/api/products/";try{return(await l.get(`${s}${t}`)).data}catch(o){return o.message}}const i="/project-ptnpnh24js/assets/sprite-fe336fca.svg",L=document.querySelectorAll(".product-card");function w(t){const{_id:s,img:o,name:c,category:e,size:a,popularity:n,desc:r,price:m}=t,b=`
    <div class="modal-box"  data-id='${s}'>
    <div class="card-info">
    <div class="img-box">
      <img class="card-image" src="${o}" alt="${c}" width="160px" height="160px">
      </div>
      <div class="modal-tablet ">
      <h4 class="card-modal-name">${c}</h4>
      <div class="card-modal-data">
      <p class="info-modal-item">Category: <b>${e}</b></p>
      <p class="info-modal-item">Size: <b>${a}</b></p>
       </div>
      <p class="info-modal-item">Popularity: <b>${n}</b></p>
      <p class="modal-desc">${r}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">${m}</p>
      <button type="button" class="modal-btn">
        Add to
        <svg  width="18" height="18">
          <use href="${i}#icon-shop"></use>
        </svg>
      </button>
      </div>
      <button class="button-icon-close" type="button">
        <svg class="modal-close">
          <use href="./img/icons/sprite.svg#icon-close"></use>
        </svg>
    </div>
    </div>
  `,u=document.getElementById("modal"),f=u.querySelector(".modal-content");f.innerHTML=b,u.style.display="block"}L.forEach(t=>{t.addEventListener("click",async function(){const s=t.getAttribute("data-id");try{const o=await S(s);w(o)}catch(o){console.error(o)}})});const p=document.getElementById("modal");p.addEventListener("click",function(t){t.target.classList.contains("modal-close")&&(p.style.display="none")});const g=document.querySelector(".popular-list");async function E(){try{return await $()}catch(t){console.log(t)}}function A(t){const s=t.map(({_id:o,img:c,name:e,category:a,size:n,popularity:r})=>`<li class="popular-item" data-id='${o}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${c}" alt="${e}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${e}</h4>
    <p class="info-popular-item">Category:
    <b>${a}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${n}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${r}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket " type="button">

    <svg class = "icon-check is-hidden"  width="12" height="12">
    <use href="${i}#icon-check"></use></svg>

    <svg class="icon-shop" width="12" height="12">
    <use href="${i}#icon-shop"></use></svg>

    </button>
    </div>
    </li>`);g.insertAdjacentHTML("beforeend",s.join(""))}function B(t){const s=t.target.closest(".popularbtn-basket");if(!s)return;const c=t.target.closest(".popular-item").dataset.id,e=I();if(e.includes(c))return;const a=s.querySelector(".icon-check");s.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),e.push(c),q(e),d()}function I(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function q(t){localStorage.setItem("basket",JSON.stringify(t))}const h=document.querySelector(".discount-list");async function P(){try{const t=await k(),s=D(t,2);h.insertAdjacentHTML("beforeend",C(s))}catch(t){console.log(t.message)}}function D(t,s){return t.sort(()=>.5-Math.random()).slice(0,s)}function C(t){return t.map(({name:s,img:o,price:c,_id:e})=>`
    <li data-id="${e}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="${i}#icon-discount"></use>
        </svg>
        <img src="${o}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${s}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${c}</p>
            <button class="discount-btn" type="button">

            <svg class = "icon-check is-hidden"  width="12" height="12">
            <use href="${i}#icon-check"></use></svg>

            <svg class="icon-shop" width="12" height="12">
            <use href="${i}#icon-shop"></use></svg>

        </button>
        </div>
    </div>
    </li>`).join("")}h.addEventListener("click",x);function x(t){if(t.target===t.currentTarget)return;const o=t.target.closest(".discount-product").dataset.id,c=t.target.closest(".discount-btn");if(!c)return;const e=M();if(e.includes(o))return;const a=c.querySelector(".icon-check");c.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),e.push(o),j(e),d()}function M(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function j(t){localStorage.setItem("basket",JSON.stringify(t))}d();v.addEventListener("submit",y);E().then(A).catch(t=>{console.log(t)});g.addEventListener("click",B);P();
//# sourceMappingURL=commonHelpers2.js.map
