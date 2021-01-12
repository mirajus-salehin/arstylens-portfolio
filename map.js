var mymap = L.map('mapid').setView([25.6385571,88.634230], 16);


var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


var marker = L.marker([25.6385571,88.634230]).addTo(mymap);

marker.bindPopup("<b>Hey I'm here</b>").openPopup();