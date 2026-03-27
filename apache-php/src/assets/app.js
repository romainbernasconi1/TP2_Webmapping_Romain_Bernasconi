let map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([2.35, 48.85]),
        zoom: 13,
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }),
        }),
        new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/Romain/wms',
            params: {'LAYERS': 'cours_eau', 'TILED': true},
    }),
}),
        vectorlayer = new ol.layer.Vector({
                        source: new ol.source.Vector(),
                        style: new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: 'red',
                                width: 5,
        }),

    }),
})
    ],
});

let wmsLayer = new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: 'http://localhost:8080/geoserver/Romain/wms',
                    params: {'LAYERS': 'cours_eau', 'TILED': true},
                    crossOrigin : 'anonymous'
                })
            });

map.addLayer(wmsLayer);

// change cursor on hover
map.on('pointermove', evt => {
    let data = wmsLayer.getData(evt.pixel);
    let hit = data && (data[0] > 0 || data[1] > 0 || data[2] > 0);
    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});

Vue.createApp({
    data() {
        return {
            toponyme: '',
        }
    },
    mounted() {
        map.on('click', (evt) => {
    let viewResolution = map.getView().getResolution();
    let wmsSource = wmsLayer.getSource();
    let url = wmsSource.getFeatureInfoUrl(
        evt.coordinate, // la coordonnée cliquée
        viewResolution,
        'EPSG:3857', // projection par défaut dans OpenLayers
        {'INFO_FORMAT': 'application/json'} // format de retour souhaité
    );
    console.log(url)
    fetch(url)
    .then(r => r.json())
    .then(json => {
        let features = new ol.format.GeoJSON().readFeatures(json)
        vectorlayer.getSource().clear()
        vectorlayer.getSource().addFeatures(features)
        this.toponyme = features[0].get('topooh');
    })
});
    }
}).mount('#entete');