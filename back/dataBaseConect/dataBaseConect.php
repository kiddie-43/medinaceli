<?php
function conectarBD() {
    $servername = "localhost"; // Cambia esto al nombre de tu servidor MySQL
    $username = "masterBandaMedinaceli";   // Cambia esto a tu nombre de usuario de MySQL
    $password = "masterBandaMedinaceli"; // Cambia esto a tu contraseña de MySQL
    $dbname = "banda_medinaceli";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // Configurar PDO para que lance excepciones en caso de errores
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->query("set names utf8;");
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        // se conecta correcto
        // echo "Connected to $dbname at $servername successfully.";

        return $conn;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        return null;
    }
}
?>
