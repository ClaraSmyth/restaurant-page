(()=>{"use strict";const e=document.querySelector("#content"),t=e=>{const t=document.createElement("li");t.classList.add("nav-list-item");const a=n(e,"nav-list-link","#");return t.append(a),t},n=(e,t,n)=>{const a=document.createElement("a");return a.classList.add(t),a.setAttribute("href",n),a.innerText=e,a};(()=>{const n=document.createElement("header");n.classList.add("header");const a=document.createElement("h1");a.classList.add("header-title"),a.innerText="Restaurant Page";const c=document.createElement("nav");c.classList.add("header-nav");const s=document.createElement("ul");s.classList.add("nav-list");const d=t("Home"),o=t("Menu"),r=t("Contact");s.append(d,o,r),c.append(s),n.append(a),n.append(c),e.append(n)})(),(()=>{const t=document.createElement("main");t.classList.add("main"),e.append(t)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const a=document.createElement("p");a.classList.add("footer-para");const c=n("Clara","footer-link","#"),s=n("TheOdinProject","footer-link","#");a.append("Created by ",c," for ",s),t.append(a),e.append(t)})(),(()=>{const e=document.querySelector(".main"),t=document.createElement("h2");t.classList.add("main-title"),t.innerText="Welcome to restaurant";const n=document.createElement("img");n.classList.add("main-img"),n.setAttribute("src","https://placehold.co/400"),n.setAttribute("alt",""),e.append(t,n)})()})();