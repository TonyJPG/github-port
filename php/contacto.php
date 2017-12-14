<?php
  /*version 2*/
  namespace contacto_portafolio;
  use PHPMailer\PHPMailer\PHPMailer;
  require 'PHPMailer-master/src/PHPMailer.php';
  require 'PHPMailer-master/src/Exception.php';

  $fromEmail = 'jpgtony@gmail.com';
  $fromName = 'Antonio Perez';

  $sendToEmail = 'jpgtony@gmail.com';
  $sendToName = 'Antonio Perez';

  $subject = 'TE ESCRIBEN DESDE TU PAGINA WEB!';
  $fields = array('name' => 'Nombre', 'surname' => 'Apellido', 'email' => 'Email', 'phone' => 'Telefono', 'message' => 'Mensaje');
  $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
  $errorMessage = 'There was an error while submitting the form. Please try again later';

  error_reporting(0); //E_ALL & ~E_NOTICE

  try {

    if(count($_POST) == 0) throw new \Exception("Form is empty");
    $emailTextHtml = "<h1>Te han escrito un mensaje desde el formulario de tu web</h1><hr>";
    $emailTextHtml .= "<table>";

    foreach ($_POST as $key => $value) {
      if (isset($fields[$key])) {
        $value = htmlspecialchars($value, ENT_QUOTES);
        $emailTextHtml .= "<tr><th align="left">$fields[$key]</th><td>$value</td></tr>";
      }
    }
    $emailTextHtml .= "</table><hr>";
    $emailTextHtml .= "<p>Have a nice day,<br>Best,<br>Ondrej</p>";

    $mail = new PHPMailer;

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($sendToEmail,$sendToName);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->msgHTML($emailTextHtml); // this will also create a plain-text version of the HTML email, very handy

    if (!$mail->send()) {
      throw new \Exception('I could not send the email.' . $mail->ErrorInfo);
    }

    $responseArray = array('type' => 'info', 'message' => $okMessage);

  } catch (\Exception $e) {
      $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
  }

  if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
  } else {
    echo $responseArray['message'];
  }
