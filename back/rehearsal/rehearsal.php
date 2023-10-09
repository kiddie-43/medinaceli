 <?php
include "../dataBaseConect/dataBaseConect.php";
include "../coors/coors.php";
function obtenerRegistrosAsistencias() {
    try {
        $conn = conectarBD();
        if (!$conn) {
            return null;
        }
        
        $query = 'SELECT rehearsal.id, rehearsal.date, rehearsal.start_time as startOn, rehearsal.end_time as endOn, SUM( case WHEN historicalattendance.assited = 1 THEN 1 else 0 end) as assisted,SUM( case WHEN historicalattendance.assited = 0 THEN 1 else 0 end) as notAssisted from rehearsal INNER JOIN historicalattendance on rehearsal.id = historicalattendance.idRehearsal';
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

/*
// get post JSON
$request_body = file_get_contents('php://input');
 $data = json_decode($request_body, true);


 $item = $data['value']; // Works
 echo $item; 
*/
/*
consultas test 
SELECT  musician.name, case WHEN historicalattendance.assited = 1 THEN 'Sí' 
           ELSE 'No' 
       END AS assited  , rehearsal.date, rehearsal.start_time, rehearsal.end_time FROM `historicalattendance` inner join musician on musician.id = historicalattendance.idMusician INNER JOIN rehearsal on historicalattendance.idRehearsal = rehearsal.id  WHERE 1

*/

?> 

