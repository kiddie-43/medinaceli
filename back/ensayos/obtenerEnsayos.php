<?php
include "../dataBaseConect/dataBaseConect.php";
include "../coors/coors.php";
function obtenerRegistrosAsistencias() {
    try {
        $conn = conectarBD();
        if (!$conn) {
            return null;
        }
        
        $query = 'SELECT * FROM `registroasistencias`';
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

// Ejemplo de uso
$registros = obtenerRegistrosAsistencias();
echo($registros)
// if ($registros) {
//     foreach ($registros as $registro) {
//         echo "ID: " . $registro['id'] . ", Fecha: " . $registro['fecha'] . "<br>";
//     }
// } else {
//     echo "No se pudieron obtener los registros.";
// }
?>
