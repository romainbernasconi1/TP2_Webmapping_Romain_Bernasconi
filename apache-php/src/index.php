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
    $sql = "SELECT nom, insee FROM communes";
    $query = mysqli_query(Flight::get('geobase'), $sql);
    $results = mysqli_fetch_all($query, MYSQLI_ASSOC);
    Flight::json($results);
});

Flight::start();