<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$message = $_POST['message'];
$fuente = $_POST['fuente'];
$para = 'envios@sawumarketing.com, administracion@mercantilgomez.com.ve, ventasdetal@mercantilgomez.com.ve,';
$titulo = 'Solicitud de Cotización - Mego';
$header = 'From: envios@sawumarketing.com';
$msjCorreo = "Esta persona está interesada en recibir una cotización:\n\nNombre: $nombre\nTeléfono: $telefono\nCorreo Electrónico: $email\nMensaje: $message";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo
Header ("Location: http://mego.mktpa.com/mensaje-enviado.html");
}
else {
echo
Header ("Location: http://mego.mktpa.com/mensaje-error.html");
}
}
?>