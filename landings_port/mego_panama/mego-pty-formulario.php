<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$message = $_POST['message'];
$fuente = $_POST['fuente'];
$para = 'envios@sawumarketing.com, ventas@mercantilgomez.com.pa';
$titulo = 'Solicitud de Cotización - Mercantil Gómez';
$header = 'From: envios@sawumarketing.com';
$msjCorreo = "Esta persona está interesada en recibir una $fuente:\n\nNombre: $nombre\nTeléfono: $telefono\nCorreo Electrónico: $email\nMensaje: $message";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo
Header ("Location: http://mercantilgomez.mktpa.com/mensaje-enviado-pty.html");
}
else {
echo
Header ("Location: http://mercantilgomez.mktpa.com/mensaje-error-pty.html");
}
}
?>