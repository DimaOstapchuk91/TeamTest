import{S as i}from"./assets/vendor-c09b8518.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();(()=>{const n={openModalBtn:document.querySelector("[data-mobile-menu-open]"),closeModalBtn:document.querySelector("[data-mobile-menu-close]"),modal:document.querySelector("[data-mobile-data-menu]")};n.openModalBtn.addEventListener("click",e),n.closeModalBtn.addEventListener("click",e);function e(){n.modal.classList.toggle("is-open")}})();var c=!1;function a(){var n=document.querySelectorAll(".catalog-watch-link");if(c){for(var e=n.length-2;e<n.length;e++)n[e].style.display="none";document.querySelector(".catalog-button").textContent="Show more"}else{for(var e=n.length-2;e<n.length;e++)n[e].style.display="block",n[e].style.padding="10px 6px",n[e].style.width="223.175px",n[e].style.height="205.4px";document.querySelector(".catalog-button").textContent="Show less"}c=!c}document.querySelector(".catalog-button").addEventListener("click",a);(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".mob-link"),t=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),n.classList.toggle("is-open");const l=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};r.forEach(o=>o.addEventListener("click",()=>{t()})),e.addEventListener("click",t),s.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new i(".swiper-container",{loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1280:{loop:!1,slidesPerView:3,spaceBetween:20}},autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".pagination",bulletClass:"pagination__button",bulletActiveClass:"pagination__button--active"},navigation:{nextEl:".carousel-button.next",prevEl:".carousel-button.prev"}});
//# sourceMappingURL=commonHelpers.js.map
