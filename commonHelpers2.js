import{a as p,b as u,r as d,c as h,u as m,f as g,s as f}from"./assets/footer-36c97624.js";import{a as b}from"./assets/vendor-2dcf4ad5.js";async function v(){const t="https://food-boutique.b.goit.study/api/products/popular";try{return(await b.get(`${t}`)).data}catch(s){return s.message}}const i="/project-ptnpnh24js/assets/sprite-fe336fca.svg",n=document.querySelector(".popular-list");async function k(){try{return await v()}catch(t){console.log(t)}}function y(t){const s=t.map(({_id:r,img:a,name:e,category:o,size:c,popularity:l})=>`<li class="popular-item" data-id='${r}'>
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
    </li>`);n.insertAdjacentHTML("beforeend",s.join(""))}function L(t){const s=t.target.closest(".popularbtn-basket");if(!s)return;const a=t.target.closest(".popular-item").dataset.id,e=S();if(e.includes(a))return;const o=s.querySelector(".icon-check");s.querySelector(".icon-shop").classList.add("is-hidden"),o.classList.remove("is-hidden"),e.push(a),$(e)}function S(){const t=localStorage.getItem("basket");return t?JSON.parse(t):[]}function $(t){localStorage.setItem("basket",JSON.stringify(t))}p.addEventListener("click",function(){u(Math.random())});d.addEventListener("click",function(){h(0)});m();g.addEventListener("submit",f);k().then(y).catch(t=>{console.log(t)});n.addEventListener("click",L);
//# sourceMappingURL=commonHelpers2.js.map
