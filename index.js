import{S as g,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h=(t,o=1,a=9)=>{const n={key:"48303854-cd498063b7025b62fb7eab433",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:a};return fetch(`https://pixabay.com/api/?${new URLSearchParams(n).toString()}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})};let c;const b=t=>{const o=document.querySelector(".gallery"),a=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:s,views:d,comments:m,downloads:y})=>`
      <div class="photo-card">
        <a href="${e}">
          <img src="${n}" alt="${r}" />
        </a>
        <div class="info">
          <p><span>Likes</span> ${s}</p>
          <p><span>Views</span> ${d}</p>
          <p><span>Comments</span> ${m}</p>
          <p><span>Downloads</span> ${y}</p>
        </div>
      </div>
    `).join("");o.innerHTML=a,c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})},L=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},P=document.querySelector(".js-search-form"),l=document.querySelector(".js-search-input"),S=document.querySelector(".loader");let u=1;const q=9;let p="";const v=t=>{t.preventDefault();const o=l.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search query."});return}p=o,u=1,L(),f(!0),h(p,u,q).then(a=>{if(a.hits.length===0){i.warning({title:"",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040"});return}b(a.hits)}).catch(a=>{i.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error(a)}).finally(()=>{f(!1),l.value=""})},f=t=>{S.style.display=t?"block":"none"};P.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
