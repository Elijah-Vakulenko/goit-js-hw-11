import{S as a}from"./assets/vendor-5af972a3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44023178-1b17cf85b995cf2d6fd44a474",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20}),i=`${o}?${s}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(e.totalHits===0)throw iziToast.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),new Error("No images found");return e}).catch(e=>{console.error("Error fetching images:",e)})}function u(t){return`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}"
          ><img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"
        /></a>
        <ul class="image-description">
          <li class="info-item">
            <h3 class="info-title">Likes</h3>
            <p class="info-value">${t.likes}</p>
          </li>
          <li class="info-item">
            <h3 class="info-title">Views</h3>
            <p class="info-value">${t.views}</p>
          </li>
          <li class="info-item">
            <h3 class="info-title">Comments</h3>
            <p class="info-value">${t.comments}</p>
          </li>
          <li class="info-item">
            <h3 class="info-title">Downloads</h3>
            <p class="info-value">${t.downloads}</p>
          </li>
        </ul>
      </li>`}function f(t){return t.map(u).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector("input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function m(){new a(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}n.form.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.query.value.trim();c(o).then(s=>{const i=f(s.hits);n.gallery.innerHTML=i,m(),n.loader.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
