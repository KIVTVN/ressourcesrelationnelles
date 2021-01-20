<?php

include('connexionpdo.php');

$sql =  'SELECT * FROM type_ressource';
foreach  ($connexion->query($sql) as $row) {
    echo $row['libelleTypRes'];
}    


?>