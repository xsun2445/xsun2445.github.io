document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&document.querySelectorAll("pre>code.language-geojson").forEach((e=>{const t=e.textContent,a=e.parentElement;a.classList.add("unloaded");let o=document.createElement("div");o.classList.add("map"),a.after(o);var n=L.map(o);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(n);let d=L.geoJSON(JSON.parse(t)).addTo(n);n.fitBounds(d.getBounds())}))}));