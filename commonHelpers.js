import{i}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const n=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),u=o=>`
    <li class="gallery-card">
    <img class="galler-card" src="${o.webformatURL}" alt="${o.tags}" />
    </li>
    `,d=o=>{o.preventDefault();const s=n.elements.user_query.value;fetch(`https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t);const a=t.hits.map(e=>u(e)).join("");l.innerHTML=a}).catch(t=>{console.log(t),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})};n.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
