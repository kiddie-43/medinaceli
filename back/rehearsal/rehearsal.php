 <?php
include "../dataBaseConect/dataBaseConect.php";
include "../coors/coors.php";
include "../common/utils/html.php";

function obtenerRegistrosAsistencias() {
    try {
        $conn = conectarBD();
        if (!$conn) {
            return null;
        }
        
        $query = 'SELECT rehearsal.id, rehearsal.date, rehearsal.start_time AS startOn, rehearsal.end_time AS endOn, SUM(CASE WHEN historicalattendance.assited = 1 THEN 1 ELSE 0 END) AS assisted, SUM(CASE WHEN historicalattendance.assited = 0 THEN 1 ELSE 0 END) AS notAssisted FROM rehearsal INNER JOIN historicalattendance ON rehearsal.id = historicalattendance.idRehearsal GROUP BY rehearsal.id, rehearsal.date, rehearsal.start_time, rehearsal.end_time';
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

function createEnsayoYRegistroAsistenca ($data){  
        class HistoricAlattendance {
            public $idMusician;
            public $idRehearsal;
            public $assisted;
        
            public function __construct($idMusician, $idRehearsal, $assisted) {
                $this->idMusician = $idMusician;
                $this->idRehearsal = $idRehearsal;
                $this->assisted = $assisted;
            }
        }
      
        $assisted = $data['assisted'];
        $date = $data['date'];
        $endOn = $data['endOn'];
        $startOn = $data['startOn'];
        $notAssisted = $data['notAsisted'];
    
        try {
            // Correcto
            $conn = conectarBD();
            if (!$conn) {
                return null;
            }
        
            $query = "INSERT INTO `rehearsal`(`date`, `start_time`, `end_time`) VALUES (:date,:startOn,:endOn)";
    
            $stmt = $conn->prepare($query);
            $stmt->bindValue(':date', $date);
            $stmt->bindValue(':startOn', $startOn);
            $stmt->bindValue(':endOn', $endOn);

            if ($stmt->execute()) {
                $lastId = $conn->lastInsertId();
                $list = array();
                
                foreach ($assisted as $id) {
                    $object = new HistoricAlattendance($id, $lastId, 1);
                    array_push($list, $object);
                }
                
                foreach ($notAssisted as $id) {
                    $object = new HistoricAlattendance($id, $lastId, 0);
                    array_push($list, $object);
                }
    
                foreach($list as $historic) {
                    $query = "INSERT INTO `historicalattendance`( `idMusician`, `idRehearsal`, `assited`) VALUES (:idMusician,:idRehearsal,:assited)";
                    $stmt = $conn->prepare($query);
                    $stmt->bindValue(':idMusician', $historic->idMusician);
                    $stmt->bindValue(':idRehearsal', $historic->idRehearsal);
                    $stmt->bindValue(':assited', $historic->assisted);
                    $stmt->execute();
                }
               
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }  
}

function deleteEnsayo ($id) {
    try {
        // Correcto
        $conn = conectarBD();
        if (!$conn) {
            return null;
        }
    
        $query = "DELETE FROM `rehearsal` WHERE id =:id";

        $stmt = $conn->prepare($query);
        $stmt->bindValue(':id', $id);            
        $stmt->execute();
        return json_encode(true); 
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }     
}

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$metod = strtoupper(html($data['metod']));
    $form = $data['data'];



if ($metod == "GET") {
    $registros = obtenerRegistrosAsistencias();
    echo($registros);
}

if ($metod == "POST") {

    createEnsayoYRegistroAsistenca($form);
    echo(json_encode(true));

}  

if ($metod == 'REMOVE') {
$id = $form['id'];
echo deleteEnsayo($id);
}

    

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

