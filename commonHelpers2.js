import{a as i,r,u as a}from"./assets/header-2d88f34b.js";const n=document.querySelector(".bob"),o=document.querySelector(".backdrop"),c=document.querySelector(".button-modal-icon");document.addEventListener("keydown",s);n.addEventListener("click",d);c.addEventListener("click",l);function d(){o.classList.toggle("is-visible"),document.body.style.overflow="hidden"}function l(){o.classList.toggle("is-visible"),document.body.style.overflow=""}function s(e){e.key==="Escape"&&o.classList.contains("is-visible")&&(o.classList.toggle("is-visible"),document.body.style.overflow="")}const u=()=>{const e={openModalBtn:document.querySelector(".modal-error-open"),closeModalBtn:document.querySelector(".modal-error-close"),modal:document.querySelector(".modal-error")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-visible")}};document.addEventListener("keydown",s);n.addEventListener("click",d);c.addEventListener("click",l);i.addEventListener("click",function(){addItemToLocalArray(Math.random())});r.addEventListener("click",function(){removeItemFromLocalArray(0)});a();u();
//# sourceMappingURL=commonHelpers2.js.map
