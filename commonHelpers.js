import{S as c}from"./assets/vendor-c09b8518.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();(()=>{const o={openModalBtn:document.querySelector("[data-mobile-menu-open]"),closeModalBtn:document.querySelector("[data-mobile-menu-close]"),modal:document.querySelector("[data-mobile-data-menu]")};o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-open")}})();var i=!1;function a(){var o=document.querySelectorAll(".catalog-watch-link");if(i){for(var e=o.length-2;e<o.length;e++)o[e].style.display="none";document.querySelector(".catalog-button").textContent="Show more"}else{for(var e=o.length-2;e<o.length;e++)o[e].style.display="block";document.querySelector(".catalog-button").textContent="Show less"}i=!i}document.querySelector(".catalog-button").addEventListener("click",a);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".mob-link");o.forEach(function(e){e.addEventListener("click",function(){var r=document.querySelector(".mob-menu");r.style.display="none"})})});new c(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{loop:!1,slidesPerView:3,spaceBetween:20}},autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".pagination",bulletClass:"pagination__button",bulletActiveClass:"pagination__button--active"},navigation:{nextEl:".carousel-button.next",prevEl:".carousel-button.prev"}});
//# sourceMappingURL=commonHelpers.js.map
