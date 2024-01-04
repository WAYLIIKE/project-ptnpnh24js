import{b as B,s as n,u,g as m,c as T,d as q,e as w,f as D,a as P}from"./assets/sprite-6cae3e1b.js";import{i as p}from"./assets/vendor-2dcf4ad5.js";const v=document.querySelector(".popular-list");async function j(){try{return await B()}catch(t){console.log(t)}}function x(t){const e=t.map(({_id:s,img:o,name:c,size:a,category:i,popularity:d})=>{const l=i.split("_").join(" ");return`<li class="popular-item" data-id='${s}'>
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
    <b>${a}</b></p>
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
    </li>`});v.insertAdjacentHTML("beforeend",e.join(""))}function H(t){const e=t.target.closest(".popularbtn-basket");if(!e)return;const o=t.target.closest(".popular-item").dataset.id,c=k();if(c.includes(o)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const a=e.querySelector(".icon-check");e.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),c.push(o),$(c),u()}function k(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function $(t){localStorage.setItem("basket",JSON.stringify(t))}const N=document.querySelectorAll(".product-card");function y(t){const{_id:e,img:s,name:o,category:c,size:a,popularity:i,desc:d,price:l}=t,E=c.split("_").join(" "),I=`
    <div class="modal-box"  data-id='${e}'>
    <div class="card-info">
    <div class="img-box">
      <img class="card-image" src="${s}" alt="${o}" width="160px" height="160px">
      </div>
      <div class="modal-tablet ">
      <h4 class="card-modal-name">${o}</h4>
      <div class="card-modal-data">
      <p class="info-modal-item">Category: <b>${E}</b></p>
      <p class="info-modal-item">Size: <b>${a}</b></p>
       </div>
      <p class="info-modal-item">Popularity: <b>${i}</b></p>
      <p class="modal-desc">${d}</p>
       </div>
       </div>
       <div class="modal-price-block" >
      <p class="modal-price">$${l}</p>
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
  `,S=document.getElementById("modal"),M=S.querySelector(".modal-content");M.innerHTML=I,S.style.display="block"}N.forEach(t=>{t.addEventListener("click",async function(){const e=t.getAttribute("data-id");try{const s=await m(e);y(s)}catch(s){console.error(s)}})});const f=document.getElementById("modal");f.addEventListener("click",function(t){t.target.classList.contains("modal-close")&&(f.style.display="none")});f.addEventListener("click",J);function J(t){if(!t.target.closest(".modal-btn"))return;const s=t.target.closest(".modal-box").getAttribute("data-id"),o=k();if(o.includes(s)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}o.push(s),$(o),u()}const L=document.querySelector(".discount-list");async function O(){try{const t=await T(),e=R(t,2);L.insertAdjacentHTML("beforeend",W(e))}catch(t){console.log(t.message)}}function R(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function W(t){return t.map(({name:e,img:s,price:o,_id:c})=>`
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
    </li>`).join("")}L.addEventListener("click",z);function z(t){if(t.target===t.currentTarget)return;const s=t.target.closest(".discount-product").dataset.id,o=t.target.closest(".discount-btn");if(!o)return;const c=F();if(c.includes(s)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const a=o.querySelector(".icon-check");o.querySelector(".icon-shop").classList.add("is-hidden"),a.classList.remove("is-hidden"),c.push(s),_(c),u()}function F(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function _(t){localStorage.setItem("basket",JSON.stringify(t))}async function Q(){const t=document.getElementById("categoryQuery");t.innerHTML="";try{const s='<option value="" selected hidden>Categories</option>'+(await q()).map(o=>`<option value="${o}">${o.replace(/_/g," ")}</option>`).join("")+'<option value="">Show all</option>';t.insertAdjacentHTML("beforeend",s)}catch(e){console.error("Error fetching categories:",e)}}const A=document.querySelector(".menu-cards");function C(t){return t.map(({_id:e,img:s,name:o,category:c,size:a,popularity:i,price:d})=>{const l=c.split("_").join(" ");return`
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
      <b>${a}</b>
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
        `}).join("")}A.addEventListener("click",Y);function Y(t){const e=t.target.closest(".product-add-btn");if(!e)return;const o=t.target.closest(".product-card").dataset.id,c=k();if(c.includes(o)){p.warning({title:"Warning",message:"You`ve already add this product to basket!",position:"topRight"});return}const a=e.querySelector(".cart-icon-check");e.querySelector(".cart-icon").classList.add("is-hidden"),a.classList.remove("is-hidden"),c.push(o),$(c),u()}const U=document.querySelector(".search-form"),b=document.querySelector(".menu-cards"),h=document.getElementById("categoryQuery");h.addEventListener("change",g);U.addEventListener("submit",G);let r={keyword:"",category:null,page:1,limit:9};localStorage.removeItem("filters");function G(t){t.preventDefault();const e=h.value;console.log(e);let s=t.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(r.keyword=s||"",s===""&&h.value!=="")return g();if(s==="")return r={keyword:"",limit:9},g();g()}function g(){const t=h.value;t==="all"?r.category=null:r.category=t,r.page=1,localStorage.setItem("filters",JSON.stringify(r)),K()}function K(){const t=localStorage.getItem("filters");t&&(r=JSON.parse(t)),console.log(r),w(r).then(e=>{const s=Array.isArray(e.results)?e.results:[];if(s.length===0){b.innerHTML=`<div class="empty-search"><h2 class="empty-search-title">Nothing was found for the selected <span class="empty-search-title-word">filters...</span></h2>
        <p class="empty-search-text"> Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div>`,p.warning({title:"Warning",message:"No products found... Try again",position:"topRight"});return}b.innerHTML=C(s)}).catch(e=>{console.error("Error fetching products:",e)})}u();D.addEventListener("submit",P);v.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const e=t.target.closest(".popular-item").getAttribute("data-id");try{const s=await m(e);y(s)}catch(s){console.error(s)}});j().then(x).catch(t=>{console.log(t)});v.addEventListener("click",H);O();L.addEventListener("click",async function(t){if(t.target.classList.contains("unused"))return;const e=t.target.closest(".discount-product").getAttribute("data-id");try{const s=await m(e);y(s)}catch(s){console.error(s)}});A.addEventListener("click",async function(t){if(t.target.classList.contains("unused")||t.target.classList.contains("menu-cards"))return;const e=t.target.closest(".product-card").getAttribute("data-id");try{const s=await m(e);y(s)}catch(s){console.error(s)}});w({page:1,limit:9}).then(t=>{const e=Array.isArray(t.results)?t.results:[];b.innerHTML=C(e)}).catch(t=>{console.error("Error fetching products:",t)}).finally(()=>searchForm.reset());Q();
//# sourceMappingURL=commonHelpers2.js.map
