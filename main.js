(()=>{"use strict";const e=document.querySelector("#content"),t=e=>{const t=document.createElement("li");t.classList.add("nav-list-item");const a=n(e,"nav-list-link","#");return t.append(a),t},n=(e,t,n)=>{const a=document.createElement("a");return a.classList.add(t),a.setAttribute("href",n),a.innerText=e,a};(()=>{const n=document.createElement("header");n.classList.add("header");const a=document.createElement("h1");a.classList.add("header-title"),a.innerText="Clara's Donuts";const s=document.createElement("nav");s.classList.add("header-nav");const c=document.createElement("ul");c.classList.add("nav-list");const d=t("Home"),o=t("Menu"),r=t("Contact");c.append(d,o,r),s.append(c),n.append(a),n.append(s),e.append(n)})(),(()=>{const t=document.createElement("main");t.classList.add("main"),e.append(t)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const a=document.createElement("p");a.classList.add("footer-para");const s=n("Clara","footer-link","#"),c=n("TheOdinProject","footer-link","#");a.append("Created by ",s," for ",c),t.append(a),e.append(t)})(),(()=>{const e=document.querySelector(".main"),t=(()=>{const e=document.createElement("h2");return e.classList.add("menu-title"),e.innerText="Menu",e})(),n=((e,t,n,a)=>{const s=document.createElement("div");s.classList.add("menu-item-container");const c=document.createElement("h3");c.classList.add("menu-item-title");const d=document.createElement("p");d.classList.add("menu-item-text");const o=document.createElement("p");o.classList.add("menu-item-price");const r=(e=>{const t=document.createElement("img");return t.classList.add("menu-img"),t.setAttribute("src",e),t.setAttribute("alt",""),t})("https://placehold.co/400");return c.innerText="Test",d.innerText="This is a test",o.innerText="$2",s.append(r),s.append(c),s.append(d),s.append(o),s})();e.append(t,n)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9RLEdBQ2pCb0IsRUFBVTVCLE9BQU82QixHQUNqQkQsRUFBVTVCLE9BQU84QixHQUVWRixHQWdCU00sR0FDaEJuQixFQUFLZixPQUFPUSxFQUFPZSxJQzFDdkJZLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGVzIHRoZSBoZWFkZXIgZWxlbWVudFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIC8vIENyZWF0ZXMgdGhlIGgxIGVsZW1lbnRcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0NsYXJhXFwncyBEb251dHMnO1xuXG4gICAgLy8gQ3JlYXRlcyB0aGUgbmF2IGVsZW1lbnRcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hdicpO1xuXG4gICAgLy9DcmVhdGVzIHRoZSB1bCBlbGVtZW50IHdpdGhpbiBuYXZcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdi1saXN0Jyk7XG5cbiAgICAvL0NyZWF0ZXMgdGhlIGxpIGVsZW1lbnRzIHdpdGhpbiB0aGUgdWxcbiAgICBjb25zdCBob21lID0gY3JlYXRlTGlzdEl0ZW0oJ0hvbWUnKTtcbiAgICBjb25zdCBtZW51ID0gY3JlYXRlTGlzdEl0ZW0oJ01lbnUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlTGlzdEl0ZW0oJ0NvbnRhY3QnKTtcblxuICAgIC8vIEFkZHMgdGhlIG5hdiBsaSBpdGVtcyB0byB0aGUgdWxcbiAgICBuYXZMaXN0LmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbiAgICAvLyBBZGRzIHRoZSBuYXYgdWwgdG8gdGhlIG5hdiBlbGVtZW50IFxuICAgIG5hdi5hcHBlbmQobmF2TGlzdCk7XG4gICAgLy8gQWRkcyB0aGUgdGl0bGUgYW5kIG5hdiB0byB0aGUgaGVhZGVyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZChuYXYpO1xuICAgIC8vIEFkZHMgdGhlIGhlYWRlciB0byB0aGUgcGFnZUNvbnRlbnQgZGl2XG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG59XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIHBhZ2VDb250ZW50LmFwcGVuZChtYWluKTtcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZXMgdGhlIGZvb3RlciBlbGVtZW50XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgLy8gQ3JlYXRlcyB0aGUgZm9vdGVyIHBhcmFncmFwaCBlbGVtZW50XG4gICAgY29uc3QgZm9vdGVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJQYXJhLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1wYXJhJyk7XG5cbiAgICAvL0NyZWF0ZXMgdGhlIGZvb3RlciBsaW5rIGVsZW1lbnRzXG4gICAgY29uc3QgZm9vdGVyTGlua09uZSA9IGNyZWF0ZUxpbmsoJ0NsYXJhJywgJ2Zvb3Rlci1saW5rJywgJyMnKTtcbiAgICBjb25zdCBmb290ZXJMaW5rVHdvID0gY3JlYXRlTGluaygnVGhlT2RpblByb2plY3QnLCAnZm9vdGVyLWxpbmsnLCAnIycpO1xuXG4gICAgLy8gQWRkcyB0aGUgbGlua3MgdG8gdGhlIHBhcmFncmFwaCB0ZXh0XG4gICAgZm9vdGVyUGFyYS5hcHBlbmQoJ0NyZWF0ZWQgYnkgJywgZm9vdGVyTGlua09uZSwgJyBmb3IgJywgZm9vdGVyTGlua1R3bylcbiAgICAvLyBBZGRzIHRoZSBwYXJhZ3JhcGggdG8gdGhlIGZvb3RlclxuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyUGFyYSk7XG4gICAgLy8gQWRkcyB0aGUgZm9vdGVyIHRvIHRoZSBwYWdlXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG59XG5cbmNvbnN0IGNyZWF0ZUxpc3RJdGVtID0gKG5hbWUpID0+IHtcbiAgICAvLyBDcmVhdGVzIHRoZSB1bCBsaXN0IGl0ZW1cbiAgICBjb25zdCBuYXZMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmF2TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QtaXRlbScpO1xuICAgIC8vIENyZWF0ZXMgdGhlIGxpbmtcbiAgICBjb25zdCBuYXZMaXN0SXRlbUxpbmsgPSBjcmVhdGVMaW5rKG5hbWUsICduYXYtbGlzdC1saW5rJywgJyMnKVxuICAgIC8vIEFkZHMgdGhlIGxpbmsgdG8gdGhlIGxpXG4gICAgbmF2TGlzdEl0ZW0uYXBwZW5kKG5hdkxpc3RJdGVtTGluayk7XG4gICAgcmV0dXJuIG5hdkxpc3RJdGVtO1xufVxuXG5jb25zdCBjcmVhdGVMaW5rID0gKGxpbmtUZXh0LCBjbGFzc05hbWUsIGhyZWZWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmVmFsdWUpO1xuICAgIGxpbmsuaW5uZXJUZXh0ID0gbGlua1RleHQ7XG4gICAgcmV0dXJuIGxpbms7XG59XG5cbmNvbnN0IGNyZWF0ZVBhZ2VMYXlvdXQgPSAoKSA9PiB7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlTWFpbigpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQYWdlTGF5b3V0IH07IiwiY29uc3QgY3JlYXRlVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtID0gKGl0ZW1UaXRsZSwgaXRlbURlc2MsIGl0ZW1QcmljZSwgaXRlbUltZykgPT4ge1xuICAgIC8vIENyZWF0ZXMgdGhlIGNvbnRhaW5lciBkaXZcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xuICAgIC8vIENyZWF0ZXMgdGhlIEl0ZW0gdGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgLy8gQ3JlYXRlcyB0aGUgSXRlbSB0ZXh0IGNvbnRlbnRcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRleHQnKTtcbiAgICAvLyBDcmVhdGVzIHRoZSBJdGVtIHByaWNlXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgLy8gQ3JlYXRlcyB0aGUgSW1nXG4gICAgY29uc3QgaW1nID0gY3JlYXRlSW1nKGl0ZW1JbWcpO1xuXG4gICAgLy8gQWRkcyB0aGUgY29udGVudCB0byB0aGUgZWxlbWVudHNcbiAgICB0aXRsZS5pbm5lclRleHQgPSBpdGVtVGl0bGU7XG4gICAgZGVzYy5pbm5lclRleHQgPSBpdGVtRGVzYztcbiAgICBwcmljZS5pbm5lclRleHQgPSBpdGVtUHJpY2U7XG5cbiAgICAvLyBBZGRzIHRoZSBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZChpbWcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZGVzYyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwcmljZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBjcmVhdGVJbWcgPSAoaW1nUGF0aCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW1nJylcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdQYXRoKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XG4gICAgcmV0dXJuIGltZztcbn1cblxuY29uc3QgaXRlbXMgPSBbWydUZXN0JywgJ1RoaXMgaXMgYSB0ZXN0JywgJyQyJywgJ2h0dHBzOi8vcGxhY2Vob2xkLmNvLzQwMCddXTtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCk7XG4gICAgY29uc3QgaXRlbU9uZSA9IGNyZWF0ZUl0ZW0oJ1Rlc3QnLCAnVGhpcyBpcyBhIHRlc3QnLCAnJDInLCAnaHR0cHM6Ly9wbGFjZWhvbGQuY28vNDAwJyk7XG4gICAgbWFpbi5hcHBlbmQodGl0bGUsIGl0ZW1PbmUpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNZW51LCBpdGVtcyB9IiwiaW1wb3J0IHsgY3JlYXRlUGFnZUxheW91dCB9IGZyb20gJy4vbW9kdWxlcy9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJy4vbW9kdWxlcy9ob21lLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QuanMnO1xuXG5jcmVhdGVQYWdlTGF5b3V0KCk7XG5cbi8vIGNyZWF0ZUhvbWUoKTtcbi8vIGNyZWF0ZUNvbnRhY3QoKTtcbmNyZWF0ZU1lbnUoKTtcbiJdLCJuYW1lcyI6WyJwYWdlQ29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUxpc3RJdGVtIiwibmFtZSIsIm5hdkxpc3RJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5hdkxpc3RJdGVtTGluayIsImNyZWF0ZUxpbmsiLCJhcHBlbmQiLCJsaW5rVGV4dCIsImNsYXNzTmFtZSIsImhyZWZWYWx1ZSIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJoZWFkZXIiLCJ0aXRsZSIsIm5hdiIsIm5hdkxpc3QiLCJob21lIiwibWVudSIsImNvbnRhY3QiLCJjcmVhdGVIZWFkZXIiLCJtYWluIiwiY3JlYXRlTWFpbiIsImZvb3RlciIsImZvb3RlclBhcmEiLCJmb290ZXJMaW5rT25lIiwiZm9vdGVyTGlua1R3byIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZVRpdGxlIiwiaXRlbU9uZSIsIml0ZW1UaXRsZSIsIml0ZW1EZXNjIiwiaXRlbVByaWNlIiwiaXRlbUltZyIsImNvbnRhaW5lciIsImRlc2MiLCJwcmljZSIsImltZyIsImltZ1BhdGgiLCJjcmVhdGVJbWciLCJjcmVhdGVJdGVtIiwiY3JlYXRlTWVudSJdLCJzb3VyY2VSb290IjoiIn0=