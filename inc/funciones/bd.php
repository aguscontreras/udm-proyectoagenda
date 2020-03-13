<?php

define('DB_USUARIO', 'agendaphp');
define('DB_PASSWORD', 'Egws37851');
define('DB_HOST', 'aguscontdev.ddns.net');
define('DB_NOMBRE', 'agendaphp');

$conn = new mysqli(DB_HOST, DB_USUARIO, DB_PASSWORD, DB_NOMBRE);

// echo $conn->ping();

?>