<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$fuente = $_POST['fuente'];
$para = 'envios@sawumarketing.com';
$titulo = 'Contacto de la publicidad en Internet - Best';
$header = "From: " . strip_tags($_POST['email']) . "\r\n";
$msjCorreo = "Nombre: $nombre\nTelefono: $telefono\nE-Mail: $email\nReferred By: Adword\nID/Status: Lead;Sage 50";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo
Header ("Location: http://best.mktpa.com/mensaje-enviado.html");
}
else {
echo
Header ("Location: http://best.mktpa.com/mensaje-error.html");
}
}
?>