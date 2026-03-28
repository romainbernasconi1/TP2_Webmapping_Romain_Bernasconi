<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- librairie leaflet -->
    <!-- leaflet css -->
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
    <!-- leaflet js -->
     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
    <!-- css local -->
    <link rel="stylesheet" href="assets/style.css">
    <title>Recherche de villes françaises</title>
</head>
<body>
    <div id="app">
 <!-- Barre de recherche -->
        <div id="recherche">
            <select v-model="mode">
                <option value="contient">Contient</option>
                <option value="commence">Commence par</option>
                <option value="finit">Finit par</option>
        </select>

            <input
                type="text"
                v-model="nomRecherche"
                placeholder="Nom de la ville..."
                @keyup.enter="rechercher"
            />
            <!-- bouton pour recherche -->
            <button @click="rechercher">Rechercher</button>
        </div>
    </div>
    <div id=map>
    <p></p>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>

    </div>
    <script src="assets/app.js"></script>
</body>
</html>