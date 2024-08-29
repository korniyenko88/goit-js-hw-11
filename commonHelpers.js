import{S as c,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=r=>`
  <li class="gallery-card">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img class="gallery-card" src="${r.webformatURL}" alt="${r.tags}" />
    <div class="card-info">
      <p class="info-item">
        <b>Likes</b> ${r.likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${r.views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${r.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${r.downloads}
      </p>
    </div>
  </a>
</li>
`,d=r=>fetch(`https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),l=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),f=new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),m=r=>{r.preventDefault();const s=l.elements.user_query.value.trim();if(s===""){n.warning({title:"Warning",position:"topRight",message:"Please enter a search query."});return}const i=document.querySelector(".loader");i.style.display="inline-block",d(s).then(o=>{if(o.hits.length===0){n.warning({title:"Warning",position:"topRight",message:"No images found. Please try a different search query."});return}const e=o.hits.map(t=>u(t)).join("");p.innerHTML=e,f.refresh(),l.reset()}).catch(o=>{console.log(o),n.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again.!"})}).finally(()=>{i.style.display="none"})};l.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
