// Inicializa el mapa
var mymap = L.map('mapid').setView([4.5709, -74.2973], 6); // Colombia: Coordenadas del centro de Colombia y un nivel de zoom apropiado
// Agrega un mosaico de mapa base (tile layer) a nuestro mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
// Agrega un marcador al mapa en una ubicación específica (por ejemplo, Bogotá)
var marker = L.marker([4.6097, -74.0817]).addTo(mymap); // Bogotá, Colombia

