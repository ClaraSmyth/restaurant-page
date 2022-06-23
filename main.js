(()=>{"use strict";const e=document.querySelector("#content"),t=e=>{const t=document.createElement("li");t.classList.add("nav-list-item");const a=n(e,"nav-list-link","#");return t.append(a),t},n=(e,t,n)=>{const a=document.createElement("a");return a.classList.add(t),a.setAttribute("href",n),a.innerText=e,a},a=[["Classic Ring","A classic ring donut with glaze or sugar on top","$2","./assets/classic-ring.jpg"],["Classic Filled","A classic filled donut with powdered sugar on top and a jam or custard filling","$2","./assets/classic-filled.jpg"],["Chocolate Ring","A ring donut dipped in chocolate with your choice of topping","$2.50","./assets/choc-ring.jpg"],["Chocolate Filled","A filled donut dipped in chocolate with your choice of topping and filling","$2.50","./assets/choc-filled.jpg"],["Colourful Ring","A ring donut dipped in a variety of icing colours and your choice of topping","$2.50","./assets/icing-ring.jpg"],["Colourful Filled","A filled donut dipped in a variety of icing colours and your choice of topping and filling","$2.50","./assets/icing-filled.jpg"]];(()=>{const n=document.createElement("header");n.classList.add("header");const a=document.createElement("h1");a.classList.add("header-title"),a.innerText="Clara's Donuts";const c=document.createElement("nav");c.classList.add("header-nav");const s=document.createElement("ul");s.classList.add("nav-list");const i=t("Home"),o=t("Menu"),d=t("Contact");s.append(i,o,d),c.append(s),n.append(a),n.append(c),e.append(n)})(),(()=>{const t=document.createElement("main");t.classList.add("main"),e.append(t)})(),(()=>{const t=document.createElement("footer");t.classList.add("footer");const a=document.createElement("p");a.classList.add("footer-para");const c=n("Clara","footer-link","#"),s=n("TheOdinProject","footer-link","#");a.append("Created by ",c," for ",s),t.append(a),e.append(t)})(),(()=>{const e=document.querySelector(".main"),t=(()=>{const e=document.createElement("h2");return e.classList.add("menu-title"),e.innerText="Menu",e})();e.append(t),a.forEach((t=>{const n=((e,t,n,a)=>{const c=document.createElement("div");c.classList.add("menu-item-container");const s=document.createElement("h3");s.classList.add("menu-item-title");const i=document.createElement("p");i.classList.add("menu-item-text");const o=document.createElement("p");o.classList.add("menu-item-price");const d=(e=>{const t=document.createElement("img");return t.classList.add("menu-img"),t.setAttribute("src",e),t.setAttribute("alt",""),t})(a);return s.innerText=e,i.innerText=t,o.innerText=n,c.append(d),c.append(s),c.append(i),c.append(o),c})(t[0],t[1],t[2],t[3]);e.append(n)}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2YsTUFBTUQsRUFBTTVDLFNBQVNLLGNBQWMsT0FJbkMsT0FIQXVDLEVBQUl0QyxVQUFVQyxJQUFJLFlBQ2xCcUMsRUFBSTdCLGFBQWEsTUFBTzhCLEdBQ3hCRCxFQUFJN0IsYUFBYSxNQUFPLElBQ2pCNkIsR0FyQktFLENBQVVOLEdBYXRCLE9BVkFyQixFQUFNSCxVQUFZcUIsRUFDbEJLLEVBQUsxQixVQUFZc0IsRUFDakJLLEVBQU0zQixVQUFZdUIsRUFHbEJFLEVBQVUvQixPQUFPa0MsR0FDakJILEVBQVUvQixPQUFPUyxHQUNqQnNCLEVBQVUvQixPQUFPZ0MsR0FDakJELEVBQVUvQixPQUFPaUMsR0FFVkYsR0EyQmtCTSxDQUFXWixFQUFLLEdBQUlBLEVBQUssR0FBSUEsRUFBSyxHQUFJQSxFQUFLLElBQzVEVCxFQUFLaEIsT0FBTzBCLE9DckR4QlksSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIC8vIENyZWF0ZXMgdGhlIGhlYWRlciBlbGVtZW50XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgLy8gQ3JlYXRlcyB0aGUgaDEgZWxlbWVudFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQ2xhcmFcXCdzIERvbnV0cyc7XG5cbiAgICAvLyBDcmVhdGVzIHRoZSBuYXYgZWxlbWVudFxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbmF2Jyk7XG5cbiAgICAvL0NyZWF0ZXMgdGhlIHVsIGVsZW1lbnQgd2l0aGluIG5hdlxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QnKTtcblxuICAgIC8vQ3JlYXRlcyB0aGUgbGkgZWxlbWVudHMgd2l0aGluIHRoZSB1bFxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVMaXN0SXRlbSgnSG9tZScpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVMaXN0SXRlbSgnTWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVMaXN0SXRlbSgnQ29udGFjdCcpO1xuXG4gICAgLy8gQWRkcyB0aGUgbmF2IGxpIGl0ZW1zIHRvIHRoZSB1bFxuICAgIG5hdkxpc3QuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICAgIC8vIEFkZHMgdGhlIG5hdiB1bCB0byB0aGUgbmF2IGVsZW1lbnQgXG4gICAgbmF2LmFwcGVuZChuYXZMaXN0KTtcbiAgICAvLyBBZGRzIHRoZSB0aXRsZSBhbmQgbmF2IHRvIHRoZSBoZWFkZXJcbiAgICBoZWFkZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kKG5hdik7XG4gICAgLy8gQWRkcyB0aGUgaGVhZGVyIHRvIHRoZSBwYWdlQ29udGVudCBkaXZcbiAgICBwYWdlQ29udGVudC5hcHBlbmQoaGVhZGVyKTtcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kKG1haW4pO1xufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgZm9vdGVyIGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICAvLyBDcmVhdGVzIHRoZSBmb290ZXIgcGFyYWdyYXBoIGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclBhcmEuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXBhcmEnKTtcblxuICAgIC8vQ3JlYXRlcyB0aGUgZm9vdGVyIGxpbmsgZWxlbWVudHNcbiAgICBjb25zdCBmb290ZXJMaW5rT25lID0gY3JlYXRlTGluaygnQ2xhcmEnLCAnZm9vdGVyLWxpbmsnLCAnIycpO1xuICAgIGNvbnN0IGZvb3RlckxpbmtUd28gPSBjcmVhdGVMaW5rKCdUaGVPZGluUHJvamVjdCcsICdmb290ZXItbGluaycsICcjJyk7XG5cbiAgICAvLyBBZGRzIHRoZSBsaW5rcyB0byB0aGUgcGFyYWdyYXBoIHRleHRcbiAgICBmb290ZXJQYXJhLmFwcGVuZCgnQ3JlYXRlZCBieSAnLCBmb290ZXJMaW5rT25lLCAnIGZvciAnLCBmb290ZXJMaW5rVHdvKVxuICAgIC8vIEFkZHMgdGhlIHBhcmFncmFwaCB0byB0aGUgZm9vdGVyXG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJQYXJhKTtcbiAgICAvLyBBZGRzIHRoZSBmb290ZXIgdG8gdGhlIHBhZ2VcbiAgICBwYWdlQ29udGVudC5hcHBlbmQoZm9vdGVyKTtcbn1cblxuY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAobmFtZSkgPT4ge1xuICAgIC8vIENyZWF0ZXMgdGhlIHVsIGxpc3QgaXRlbVxuICAgIGNvbnN0IG5hdkxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuYXZMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtbGlzdC1pdGVtJyk7XG4gICAgLy8gQ3JlYXRlcyB0aGUgbGlua1xuICAgIGNvbnN0IG5hdkxpc3RJdGVtTGluayA9IGNyZWF0ZUxpbmsobmFtZSwgJ25hdi1saXN0LWxpbmsnLCAnIycpXG4gICAgLy8gQWRkcyB0aGUgbGluayB0byB0aGUgbGlcbiAgICBuYXZMaXN0SXRlbS5hcHBlbmQobmF2TGlzdEl0ZW1MaW5rKTtcbiAgICByZXR1cm4gbmF2TGlzdEl0ZW07XG59XG5cbmNvbnN0IGNyZWF0ZUxpbmsgPSAobGlua1RleHQsIGNsYXNzTmFtZSwgaHJlZlZhbHVlKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWZWYWx1ZSk7XG4gICAgbGluay5pbm5lclRleHQgPSBsaW5rVGV4dDtcbiAgICByZXR1cm4gbGluaztcbn1cblxuY29uc3QgY3JlYXRlUGFnZUxheW91dCA9ICgpID0+IHtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVBhZ2VMYXlvdXQgfTsiLCJjb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNZW51JztcbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSAoaXRlbVRpdGxlLCBpdGVtRGVzYywgaXRlbVByaWNlLCBpdGVtSW1nKSA9PiB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgY29udGFpbmVyIGRpdlxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XG4gICAgLy8gQ3JlYXRlcyB0aGUgSXRlbSB0aXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICAvLyBDcmVhdGVzIHRoZSBJdGVtIHRleHQgY29udGVudFxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGV4dCcpO1xuICAgIC8vIENyZWF0ZXMgdGhlIEl0ZW0gcHJpY2VcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tcHJpY2UnKTtcbiAgICAvLyBDcmVhdGVzIHRoZSBJbWdcbiAgICBjb25zdCBpbWcgPSBjcmVhdGVJbWcoaXRlbUltZyk7XG5cbiAgICAvLyBBZGRzIHRoZSBjb250ZW50IHRvIHRoZSBlbGVtZW50c1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IGl0ZW1UaXRsZTtcbiAgICBkZXNjLmlubmVyVGV4dCA9IGl0ZW1EZXNjO1xuICAgIHByaWNlLmlubmVyVGV4dCA9IGl0ZW1QcmljZTtcblxuICAgIC8vIEFkZHMgdGhlIGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChkZXNjKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHByaWNlKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChpbWdQYXRoKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWcnKVxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ1BhdGgpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKTtcbiAgICByZXR1cm4gaW1nO1xufVxuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gICAgWydDbGFzc2ljIFJpbmcnLCAnQSBjbGFzc2ljIHJpbmcgZG9udXQgd2l0aCBnbGF6ZSBvciBzdWdhciBvbiB0b3AnLCAnJDInLCAnLi9hc3NldHMvY2xhc3NpYy1yaW5nLmpwZyddLFxuICAgIFsnQ2xhc3NpYyBGaWxsZWQnLCAnQSBjbGFzc2ljIGZpbGxlZCBkb251dCB3aXRoIHBvd2RlcmVkIHN1Z2FyIG9uIHRvcCBhbmQgYSBqYW0gb3IgY3VzdGFyZCBmaWxsaW5nJywgJyQyJywgJy4vYXNzZXRzL2NsYXNzaWMtZmlsbGVkLmpwZyddLFxuICAgIFsnQ2hvY29sYXRlIFJpbmcnLCAnQSByaW5nIGRvbnV0IGRpcHBlZCBpbiBjaG9jb2xhdGUgd2l0aCB5b3VyIGNob2ljZSBvZiB0b3BwaW5nJywgJyQyLjUwJywgJy4vYXNzZXRzL2Nob2MtcmluZy5qcGcnXSxcbiAgICBbJ0Nob2NvbGF0ZSBGaWxsZWQnLCAnQSBmaWxsZWQgZG9udXQgZGlwcGVkIGluIGNob2NvbGF0ZSB3aXRoIHlvdXIgY2hvaWNlIG9mIHRvcHBpbmcgYW5kIGZpbGxpbmcnLCAnJDIuNTAnLCAnLi9hc3NldHMvY2hvYy1maWxsZWQuanBnJ10sXG4gICAgWydDb2xvdXJmdWwgUmluZycsICdBIHJpbmcgZG9udXQgZGlwcGVkIGluIGEgdmFyaWV0eSBvZiBpY2luZyBjb2xvdXJzIGFuZCB5b3VyIGNob2ljZSBvZiB0b3BwaW5nJywgJyQyLjUwJywgJy4vYXNzZXRzL2ljaW5nLXJpbmcuanBnJ10sXG4gICAgWydDb2xvdXJmdWwgRmlsbGVkJywgJ0EgZmlsbGVkIGRvbnV0IGRpcHBlZCBpbiBhIHZhcmlldHkgb2YgaWNpbmcgY29sb3VycyBhbmQgeW91ciBjaG9pY2Ugb2YgdG9wcGluZyBhbmQgZmlsbGluZycsICckMi41MCcsICcuL2Fzc2V0cy9pY2luZy1maWxsZWQuanBnJ10sXG5dO1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUoKTtcbiAgICBtYWluLmFwcGVuZCh0aXRsZSk7XG4gICAgXG4gICAgY29uc3QgY3JlYXRlTWVudUl0ZW1zID0gKCgpID0+IHtcbiAgICAgICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNJdGVtID0gY3JlYXRlSXRlbShpdGVtWzBdLCBpdGVtWzFdLCBpdGVtWzJdLCBpdGVtWzNdKTtcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKHRoaXNJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfSIsImltcG9ydCB7IGNyZWF0ZVBhZ2VMYXlvdXQgfSBmcm9tICcuL21vZHVsZXMvcGFnZS1sb2FkLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL21vZHVsZXMvaG9tZS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tb2R1bGVzL21lbnUuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcblxuY3JlYXRlUGFnZUxheW91dCgpO1xuXG4vLyBjcmVhdGVIb21lKCk7XG4vLyBjcmVhdGVDb250YWN0KCk7XG5jcmVhdGVNZW51KCk7XG4iXSwibmFtZXMiOlsicGFnZUNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVMaXN0SXRlbSIsIm5hbWUiLCJuYXZMaXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJuYXZMaXN0SXRlbUxpbmsiLCJjcmVhdGVMaW5rIiwiYXBwZW5kIiwibGlua1RleHQiLCJjbGFzc05hbWUiLCJocmVmVmFsdWUiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibWVudUl0ZW1zIiwiaGVhZGVyIiwidGl0bGUiLCJuYXYiLCJuYXZMaXN0IiwiaG9tZSIsIm1lbnUiLCJjb250YWN0IiwiY3JlYXRlSGVhZGVyIiwibWFpbiIsImNyZWF0ZU1haW4iLCJmb290ZXIiLCJmb290ZXJQYXJhIiwiZm9vdGVyTGlua09uZSIsImZvb3RlckxpbmtUd28iLCJjcmVhdGVGb290ZXIiLCJjcmVhdGVUaXRsZSIsImZvckVhY2giLCJpdGVtIiwidGhpc0l0ZW0iLCJpdGVtVGl0bGUiLCJpdGVtRGVzYyIsIml0ZW1QcmljZSIsIml0ZW1JbWciLCJjb250YWluZXIiLCJkZXNjIiwicHJpY2UiLCJpbWciLCJpbWdQYXRoIiwiY3JlYXRlSW1nIiwiY3JlYXRlSXRlbSIsImNyZWF0ZU1lbnUiXSwic291cmNlUm9vdCI6IiJ9