import{S as l}from"./assets/vendor-c09b8518.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-mobile-menu-open]"),closeModalBtn:document.querySelector("[data-mobile-menu-close]"),modal:document.querySelector("[data-mobile-data-menu]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-open")}})();new Swiper(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:20}},pagination:{el:".pagination",bulletClass:"pagination__button",bulletActiveClass:"pagination__button--active"},navigation:{nextEl:".carousel-button.next",prevEl:".carousel-button.prev"}});new l(".swiper",{modules:[Navigation,Pagination]});
//# sourceMappingURL=commonHelpers.js.map
