import{u as n,g as r,s as m,f as h,a as p}from"./assets/sprite-1afc6702.js";import{i as c,a as g}from"./assets/vendor-2dcf4ad5.js";const y=()=>{const i={openModalBtn:document.querySelector("[data-order-open]"),closeModalBtn:document.querySelector("[data-order-close]"),modal:document.querySelector("[data-order]")};i.openModalBtn.addEventListener("click",t),i.closeModalBtn.addEventListener("click",e),document.addEventListener("keydown",s);function t(){i.modal.classList.toggle("is-hidden"),document.body.style.overflow="hidden"}function e(){i.modal.classList.add("is-hidden"),document.body.style.overflow=""}function s(o){o.key==="Escape"&&!i.modal.classList.contains("is-hidden")&&(i.modal.classList.toggle("is-hidden"),document.body.style.overflow="")}},f=document.querySelector(".form-container"),b="https://food-boutique.b.goit.study/api/orders";async function v(i){if(console.log("Submit"),i.preventDefault(),i.currentTarget.email.value===""){c.warning({title:"Caution",message:"Please enter email!",position:"topRight"});return}try{(await g.post(b,{email:i.currentTarget.email.value,products:[{productId:"640c2dd963a319ea671e383b",amount:1}]})).status===201&&(y(),console.log("Submit in"))}catch(t){c.warning({title:"Caution",message:t.message,position:"topRight"})}}class k{constructor(){this.listInBasket=document.querySelector(".list-in-basket"),this.totalPriceElement=document.querySelector(".total-price"),this.deleteAllButton=document.querySelector(".delete-button"),this.cartHeader=document.querySelector(".cart-header"),this.storedProducts=JSON.parse(localStorage.getItem("basket"))||[],this.totalAmountOfElements=this.storedProducts.length,this.deleteAllButton.addEventListener("click",this.deleteList.bind(this)),this.listInBasket.addEventListener("click",this.handleDeleteClick.bind(this)),this.listInBasket.addEventListener("click",async t=>{const e=t.target.closest(".btn-minus");if(e){const s=e.closest(".card-container");if(s){const o=s.getAttribute("data-id");await this.decreaseProductQuantity(o)}}}),this.listInBasket.addEventListener("click",async t=>{const e=t.target.closest(".btn-plus");if(e){const s=e.closest(".card-container");if(s){const o=s.getAttribute("data-id");await this.increaseProductQuantity(o)}}})}handleDeleteClick(t){const e=t.target.closest(".delete-elem-button");if(e){const s=e.closest(".card-container").getAttribute("data-id");if(this.storedProducts.length===1){this.deleteList(),window.location.href="/index.html";return}const o=this.storedProducts.findIndex(u=>u===s);o!==-1&&(this.storedProducts.splice(o,1),localStorage.setItem("basket",JSON.stringify(this.storedProducts)),this.totalAmountOfElements=this.storedProducts.length);const a=e.closest(".card-container");a&&a.parentNode&&a.parentNode.removeChild(a),this.updateCartHeader(),this.updateTotalPrice(),n()}}deleteList(){this.cartHeader.textContent="CART (0)",this.totalPriceElement.textContent="$0,00",this.listInBasket.innerHTML="",localStorage.clear(),n(),window.location.href="/index.html"}async logProductsApi(){try{for(const t of this.storedProducts){const e=await r(t);if(e){e.quantity=1;const s=this.listInBasket.querySelector(`[data-id="${e._id}"]`);if(s){const o=s.querySelector(".counter");o&&(o.textContent=e.quantity)}else{const o=this.createProductCard(e);this.listInBasket.insertAdjacentHTML("beforeend",o)}}else console.log(`Product with ID ${t} not found`)}this.updateCartHeader(),await this.updateTotalPrice()}catch(t){console.log(t)}}createProductCard(t){return`
      <li class="card-container" data-id="${t._id}">
        <div class="image-container">
          <img class="card-image" src="${t.img}" alt="${t.name}" />
        </div>
        <div class="card-description">
          <div class="description-container">
            <div class="list-title-container">
              <h1 class="card-title">${t.name}</h1>
              <button class="delete-elem-button" data-id="${t._id}">
                <svg class="delete-elem-icon">
                  <use href="${m}#icon-close"></use>
                </svg>
              </button>
            </div>
            <ul class="category-container">
              <li>
                <p class="details-text">
                  <span class="detail">Category:</span><span>${t.category}</span>
                </p>
              </li>
              <li>
                <p class="details-text">
                  <span class="detail">Size:</span>${t.size}
                </p>
              </li>
            </ul>
          </div>
          <div class="price-container">
            <span class="card-price">$${t.price}</span>
          </div>
        </div>
      </li>
    `}updateCartHeader(){this.cartHeader.textContent=`CART (${this.totalAmountOfElements})`}async updateTotalPrice(){let t=0;for(const e of this.storedProducts){const s=await r(e);s&&(t+=s.price*(s.quantity||1))}this.totalPriceElement.textContent=`$${t.toFixed(2)}`}}n();f.addEventListener("submit",v);h.addEventListener("submit",p);const d=document.querySelector(".emptyBasket_section"),l=document.querySelector(".active-basket-container");function S(){l.style.display="none";let i=localStorage.getItem("basket");i?(d.style.display="none",l.style.display="",i=JSON.parse(i)):d.style.display=""}S();const P=new k;P.logProductsApi();
//# sourceMappingURL=commonHelpers.js.map
