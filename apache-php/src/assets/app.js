// Centrée sur la france métropolitaine
var map = L.map('map').setView([46.5, 2.5], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markersLayer = L.layerGroup().addTo(map);

// vue js
Vue.createApp({
    data() {
        return {
            mode: 'contient',
            recherche: '',
        }
    },
    
}).mount('#app');
    


