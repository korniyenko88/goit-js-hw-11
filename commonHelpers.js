import{i as n,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const u=t=>`
  <li class="gallery-card">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-card" src="${t.webformatURL}" alt="${t.tags}" />
    <div class="card-info">
      <p class="info-item">
        <b>Likes</b> ${t.likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${t.views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${t.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${t.downloads}
      </p>
    </div>
  </a>
</li>
`,d=t=>fetch(`https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}),l=document.querySelector(".js-search-form"),f=document.querySelector(".js-gallery"),p=t=>{t.preventDefault();const o=l.elements.user_query.value,i=document.querySelector(".loader");i.style.display="inline-block",d(o).then(s=>{if(s.hits.length===0){n.warning({title:"Warning",position:"topRight",message:"No images found. Please try a different search query."});return}const e=s.hits.map(a=>u(a)).join("");f.innerHTML=e,new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(s=>{console.log(s),n.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{i.style.display="none"})};l.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
