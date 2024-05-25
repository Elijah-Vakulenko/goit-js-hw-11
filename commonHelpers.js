import{S as c,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(r,o){const i="https://pixabay.com/api/",l=new URLSearchParams({key:"44023178-1b17cf85b995cf2d6fd44a474",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:20}),e=`${i}?${l}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>t).catch(t=>{console.error("Error fetching images:",t)})}function h(r){return`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}"
          ><img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"
        /></a>
        <ul class="image-description">
          <li class="info-item">
            <h3 class="info-title">Likes</h3>
            <p class="info-value">${r.likes}</p>
          </li>
          <li class="info-item">
            <h3 class="info-title">Views</h3>
            <p class="info-value">${r.views}</p>
          </li>
          <li class="info-item">
            <h3 class="info-title">Comments</h3>
            <p class="info-value">${r.comments}</p>
          </li>
          <li class="info-item">
            <h3 class="info-title">Downloads</h3>
            <p class="info-value">${r.downloads}</p>
          </li>
        </ul>
      </li>`}function f(r){return r.map(h).join("")}const s={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let a=1;function g(){new c(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}function d(){m.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",messageColor:"white",backgroundColor:"#ff3d00",progressBarColor:"#B51B1B"})}s.form.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value.trim();a=1,s.loader.classList.remove("is-hidden"),u(o).then(i=>{if(i.hits.length===0)d(),s.gallery.innerHTML="";else{const l=f(i.hits);if(s.gallery.innerHTML=l,g(),i.totalHits>20){const e=document.createElement("button");e.textContent="Load More",e.classList.add("load-more"),s.gallery.insertAdjacentElement("afterend",e),e.addEventListener("click",p)}}s.loader.classList.add("is-hidden")})});function p(){a++;const r=s.form.elements.query.value.trim();s.loader.classList.remove("is-hidden"),u(r,a).then(o=>{if(o.hits.length===0)d();else{const i=f(o.hits);s.gallery.insertAdjacentHTML("beforeend",i),new c(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}s.loader.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
