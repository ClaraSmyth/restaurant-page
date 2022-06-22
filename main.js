(()=>{"use strict";const e=document.querySelector("#content"),t=e=>{const t=document.createElement("li");t.classList.add("nav-list-item");const a=n(e,"nav-list-link","#");return t.append(a),t},n=(e,t,n)=>{const a=document.createElement("a");return a.classList.add(t),a.setAttribute("href",n),a.innerText=e,a},a=e=>{const t=document.createElement("label");return t.classList.add(`${e}-label`),t.setAttribute("for",`${e}-label`),t.innerText=e,t},s=(e,t)=>{const n=document.createElement("input");return n.classList.add(`${e}-label`),n.setAttribute("type",t),n.setAttribute("id",`${e}-label`),n.setAttribute("name",`${e}-label`),n.setAttribute("required","true"),n};(()=>{const n=document.createElement("header");n.classList.add("header");const a=document.createElement("h1");a.classList.add("header-title"),a.innerText="Clara's Donuts";const s=document.createElement("nav");s.classList.add("header-nav");const c=document.createElement("ul");c.classList.add("nav-list");const d=t("Home"),o=t("Menu"),r=t("Contact");c.append(d,o,r),s.append(c),n.append(a),n.append(s),e.append(n)})(),(()=>{const t=document.createElement("main");t.classList.add("main"),e.append(t)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const a=document.createElement("p");a.classList.add("footer-para");const s=n("Clara","footer-link","#"),c=n("TheOdinProject","footer-link","#");a.append("Created by ",s," for ",c),t.append(a),e.append(t)})(),(()=>{const e=document.querySelector(".main"),t=(()=>{const e=document.createElement("h2");return e.classList.add("contact-title"),e.innerText="Contact us!",e})(),n=(()=>{const e=document.createElement("div");e.classList.add("contact-details");const t=document.createElement("h2");t.classList.add("contact-details-title"),t.innerText="Address";const n=document.createElement("p");n.classList.add("contact-details-text");const a=document.createElement("p");a.classList.add("contact-details-text");const s=()=>document.createElement("br");return n.append("221b Baker Street",s(),"London",s(),"NW1 6XE"),a.append("02800000000",s(),"clarasdonuts@notarealemail.com"),e.append(t),e.append(n),e.append(a),e})(),c=(()=>{const e=document.createElement("div");e.classList.add("contact-details");const t=document.createElement("h2");t.classList.add("contact-details-title"),t.innerText="Open Hours";const n=document.createElement("p");n.classList.add("contact-details-text");const a=()=>document.createElement("br");return n.append("Mon: 7.00am - 6.30pm",a()),n.append("Tue: 7.00am - 6.30pm",a()),n.append("Wed: 7.00am - 6.30pm",a()),n.append("Thu: 7.00am - 6.30pm",a()),n.append("Fri: 7.00am - 6.30pm",a()),n.append("Sat: 8.00am - 6.30pm"),e.append(t),e.append(n),e})(),d=(()=>{const e=document.createElement("form");e.classList.add("contact-form");const t=document.createElement("fieldset");t.classList.add("form-fieldset");const n=document.createElement("legend");n.classList.add("form-legend"),n.innerText="Send us a message!";const c=a("name"),d=s("name","text"),o=a("email"),r=s("email","email"),l=a("message"),m=s("message","textarea"),i=document.createElement("button");return i.classList.add("form-btn"),i.setAttribute("type","submit"),i.innerText="Submit",t.append(n),t.append(c,d),t.append(o,r),t.append(l,m),e.append(t),e.append(i),e})();e.append(t,n,c,d)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQ3RDNEMsRUFBTzNDLFVBQVVDLElBQUksZUFDckIwQyxFQUFPakMsVUFBWSxxQkFFbkIsTUFBTWtDLEVBQVlqQyxFQUFpQixRQUM3QmtDLEVBQVloQyxFQUFZLE9BQVEsUUFDaENpQyxFQUFhbkMsRUFBaUIsU0FDOUJvQyxFQUFhbEMsRUFBWSxRQUFTLFNBQ2xDbUMsRUFBZXJDLEVBQWlCLFdBQ2hDc0MsRUFBZXBDLEVBQVksVUFBVyxZQUV0Q3FDLEVBQU14RCxTQUFTSyxjQUFjLFVBZW5DLE9BZEFtRCxFQUFJbEQsVUFBVUMsSUFBSSxZQUNsQmlELEVBQUl6QyxhQUFhLE9BQVEsVUFDekJ5QyxFQUFJeEMsVUFBWSxTQUdoQmdDLEVBQVN0QyxPQUFPdUMsR0FDaEJELEVBQVN0QyxPQUFPd0MsRUFBV0MsR0FDM0JILEVBQVN0QyxPQUFPMEMsRUFBWUMsR0FDNUJMLEVBQVN0QyxPQUFPNEMsRUFBY0MsR0FHOUJSLEVBQUtyQyxPQUFPc0MsR0FDWkQsRUFBS3JDLE9BQU84QyxHQUVMVCxHQTJCTVUsR0FDYjNCLEVBQUtwQixPQUFPYSxFQUFPZSxFQUFTTSxFQUFNRyxJQ3ZIdENXLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmNvbnN0IGNyZWF0ZVBhZ2VMYXlvdXQgPSAoKSA9PiB7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlTWFpbigpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgaGVhZGVyIGVsZW1lbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAvLyBDcmVhdGVzIHRoZSBoMSBlbGVtZW50XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdDbGFyYVxcJ3MgRG9udXRzJztcblxuICAgIC8vIENyZWF0ZXMgdGhlIG5hdiBlbGVtZW50XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1uYXYnKTtcblxuICAgIC8vQ3JlYXRlcyB0aGUgdWwgZWxlbWVudCB3aXRoaW4gbmF2XG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtbGlzdCcpO1xuXG4gICAgLy9DcmVhdGVzIHRoZSBsaSBlbGVtZW50cyB3aXRoaW4gdGhlIHVsXG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZUxpc3RJdGVtKCdIb21lJyk7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUxpc3RJdGVtKCdNZW51Jyk7XG4gICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZUxpc3RJdGVtKCdDb250YWN0Jyk7XG5cbiAgICAvLyBBZGRzIHRoZSBuYXYgbGkgaXRlbXMgdG8gdGhlIHVsXG4gICAgbmF2TGlzdC5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG4gICAgLy8gQWRkcyB0aGUgbmF2IHVsIHRvIHRoZSBuYXYgZWxlbWVudCBcbiAgICBuYXYuYXBwZW5kKG5hdkxpc3QpO1xuICAgIC8vIEFkZHMgdGhlIHRpdGxlIGFuZCBuYXYgdG8gdGhlIGhlYWRlclxuICAgIGhlYWRlci5hcHBlbmQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmQobmF2KTtcbiAgICAvLyBBZGRzIHRoZSBoZWFkZXIgdG8gdGhlIHBhZ2VDb250ZW50IGRpdlxuICAgIHBhZ2VDb250ZW50LmFwcGVuZChoZWFkZXIpO1xufVxuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBwYWdlQ29udGVudC5hcHBlbmQobWFpbik7XG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGVzIHRoZSBmb290ZXIgZWxlbWVudFxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIC8vIENyZWF0ZXMgdGhlIGZvb3RlciBwYXJhZ3JhcGggZWxlbWVudFxuICAgIGNvbnN0IGZvb3RlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyUGFyYS5jbGFzc0xpc3QuYWRkKCdmb290ZXItcGFyYScpO1xuXG4gICAgLy9DcmVhdGVzIHRoZSBmb290ZXIgbGluayBlbGVtZW50c1xuICAgIGNvbnN0IGZvb3RlckxpbmtPbmUgPSBjcmVhdGVMaW5rKCdDbGFyYScsICdmb290ZXItbGluaycsICcjJyk7XG4gICAgY29uc3QgZm9vdGVyTGlua1R3byA9IGNyZWF0ZUxpbmsoJ1RoZU9kaW5Qcm9qZWN0JywgJ2Zvb3Rlci1saW5rJywgJyMnKTtcblxuICAgIC8vIEFkZHMgdGhlIGxpbmtzIHRvIHRoZSBwYXJhZ3JhcGggdGV4dFxuICAgIGZvb3RlclBhcmEuYXBwZW5kKCdDcmVhdGVkIGJ5ICcsIGZvb3RlckxpbmtPbmUsICcgZm9yICcsIGZvb3RlckxpbmtUd28pXG4gICAgLy8gQWRkcyB0aGUgcGFyYWdyYXBoIHRvIHRoZSBmb290ZXJcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlclBhcmEpO1xuICAgIC8vIEFkZHMgdGhlIGZvb3RlciB0byB0aGUgcGFnZVxuICAgIHBhZ2VDb250ZW50LmFwcGVuZChmb290ZXIpO1xufVxuXG5jb25zdCBjcmVhdGVMaXN0SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgdWwgbGlzdCBpdGVtXG4gICAgY29uc3QgbmF2TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5hdkxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1saXN0LWl0ZW0nKTtcbiAgICAvLyBDcmVhdGVzIHRoZSBsaW5rXG4gICAgY29uc3QgbmF2TGlzdEl0ZW1MaW5rID0gY3JlYXRlTGluayhuYW1lLCAnbmF2LWxpc3QtbGluaycsICcjJylcbiAgICAvLyBBZGRzIHRoZSBsaW5rIHRvIHRoZSBsaVxuICAgIG5hdkxpc3RJdGVtLmFwcGVuZChuYXZMaXN0SXRlbUxpbmspO1xuICAgIHJldHVybiBuYXZMaXN0SXRlbTtcbn1cblxuY29uc3QgY3JlYXRlTGluayA9IChsaW5rVGV4dCwgY2xhc3NOYW1lLCBocmVmVmFsdWUpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZlZhbHVlKTtcbiAgICBsaW5rLmlubmVyVGV4dCA9IGxpbmtUZXh0O1xuICAgIHJldHVybiBsaW5rO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQYWdlTGF5b3V0IH07IiwiY29uc3QgY3JlYXRlVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQ29udGFjdCB1cyEnO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuY29uc3QgY3JlYXRlRGV0YWlscyA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGVzIHRoZSBjb250YWN0IGRldGFpbHMgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycpO1xuICAgIC8vIENyZWF0ZXMgdGhlIHRpdGxlIGgyIGVsZW1lbnRcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0FkZHJlc3MnO1xuICAgIC8vIENyZWF0ZXMgdGhlIGFkZHJlc3MgcCBlbGVtZW50XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscy10ZXh0Jyk7XG4gICAgLy8gQ3JlYXRlcyBwaG9uZSBhbmQgZW1haWwgcCBlbGVtZW50XG4gICAgY29uc3QgcGhvbmVFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZUVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscy10ZXh0Jyk7XG4gICAgLy8gQ3JlYXRlcyBhIGxpbmUgYnJlYWsgZWxlbWVudFxuICAgIGNvbnN0IGxpbmVCcmVhayA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG5cbiAgICAvLyBBZGRzIHRoZSBjb250ZW50IHRvIHRoZSBwIGVsZW1lbnRzXG4gICAgYWRkcmVzcy5hcHBlbmQoJzIyMWIgQmFrZXIgU3RyZWV0JywgbGluZUJyZWFrKCksICdMb25kb24nLCBsaW5lQnJlYWsoKSwgJ05XMSA2WEUnKTtcbiAgICBwaG9uZUVtYWlsLmFwcGVuZCgnMDI4MDAwMDAwMDAnLCBsaW5lQnJlYWsoKSwgJ2NsYXJhc2RvbnV0c0Bub3RhcmVhbGVtYWlsLmNvbScpO1xuXG4gICAgLy8gQWRkcyB0aGUgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lckRpdi5hcHBlbmQodGl0bGUpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmQoYWRkcmVzcyk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZChwaG9uZUVtYWlsKTtcblxuICAgIHJldHVybiBjb250YWluZXJEaXY7XG59XG5cbmNvbnN0IGNyZWF0ZU9wZW5Ib3VycyA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGVzIHRoZSBjb250YWN0IGRldGFpbHMgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZGV0YWlscycpO1xuICAgIC8vIENyZWF0ZXMgdGhlIHRpdGxlIGgyIGVsZW1lbnRcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ09wZW4gSG91cnMnO1xuICAgIC8vIENyZWF0ZXMgaG91cnMgcCBlbGVtZW50XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzLXRleHQnKTtcbiAgICAvLyBDcmVhdGVzIGEgbGluZSBicmVhayBlbGVtZW50XG4gICAgY29uc3QgbGluZUJyZWFrID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcblxuICAgIC8vIEFkZHMgdGhlIGNvbnRlbnQgdG8gdGhlIHAgZWxlbWVudFxuICAgIGhvdXJzLmFwcGVuZCgnTW9uOiA3LjAwYW0gLSA2LjMwcG0nLCBsaW5lQnJlYWsoKSk7XG4gICAgaG91cnMuYXBwZW5kKCdUdWU6IDcuMDBhbSAtIDYuMzBwbScsIGxpbmVCcmVhaygpKTtcbiAgICBob3Vycy5hcHBlbmQoJ1dlZDogNy4wMGFtIC0gNi4zMHBtJywgbGluZUJyZWFrKCkpO1xuICAgIGhvdXJzLmFwcGVuZCgnVGh1OiA3LjAwYW0gLSA2LjMwcG0nLCBsaW5lQnJlYWsoKSk7XG4gICAgaG91cnMuYXBwZW5kKCdGcmk6IDcuMDBhbSAtIDYuMzBwbScsIGxpbmVCcmVhaygpKTtcbiAgICBob3Vycy5hcHBlbmQoJ1NhdDogOC4wMGFtIC0gNi4zMHBtJyk7XG5cbiAgICAvLyBBZGRzIHRoZSBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyXG4gICAgY29udGFpbmVyRGl2LmFwcGVuZCh0aXRsZSk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZChob3Vycyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyRGl2O1xufVxuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZXMgdGhlIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWZvcm0nKTtcbiAgICAvLyBDcmVhdGVzIHRoZSBmb3JtIGZpZWxkc2V0XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZmllbGRzZXQnKTtcbiAgICAvLyBDcmVhdGVzIHRoZSBmaWVsZHNldCBsZWdlbmRcbiAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgnZm9ybS1sZWdlbmQnKTtcbiAgICBsZWdlbmQuaW5uZXJUZXh0ID0gJ1NlbmQgdXMgYSBtZXNzYWdlISc7XG4gICAgLy8gQ3JlYXRlcyB0aGUgZm9ybSBpbnB1dHMgYW5kIGxhYmVsc1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGNyZWF0ZUlucHV0TGFiZWwoJ25hbWUnKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVJbnB1dCgnbmFtZScsICd0ZXh0Jyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGNyZWF0ZUlucHV0TGFiZWwoJ2VtYWlsJyk7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGNyZWF0ZUlucHV0KCdlbWFpbCcsICdlbWFpbCcpO1xuICAgIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGNyZWF0ZUlucHV0TGFiZWwoJ21lc3NhZ2UnKVxuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGNyZWF0ZUlucHV0KCdtZXNzYWdlJywgJ3RleHRhcmVhJyk7XG4gICAgLy8gQ3JlYXRlcyB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ0bicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuXG4gICAgLy8gQWRkcyB0aGUgbGVnZW5kLCBpbnB1dHMgYW5kIGxhYmVscyB0byB0aGUgZmllbGRzZXRcbiAgICBmaWVsZHNldC5hcHBlbmQobGVnZW5kKTtcbiAgICBmaWVsZHNldC5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQpO1xuICAgIGZpZWxkc2V0LmFwcGVuZChlbWFpbExhYmVsLCBlbWFpbElucHV0KTtcbiAgICBmaWVsZHNldC5hcHBlbmQobWVzc2FnZUxhYmVsLCBtZXNzYWdlSW5wdXQpO1xuXG4gICAgLy8gQWRkcyB0aGUgZWxlbWVudHMgdG8gdGhlIGZvcm0gXG4gICAgZm9ybS5hcHBlbmQoZmllbGRzZXQpO1xuICAgIGZvcm0uYXBwZW5kKGJ0bik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuY29uc3QgY3JlYXRlSW5wdXRMYWJlbCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKGAke25hbWV9LWxhYmVsYCk7XG4gICAgaW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke25hbWV9LWxhYmVsYCk7XG4gICAgaW5wdXRMYWJlbC5pbm5lclRleHQgPSBuYW1lO1xuICAgIHJldHVybiBpbnB1dExhYmVsO1xufVxuXG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKG5hbWUsIHR5cGUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChgJHtuYW1lfS1sYWJlbGApXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke25hbWV9LWxhYmVsYCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7bmFtZX0tbGFiZWxgKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcbiAgICByZXR1cm4gaW5wdXRcbn1cblxuY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCk7XG4gICAgY29uc3QgZGV0YWlscyA9IGNyZWF0ZURldGFpbHMoKTtcbiAgICBjb25zdCBvcGVuID0gY3JlYXRlT3BlbkhvdXJzKCk7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oKTtcbiAgICBtYWluLmFwcGVuZCh0aXRsZSwgZGV0YWlscywgb3BlbiwgZm9ybSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSIsImltcG9ydCB7IGNyZWF0ZVBhZ2VMYXlvdXQgfSBmcm9tICcuL21vZHVsZXMvcGFnZS1sb2FkLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL21vZHVsZXMvaG9tZS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tb2R1bGVzL21lbnUuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcblxuY3JlYXRlUGFnZUxheW91dCgpO1xuXG4vLyBjcmVhdGVIb21lKCk7XG5jcmVhdGVDb250YWN0KCk7Il0sIm5hbWVzIjpbInBhZ2VDb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlTGlzdEl0ZW0iLCJuYW1lIiwibmF2TGlzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmF2TGlzdEl0ZW1MaW5rIiwiY3JlYXRlTGluayIsImFwcGVuZCIsImxpbmtUZXh0IiwiY2xhc3NOYW1lIiwiaHJlZlZhbHVlIiwibGluayIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImNyZWF0ZUlucHV0TGFiZWwiLCJpbnB1dExhYmVsIiwiY3JlYXRlSW5wdXQiLCJ0eXBlIiwiaW5wdXQiLCJoZWFkZXIiLCJ0aXRsZSIsIm5hdiIsIm5hdkxpc3QiLCJob21lIiwibWVudSIsImNvbnRhY3QiLCJjcmVhdGVIZWFkZXIiLCJtYWluIiwiY3JlYXRlTWFpbiIsImZvb3RlciIsImZvb3RlclBhcmEiLCJmb290ZXJMaW5rT25lIiwiZm9vdGVyTGlua1R3byIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZVRpdGxlIiwiZGV0YWlscyIsImNvbnRhaW5lckRpdiIsImFkZHJlc3MiLCJwaG9uZUVtYWlsIiwibGluZUJyZWFrIiwiY3JlYXRlRGV0YWlscyIsIm9wZW4iLCJob3VycyIsImNyZWF0ZU9wZW5Ib3VycyIsImZvcm0iLCJmaWVsZHNldCIsImxlZ2VuZCIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsImVtYWlsTGFiZWwiLCJlbWFpbElucHV0IiwibWVzc2FnZUxhYmVsIiwibWVzc2FnZUlucHV0IiwiYnRuIiwiY3JlYXRlRm9ybSIsImNyZWF0ZUNvbnRhY3QiXSwic291cmNlUm9vdCI6IiJ9