<?php 
include "../dataBaseConect/dataBaseConect.php";
include "../coors/coors.php";


function getMusician() {
    try {
        $conn = conectarBD();
        if (!$conn) {
            return null;
        }
        
        $query = 'SELECT * from musician;';
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($result);
    } catch (PDOException $e) {
        echo "Error al obtener registros: " . $e->getMessage();
        return null;
    } finally {
        if ($conn) {
            $conn = null; // Cerrar la conexión a la base de datos
        }
    }
}









$registros = getMusician();
echo($registros)

?>