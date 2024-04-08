<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header("Content-Type: application/json; charset=UTF-8");
header('Content-Type: application/json');
header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

$json=file_get_contents('php://input');//captura el parametro en json {'id':1}
$params=json_decode($json);//paramteros
require('conexion.php');
$registros['codigo']=-1;
$registros['mensaje']='No se pudo Guardar el registros';
$method = $_SERVER['REQUEST_METHOD'];
if($method!='POST')
{
    $registros['mensaje']='Error- No se permite el acceso por este método...';
    echo json_encode($registros);
    exit(1);
}
if($params)
{
    
    $nombres=$params->nombres;
    $apellidos=$params->apellidos;
    $direccion=$params->direccion;
    $telefono=$params->telefono;
    $correo=$params->correo;
    $fecha=date("Y-m-d H:i:s"); //2024-02-19:8:04:23
    $stmt = $mysqli->prepare("INSERT INTO propietarios (nombres, apellidos, direccion, telefono, correo, created) VALUES (?,?,?,?,?,?)");
    /* Bind variables to parameters */
    $numparam = "ssssss"; //cantidad de caracteres debe ser igual al numero de parametros
    $stmt->bind_param($numparam,$nombres,$apellidos,$direccion,$telefono,$correo,$fecha);
    /* Execute the statement */
    $stmt->execute();

}
if($mysqli->affected_rows>0)//si afectó registro
{
   $registros['codigo']='OK';
   $registros['mensaje']='Registro guardado correctamente';
}
echo json_encode($registros);
?>