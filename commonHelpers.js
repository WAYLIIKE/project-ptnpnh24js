import{u as d,s as l}from"./assets/footer-b8c0761b.js";import{a as u}from"./assets/vendor-2dcf4ad5.js";const h=()=>{const i={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};i.openModalBtn.addEventListener("click",t),i.closeModalBtn.addEventListener("click",e),document.addEventListener("keydown",s);function t(){i.modal.classList.toggle("is-hidden"),document.body.style.overflow="hidden"}function e(){i.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}function s(o){o.key==="Escape"&&!i.modal.classList.contains("is-hidden")&&(i.modal.classList.toggle("is-hidden"),document.body.style.overflow="")}};class m{constructor(){this.listInBasket=document.querySelector(".list-in-basket"),this.totalPriceElement=document.querySelector(".total-price"),this.formInput=document.querySelector(".form-input"),this.deleteAllButton=document.querySelector(".delete-button"),this.cartHeader=document.querySelector(".cart-header"),this.form=document.querySelector(".form-container"),this.input=document.querySelector(".form-input"),this.storedProducts=JSON.parse(localStorage.getItem("products"))||{},this.totalAmountOfElements=Object.keys(this.storedProducts).length,this.deleteAllButton.addEventListener("click",this.deleteList.bind(this)),this.listInBasket.addEventListener("click",this.handleDeleteClick.bind(this)),this.listInBasket.addEventListener("click",t=>{const e=t.target.closest(".btn-minus");if(e){const s=e.closest(".card-container");if(s){const o=s.getAttribute("data-id");this.decreaseProductQuantity(o)}}}),this.listInBasket.addEventListener("click",t=>{const e=t.target.closest(".btn-plus");if(e){const s=e.closest(".card-container");if(s){const o=s.getAttribute("data-id");this.increaseProductQuantity(o)}}}),this.form.addEventListener("submit",t=>{const e=this.input.value,s=JSON.stringify(e);localStorage.setItem("formData",s)})}handleDeleteClick(t){const e=t.target.closest(".delete-elem-button");if(e){const s=e.getAttribute("data-id");delete this.storedProducts[s];const o=e.closest(".card-container");o&&o.parentNode&&o.parentNode.removeChild(o),this.updateCartHeader(),this.updateTotalPrice(),localStorage.setItem("products",JSON.stringify(this.storedProducts))}}deleteList(){this.cartHeader.textContent="CART (0)",this.totalPriceElement.textContent="$0,00",this.listInBasket.innerHTML="",localStorage.clear()}async getProductByID(t){const e="https://food-boutique.b.goit.study/api/products/";try{return(await u.get(`${e}${t}`)).data}catch(s){return s.message}}async logProductsApi(){try{const t="640c2dd963a319ea671e385f",e=await this.getProductByID(t);e?(this.addToLocalStorage(t,e),this.listInBasket.innerHTML="",Object.values(this.storedProducts).forEach(s=>{const o=this.listInBasket.querySelector(`[data-id="${s._id}"]`);if(o){const n=o.querySelector(".counter");n&&(n.textContent=s.counter||1)}else{const n=this.createProductCard(s);this.listInBasket.insertAdjacentHTML("beforeend",n);const a=this.listInBasket.querySelector(`[data-id="${s._id}"] .delete-elem-button`);a&&a.addEventListener("click",this.handleDeleteClick.bind(this))}}),this.updateCartHeader(),this.updateTotalPrice()):console.log("Product not found")}catch(t){console.log(t)}}addToLocalStorage(t,e){this.storedProducts[t]?this.storedProducts[t].counter=(this.storedProducts[t].counter||1)+1:(e.counter=1,this.storedProducts[t]=e),localStorage.setItem("products",JSON.stringify(this.storedProducts))}createProductCard(t){return`
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
              <span class="counter">${t.counter||1}</span>
              <button class="btn-plus">
                <svg class="counter-icon">
                  <use href="../img/icons/sprite.svg#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    `}updateCartHeader(){const t=Object.keys(this.storedProducts).length;this.cartHeader.textContent=`CART (${t})`}updateTotalPrice(){const t=Object.values(this.storedProducts).reduce((e,s)=>e+s.price*(s.counter||1),0);this.totalPriceElement.textContent=`$${t.toFixed(2)}`}decreaseProductQuantity(t){this.storedProducts[t]&&(this.storedProducts[t].counter=Math.max(this.storedProducts[t].counter-1,1),this.updateProductQuantity(t),this.updateTotalPrice(),localStorage.setItem("products",JSON.stringify(this.storedProducts)))}increaseProductQuantity(t){this.storedProducts[t]&&(this.storedProducts[t].counter=(this.storedProducts[t].counter||1)+1,this.updateProductQuantity(t),this.updateTotalPrice(),localStorage.setItem("products",JSON.stringify(this.storedProducts)))}updateProductQuantity(t){const e=this.listInBasket.querySelector(`[data-id="${t}"]`);if(e){const s=e.querySelector(".counter");s&&(s.textContent=this.storedProducts[t].counter||1)}}}d();h();const g=document.querySelector(".form-button");g.addEventListener("submit",l);const c=document.querySelector(".emptyBasket_section"),r=document.querySelector(".active-basket-container");function p(){r.style.display="none";let i=localStorage.getItem("basket");i?(c.style.display="none",r.style.display="",i=JSON.parse(i)):c.style.display=""}p();const y=new m;y.logProductsApi();
//# sourceMappingURL=commonHelpers.js.map
