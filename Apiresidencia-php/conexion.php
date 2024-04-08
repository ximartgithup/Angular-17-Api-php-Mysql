<?php
//----- conexion a BD----
$host='localhost';
$user='root';
$password='';
$database='residencias';
$mysqli= new mysqli($host,$user,$password,$database);
if($mysqli->connect_errno)
{
    echo "Error al conectar a la base de dato: ".$mysqli->connect_errno.'<br>';
}

?>