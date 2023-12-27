import{u as n,f as u,s as d}from"./assets/footer-0ca8e3a3.js";import{a as h}from"./assets/vendor-2dcf4ad5.js";async function g(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await h.get(`${t}`)).data}catch(s){return s.message}}const i="/project-ptnpnh24js/assets/sprite-fe336fca.svg",p=document.querySelector(".popular-list");async function f(){try{return await g()}catch(t){console.log(t)}}function m(t){const s=t.map(({_id:r,img:a,name:e,category:o,size:c,popularity:l})=>`<li class="popular-item" data-id='${r}'>
    <div class="popular-card">
    <div class="popular-image-container">
    <img class="popular-image" src="${a}" alt="${e}" width="56px" height="56px">
    </div>
    <div class="info-popular-card">
    <h4 class="popular-name">${e}</h4>
    <p class="info-popular-item">Category:
    <b>${o}</b></p>
    <div class="add">
    <p class="info-popular-item">Size: 
    <b>${c}</b></p>
    <p class="info-popular-item">Popularity:
    <b>${l}</b></p>
    </div>
    </div>
    <button class="popularbtn-basket " type="button">

    <svg class = "icon-check is-hidden"  width="12" height="12">
    <use href="${i}#icon-check"></use></svg>

    <svg class="icon-shop" width="12" height="12">
    <use href="${i}#icon-shop"></use></svg>

    </button>
    </div>
    </li>`);p.insertAdjacentHTML("beforeend",s.join(""))}function b(t){const s=t.target.closest(".popularbtn-basket");if(!s)return;const a=t.target.closest(".popular-item").dataset.id,e=k();if(e.includes(a))return;const o=s.querySelector(".icon-check");s.querySelector(".icon-shop").classList.add("is-hidden"),o.classList.remove("is-hidden"),e.push(a),v(e),n()}function k(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function v(t){localStorage.setItem("basket",JSON.stringify(t))}n();u.addEventListener("submit",d);f().then(m).catch(t=>{console.log(t)});p.addEventListener("click",b);
//# sourceMappingURL=commonHelpers2.js.map
