import{u as l,f as M,s as P}from"./assets/footer-2a59a137.js";import{a as p,i as g}from"./assets/vendor-2dcf4ad5.js";async function A(t){const e="https://food-boutique.b.goit.study/api/products",s=new URLSearchParams(t);try{return(await p.get(`${e}?${s}`)).data}catch(o){return o.message}}async function T(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await p.get(`${t}`)).data}catch(e){return e.message}}async function j(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await p.get(`${t}`)).data}catch(e){return e.message}}async function D(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await p.get(`${t}`)).data}catch(e){return e.message}}async function y(t){const e="https://food-boutique.b.goit.study/api/products/";try{return(await p.get(`${e}${t}`)).data}catch(s){return s.message}}const n="/project-ptnpnh24js/assets/sprite-fe336fca.svg",k=document.querySelector(".popular-list");async function R(){try{return await j()}catch(t){console.log(t)}}function x(t){const e=t.map(({_id:s,img:o,name:c,size:r,category:i,popularity:d})=>{const u=i.split("_").join(" ");return`<li class="popular-item" data-id='${s}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${o}" alt="${c}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${c}</h4>
    <p class="info-popular-item">Category:
    <b>${u}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${r}</b></p>
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
    </li>`});k.insertAdjacentHTML("beforeend",e.join(""))}function _(t){const e=t.target.closest(".popularbtn-basket");if(!e)return;const o=t.target.closest(".popular-item").dataset.id,c=$();if(c.includes(o)){g.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const r=e.querySelector(".icon-check");e.querySelector(".icon-shop").classList.add("is-hidden"),r.classList.remove("is-hidden"),c.push(o),L(c),l()}function $(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function L(t){localStorage.setItem("basket",JSON.stringify(t))}const H=document.querySelectorAll(".product-card");function f(t){const{_id:e,img:s,name:o,category:c,size:r,popularity:i,desc:d,price:u}=t,I=c.split("_").join(" "),q=`
    <div class="modal-box"  data-id='${e}'>
    <div class="card-info">
    <div class="img-box">
      <img class="card-image" src="${s}" alt="${o}" width="160px" height="160px">
      </div>
      <div class="modal-tablet ">
      <h4 class="card-modal-name">${o}</h4>
      <div class="card-modal-data">
      <p class="info-modal-item">Category: <b>${I}</b></p>
      <p class="info-modal-item">Size: <b>${r}</b></p>
       </div>
      <p class="info-modal-item">Popularity: <b>${i}</b></p>
      <p class="modal-desc">${d}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">$${u}</p>
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
  `,w=document.getElementById("modal"),B=w.querySelector(".modal-content");B.innerHTML=q,w.style.display="block"}H.forEach(t=>{t.addEventListener("click",async function(){const e=t.getAttribute("data-id");try{const s=await y(e);f(s)}catch(s){console.error(s)}})});const b=document.getElementById("modal");b.addEventListener("click",function(t){t.target.classList.contains("modal-close")&&(b.style.display="none")});b.addEventListener("click",N);function N(t){if(!t.target.closest(".modal-btn"))return;const s=t.target.closest(".modal-box").getAttribute("data-id"),o=$();if(o.includes(s)){g.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}o.push(s),L(o),l()}const S=document.querySelector(".discount-list");async function U(){try{const t=await D(),e=J(t,2);S.insertAdjacentHTML("beforeend",O(e))}catch(t){console.log(t.message)}}function J(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function O(t){return t.map(({name:e,img:s,price:o,_id:c})=>`
    <li data-id="${c}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="${n}#icon-discount"></use>
        </svg>
        <img src="${s}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${e}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${o}</p>
            <button class="discount-btn unused" type="button">

            <svg class = "icon-check is-hidden unused"  width="12" height="12">
            <use class="unused" href="${n}#icon-check"></use></svg>

            <svg class="icon-shop unused" width="12" height="12">
            <use class="unused" href="${n}#icon-shop"></use></svg>

        </button>
        </div>
    </div>
    </li>`).join("")}S.addEventListener("click",W);function W(t){if(t.target===t.currentTarget)return;const s=t.target.closest(".discount-product").dataset.id,o=t.target.closest(".discount-btn");if(!o)return;const c=z();if(c.includes(s)){g.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const r=o.querySelector(".icon-check");o.querySelector(".icon-shop").classList.add("is-hidden"),r.classList.remove("is-hidden"),c.push(s),F(c),l()}function z(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function F(t){localStorage.setItem("basket",JSON.stringify(t))}async function Q(){const t=document.getElementById("categoryQuery");t.innerHTML="";try{const s='<option value="" selected hidden>Categories</option>'+(await T()).map(o=>`<option value="${o}">${o.replace(/_/g," ")}</option>`).join("")+'<option value="">Show all</option>';t.insertAdjacentHTML("beforeend",s)}catch(e){console.error("Error fetching categories:",e)}}const E=document.querySelector(".menu-cards");function C(t){return t.map(({_id:e,img:s,name:o,category:c,size:r,popularity:i,price:d})=>{const u=c.split("_").join(" ");return`
   <li  class="product-card" data-id="${e}">
   <div class="product-cart-container">
   <div class="product-image-container">
      <img class="product-img" src="${s}" alt="${o}" width="140px" height="140px">
      </div>
      </div>
      <div class="card-content">
      <h4 class="product-title">${o}</h4>
      <div class="descr-container">
      <p class="product-description">Category:
      <b>${u}</b>
      </p>
      <p class="product-description">Size:
      <b>${r}</b>
      </p> 
      <p class="product-description">Popularity: 
      <b>${i}</b>
      </p>
     </div>
      <div class="price-info">
      <p class="product-price">&#36;${d}
      </p>
      
      <button class="product-add-btn unused" type="button">

      <svg class="cart-icon-check is-hidden unused">
      <use class="unused" href="${n}#icon-check" width="18" hight="18"></use>  
      </svg>

      <svg class="cart-icon unused">
      <use class="unused" href="${n}#icon-shop" width="18" hight="18"></use>
      </svg>

      </button>
      </div>
      </div>
    </li>
        `}).join("")}E.addEventListener("click",Y);function Y(t){const e=t.target.closest(".product-add-btn");if(!e)return;const o=t.target.closest(".product-card").dataset.id,c=$();if(c.includes(o)){g.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const r=e.querySelector(".cart-icon-check");e.querySelector(".cart-icon").classList.add("is-hidden"),r.classList.remove("is-hidden"),c.push(o),L(c),l()}const G=document.querySelector(".search-form"),v=document.querySelector(".menu-cards"),m=document.getElementById("categoryQuery");m.addEventListener("change",h);G.addEventListener("submit",K);let a={keyword:"",category:null,page:1,limit:9};localStorage.removeItem("filters");function K(t){t.preventDefault();const e=m.value;console.log(e);let s=t.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(a.keyword=s||"",s===""&&m.value!=="")return h();if(s==="")return a={keyword:"",limit:9},h();h()}function h(){const t=m.value;t==="all"?a.category=null:a.category=t,a.page=1,localStorage.setItem("filters",JSON.stringify(a)),V()}function V(){const t=localStorage.getItem("filters");t&&(a=JSON.parse(t)),console.log(a),A(a).then(e=>{const s=Array.isArray(e.results)?e.results:[];if(s.length===0){v.innerHTML=`<div class="empty-search"><h2 class="empty-search-title">Nothing was found for the selected <span class="empty-search-title-word">filters...</span></h2>
        <p class="empty-search-text"> Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>`,g.warning({title:"Warning",message:"No products found... Try again",position:"topRight"});return}v.innerHTML=C(s)}).catch(e=>{console.error("Error fetching products:",e)})}l();M.addEventListener("submit",P);k.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const e=t.target.closest(".popular-item").getAttribute("data-id");try{const s=await y(e);f(s)}catch(s){console.error(s)}});R().then(x).catch(t=>{console.log(t)});k.addEventListener("click",_);U();S.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const e=t.target.closest(".discount-product").getAttribute("data-id");try{const s=await y(e);f(s)}catch(s){console.error(s)}});E.addEventListener("click",async function(t){if(t.target.classList.contains("unused")||t.target.classList.contains("menu-cards"))return;const e=t.target.closest(".product-card").getAttribute("data-id");try{const s=await y(e);f(s)}catch(s){console.error(s)}});A({page:1,limit:9}).then(t=>{const e=Array.isArray(t.results)?t.results:[];v.innerHTML=C(e)}).catch(t=>{console.error("Error fetching products:",t)}).finally(()=>searchForm.reset());Q();
//# sourceMappingURL=commonHelpers2.js.map
