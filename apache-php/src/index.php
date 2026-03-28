<?php

declare(strict_types=1);

require_once 'flight/Flight.php';

Flight::route('/', function() {
    Flight::render('accueil');
});

// connexion BDD
$link = mysqli_connect("mysql", "root", "root", "mydb", 3306);

Flight::set('geobase', $link);
Flight::get('geobase');

Flight::route('/test-db', function () {
// Paramètres de l'URL (on fait ici la méthode GET)
    $recherche = $_GET['nom'] ?? '';
    $mode = $_GET['mode'] ?? 'contient';

// ajout de l'opérateur LIKE pour commence par, finit par et contient
if ($mode === 'commence par') {
    $rechercheSQL = $recherche . '%';
} elseif ($mode === 'finit par') {
    $rechercheSQL = '%' . $recherche;
} else {
    $rechercheSQL = '%' . $recherche . '%';
}

// requête SQL principale pour extraire les longitudes et latitudes
    $sql = "SELECT nom, insee, 
            ST_X(ST_GeomFromText(ST_AsText(ST_Centroid(geometry)),4326)) AS lon,
            ST_Y(ST_GeomFromText(ST_AsText(ST_Centroid(geometry)),4326)) AS lat
            FROM communes 
            WHERE nom LIKE '$rechercheSQL'
            AND geometry IS NOT NULL AND ST_IsValid(geometry) = 1";

    $query = mysqli_query(Flight::get('geobase'), $sql);
    $results = mysqli_fetch_all($query, MYSQLI_ASSOC);
    Flight::json($results);
});

Flight::start();