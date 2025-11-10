// Coordenadas del punto central
const coordenadas = [-2.2116245, -79.8892658];

// Inicializar el mapa
const map = L.map('map').setView(coordenadas, 16);

// Capa base: OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador
const marker = L.marker(coordenadas).addTo(map);
marker.bindPopup("<b>ElectricTech</b><br>Guayaquil, Ecuador").openPopup();