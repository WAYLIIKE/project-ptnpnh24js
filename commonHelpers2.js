import{a,r as s,u as i}from"./assets/header-1b5f6b30.js";const n=document.querySelector(".bob"),o=document.querySelector(".backdrop"),d=document.querySelector(".button-modal-icon");document.addEventListener("keydown",r);n.addEventListener("click",c);d.addEventListener("click",l);function c(){o.style.display="block",document.body.style.overflow="hidden"}function l(){o.style.display="none",document.body.style.overflow=""}function r(e){e.key==="Escape"&&(o.style.display="none",document.body.style.overflow="")}const u=()=>{const e={openModalBtn:document.querySelector(".modal-error-open"),closeModalBtn:document.querySelector(".modal-error-close"),modal:document.querySelector(".modal-error")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-visible")}};document.addEventListener("keydown",r);n.addEventListener("click",c);d.addEventListener("click",l);a.addEventListener("click",function(){addItemToLocalArray(Math.random())});s.addEventListener("click",function(){removeItemFromLocalArray(0)});i();u();
//# sourceMappingURL=commonHelpers2.js.map
