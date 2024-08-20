import"./assets/vendor-b20c67ea.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=r=>`
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
`,i=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=r=>{r.preventDefault();const s=i.elements.user_query.value;fetch(`https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{console.log(o);const a=o.hits.map(e=>c(e)).join("");n.innerHTML=a,new SimpleLightbox(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(o=>{console.log(o),iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})};i.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
