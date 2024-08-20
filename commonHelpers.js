import{S as n,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=o=>`
  <li class="gallery-card">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img class="gallery-card" src="${o.webformatURL}" alt="${o.tags}" />
    <div class="card-info">
      <p class="info-item">
        <b>Likes</b> ${o.likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${o.views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${o.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${o.downloads}
      </p>
    </div>
  </a>
</li>
`,i=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),p=o=>{o.preventDefault();const s=i.elements.user_query.value,a=document.querySelector(".loader");a.style.display="inline-block",fetch(`https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)throw new Error("No images found.");console.log(t);const e=t.hits.map(l=>u(l)).join("");d.innerHTML=e,new n(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),i.reset()}).catch(t=>{console.log(t),c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{a.style.display="none"})};i.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
