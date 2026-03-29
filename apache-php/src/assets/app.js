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
            nomRecherche: '',
        }
    },
    methods: {
        // recherche principale
        rechercher() {
            markersLayer.clearLayers();
            // appel de l'index pour URL
            fetch('test-db?nom=' + this.nomRecherche + '&mode=' + this.mode)
            .then(res => res.json())
            .then(data => {
                // message si rien n'est trouvé
                    if (data.length === 0) {
                        alert("Aucune ville ne correspond à votre recherche...");
                    }
                // ajout des points des villes
                for (var i = 0; i < data.length; i++) {
                    var ville = data[i];

                    var monPoint = L.marker([ville.lat, ville.lon]);
                    
                    monPoint.bindPopup(ville.nom);
                    
                    monPoint.addTo(markersLayer);
                }
            })
            .catch(err => {
                console.error("Erreur de l'api", err);
            });
        },
        // recherche prédéfinie
        rechercheRapide(nom, modeChoisi) {
            this.nomRecherche = nom;
            this.mode = modeChoisi;
            this.rechercher();
        }
    }
}).mount('#app');