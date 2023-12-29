import{u as p,f as M,s as P}from"./assets/footer-2a59a137.js";import{a as g,i as d}from"./assets/vendor-2dcf4ad5.js";async function A(t){const e="https://food-boutique.b.goit.study/api/products",s=new URLSearchParams(t);try{return(await g.get(`${e}?${s}`)).data}catch(o){return o.message}}async function T(){const t="https://food-boutique.b.goit.study/api/products/categories";try{return(await g.get(`${t}`)).data}catch(e){return e.message}}async function j(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await g.get(`${t}`)).data}catch(e){return e.message}}async function D(){const t="https://food-boutique.b.goit.study/api/products/discount";try{return(await g.get(`${t}`)).data}catch(e){return e.message}}async function h(t){const e="https://food-boutique.b.goit.study/api/products/";try{return(await g.get(`${e}${t}`)).data}catch(s){return s.message}}const a="/project-ptnpnh24js/assets/sprite-fe336fca.svg",v=document.querySelector(".popular-list");async function R(){try{return await j()}catch(t){console.log(t)}}function x(t){const e=t.map(({_id:s,img:o,name:c,size:r,category:n,popularity:u})=>{const l=n.split("_").join(" ");return`<li class="popular-item" data-id='${s}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${o}" alt="${c}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${c}</h4>
    <p class="info-popular-item">Category:
    <b>${l}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${r}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${u}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket unused" type="button">

    <svg class = "icon-check is-hidden unused"  width="12" height="12">
    <use class="unused" href="${a}#icon-check"></use></svg>

    <svg class="icon-shop unused" width="12" height="12">
    <use class="unused" href="${a}#icon-shop"></use></svg>

    </button>
    </div>
    </li>`});v.insertAdjacentHTML("beforeend",e.join(""))}function _(t){const e=t.target.closest(".popularbtn-basket");if(!e)return;const o=t.target.closest(".popular-item").dataset.id,c=k();if(c.includes(o)){d.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const r=e.querySelector(".icon-check");e.querySelector(".icon-shop").classList.add("is-hidden"),r.classList.remove("is-hidden"),c.push(o),$(c),p()}function k(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function $(t){localStorage.setItem("basket",JSON.stringify(t))}const H=document.querySelectorAll(".product-card");function m(t){const{_id:e,img:s,name:o,category:c,size:r,popularity:n,desc:u,price:l}=t,I=c.split("_").join(" "),q=`
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
      <p class="info-modal-item">Popularity: <b>${n}</b></p>
      <p class="modal-desc">${u}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">$${l}</p>
      <button type="button" class="modal-btn">
        Add to
        <svg  width="18" height="18">
          <use href="${a}#icon-shop"></use>
        </svg>
      </button>
      </div>
      <button class="button-icon-close" type="button">
        <svg class="modal-close">
          <use href="${a}#icon-close"></use>
        </svg>
    </div>
    </div>
  `,w=document.getElementById("modal"),B=w.querySelector(".modal-content");B.innerHTML=q,w.style.display="block"}H.forEach(t=>{t.addEventListener("click",async function(){const e=t.getAttribute("data-id");try{const s=await h(e);m(s)}catch(s){console.error(s)}})});const y=document.getElementById("modal");y.addEventListener("click",function(t){t.target.classList.contains("modal-close")&&(y.style.display="none")});y.addEventListener("click",N);function N(t){if(!t.target.closest(".modal-btn"))return;const s=t.target.closest(".modal-box").getAttribute("data-id"),o=k();if(o.includes(s)){d.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}o.push(s),$(o),p()}const L=document.querySelector(".discount-list");async function U(){try{const t=await D(),e=J(t,2);L.insertAdjacentHTML("beforeend",O(e))}catch(t){console.log(t.message)}}function J(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function O(t){return t.map(({name:e,img:s,price:o,_id:c})=>`
    <li data-id="${c}" class="discount-product">
    <div class="discount-image">
        <svg class="discount-list-item" width="60" heigh="60">
        <use href="${a}#icon-discount"></use>
        </svg>
        <img src="${s}" alt="name" class="discount-image-cart"/>
    </div>
    <div class="discount-info">
        <p class="discount-title-name">${e}</p>
        <div class="discount-info-cart">
            <p class="discount-price">$${o}</p>
            <button class="discount-btn unused" type="button">

            <svg class = "icon-check is-hidden unused"  width="12" height="12">
            <use class="unused" href="${a}#icon-check"></use></svg>

            <svg class="icon-shop unused" width="12" height="12">
            <use class="unused" href="${a}#icon-shop"></use></svg>

        </button>
        </div>
    </div>
    </li>`).join("")}L.addEventListener("click",W);function W(t){if(t.target===t.currentTarget)return;const s=t.target.closest(".discount-product").dataset.id,o=t.target.closest(".discount-btn");if(!o)return;const c=z();if(c.includes(s)){d.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const r=o.querySelector(".icon-check");o.querySelector(".icon-shop").classList.add("is-hidden"),r.classList.remove("is-hidden"),c.push(s),F(c),p()}function z(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function F(t){localStorage.setItem("basket",JSON.stringify(t))}async function Q(){const t=document.getElementById("categoryQuery");t.innerHTML="";try{const s='<option value="" selected hidden>Categories</option>'+(await T()).map(o=>`<option value="${o}">${o.replace(/_/g," ")}</option>`).join("")+'<option value="">Show all</option>';t.insertAdjacentHTML("beforeend",s)}catch(e){console.error("Error fetching categories:",e)}}const E=document.querySelector(".menu-cards");function C(t){return t.map(({_id:e,img:s,name:o,category:c,size:r,popularity:n,price:u})=>{const l=c.split("_").join(" ");return`
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
      <b>${l}</b>
      </p>
      <p class="product-description">Size:
      <b>${r}</b>
      </p> 
      <p class="product-description">Popularity: 
      <b>${n}</b>
      </p>
     </div>
      <div class="price-info">
      <p class="product-price">&#36;${u}
      </p>
      
      <button class="product-add-btn unused" type="button">

      <svg class="cart-icon-check is-hidden unused">
      <use class="unused" href="${a}#icon-check" width="18" hight="18"></use>  
      </svg>

      <svg class="cart-icon unused">
      <use class="unused" href="${a}#icon-shop" width="18" hight="18"></use>
      </svg>

      </button>
      </div>
      </div>
    </li>
        `}).join("")}E.addEventListener("click",Y);function Y(t){const e=t.target.closest(".product-add-btn");if(!e)return;const o=t.target.closest(".product-card").dataset.id,c=k();if(c.includes(o)){d.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const r=e.querySelector(".cart-icon-check");e.querySelector(".cart-icon").classList.add("is-hidden"),r.classList.remove("is-hidden"),c.push(o),$(c),p()}const G=document.querySelector(".search-form"),f=document.querySelector(".menu-cards"),S=document.getElementById("categoryQuery");S.addEventListener("submit",b);G.addEventListener("submit",K);let i={keyword:null,category:null,page:1,limit:9};localStorage.removeItem("filters");function K(t){t.preventDefault();const e=t.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(i.keyword=e||null,e===""&&S.value!=="")return b();if(e===""){d.warning({title:"Warning",message:"Enter some input to search product",position:"topRight"});return}b()}function b(){const t=S.value;t==="all"?i.category=null:i.category=t,i.page=1,localStorage.setItem("filters",JSON.stringify(i)),V()}function V(){const t=localStorage.getItem("filters");t&&(i=JSON.parse(t)),console.log(i),A(i).then(e=>{const s=Array.isArray(e.results)?e.results:[];if(s.length===0){f.innerHTML=`<div class="empty-search"><h2 class="empty-search-title">Nothing was found for the selected <span class="empty-search-title-word">filters...</span></h2>
        <p class="empty-search-text"> Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>`,d.warning({title:"Warning",message:"No products found... Try again",position:"topRight"});return}f.innerHTML=C(s)}).catch(e=>{console.error("Error fetching products:",e)})}p();M.addEventListener("submit",P);v.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const e=t.target.closest(".popular-item").getAttribute("data-id");try{const s=await h(e);m(s)}catch(s){console.error(s)}});R().then(x).catch(t=>{console.log(t)});v.addEventListener("click",_);U();L.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const e=t.target.closest(".discount-product").getAttribute("data-id");try{const s=await h(e);m(s)}catch(s){console.error(s)}});E.addEventListener("click",async function(t){if(t.target.classList.contains("unused")||t.target.classList.contains("menu-cards"))return;const e=t.target.closest(".product-card").getAttribute("data-id");try{const s=await h(e);m(s)}catch(s){console.error(s)}});A({page:1,limit:9}).then(t=>{const e=Array.isArray(t.results)?t.results:[];f.innerHTML=C(e)}).catch(t=>{console.error("Error fetching products:",t)}).finally(()=>searchForm.reset());Q();
//# sourceMappingURL=commonHelpers2.js.map
