import{u as a,g as c,s as u}from"./assets/fetchAPI-c38217c0.js";import"./assets/vendor-2dcf4ad5.js";const m=()=>{const i={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};i.openModalBtn.addEventListener("click",t),i.closeModalBtn.addEventListener("click",e),document.addEventListener("keydown",s);function t(){i.modal.classList.toggle("is-hidden"),document.body.style.overflow="hidden"}function e(){i.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}function s(o){o.key==="Escape"&&!i.modal.classList.contains("is-hidden")&&(i.modal.classList.toggle("is-hidden"),document.body.style.overflow="")}};class h{constructor(){this.listInBasket=document.querySelector(".list-in-basket"),this.totalPriceElement=document.querySelector(".total-price"),this.formInput=document.querySelector(".form-input"),this.deleteAllButton=document.querySelector(".delete-button"),this.cartHeader=document.querySelector(".cart-header"),this.form=document.querySelector(".form-container"),this.input=document.querySelector(".form-input"),this.storedProducts=JSON.parse(localStorage.getItem("basket"))||[],this.totalAmountOfElements=this.storedProducts.length,this.deleteAllButton.addEventListener("click",this.deleteList.bind(this)),this.listInBasket.addEventListener("click",this.handleDeleteClick.bind(this)),this.listInBasket.addEventListener("click",async t=>{const e=t.target.closest(".btn-minus");if(e){const s=e.closest(".card-container");if(s){const o=s.getAttribute("data-id");await this.decreaseProductQuantity(o)}}}),this.listInBasket.addEventListener("click",async t=>{const e=t.target.closest(".btn-plus");if(e){const s=e.closest(".card-container");if(s){const o=s.getAttribute("data-id");await this.increaseProductQuantity(o)}}}),this.form.addEventListener("submit",t=>{const e=this.input.value,s=JSON.stringify(e);localStorage.setItem("formData",s)})}handleDeleteClick(t){const e=t.target.closest(".delete-elem-button");if(e){const s=e.closest(".card-container").getAttribute("data-id"),o=this.storedProducts.findIndex(d=>d===s);o!==-1&&(this.storedProducts.splice(o,1),localStorage.setItem("basket",JSON.stringify(this.storedProducts)),this.totalAmountOfElements=this.storedProducts.length);const n=e.closest(".card-container");n&&n.parentNode&&n.parentNode.removeChild(n),this.updateCartHeader(),this.updateTotalPrice(),a()}}deleteList(){this.cartHeader.textContent="CART (0)",this.totalPriceElement.textContent="$0,00",this.listInBasket.innerHTML="",localStorage.clear(),a()}async logProductsApi(){try{for(const t of this.storedProducts){const e=await c(t);if(e){e.quantity=1;const s=this.listInBasket.querySelector(`[data-id="${e._id}"]`);if(s){const o=s.querySelector(".counter");o&&(o.textContent=e.quantity)}else{const o=this.createProductCard(e);this.listInBasket.insertAdjacentHTML("beforeend",o)}}else console.log(`Product with ID ${t} not found`)}this.updateCartHeader(),await this.updateTotalPrice()}catch(t){console.log(t)}}createProductCard(t){return`
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
                  <use href="../img/icons/sprite.svg#icon-close"></use>
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
            <div class="counter-container">
              <button class="btn-minus">
                <svg class="counter-icon">
                  <use href="../img/icons/sprite.svg#icon-down-categories"></use>
                </svg>
              </button>
              <span class="counter">${t.quantity||1}</span>
              <button class="btn-plus">
                <svg class="counter-icon">
                  <use href="../img/icons/sprite.svg#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    `}updateCartHeader(){this.cartHeader.textContent=`CART (${this.totalAmountOfElements})`}async updateTotalPrice(){let t=0;for(const e of this.storedProducts){const s=await c(e);s&&(t+=s.price*(s.quantity||1))}this.totalPriceElement.textContent=`$${t.toFixed(2)}`}}a();m();const p=document.querySelector(".form-button");p.addEventListener("submit",u);const r=document.querySelector(".emptyBasket_section"),l=document.querySelector(".active-basket-container");function g(){l.style.display="none";let i=localStorage.getItem("basket");i?(r.style.display="none",l.style.display="",i=JSON.parse(i)):r.style.display=""}g();const y=new h;y.logProductsApi();
//# sourceMappingURL=commonHelpers.js.map
