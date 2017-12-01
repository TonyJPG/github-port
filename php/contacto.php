  <?php
  /*version 1*/
  $from = 'Antonio Perez <jpgtony@gmail.com>';
  $sendTo = 'Antonio Perez <jpgtony@gmail.com>';
  $subject = 'TE ESCRIBEN DESDE TU PAGINA WEB!';
  $fields = array('name' => 'Nombre', 'surname' => 'Apellido', 'email' => 'Email', 'phone' => 'Telefono', 'message' => 'Mensaje');
  $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
  $errorMessage = 'There was an error while submitting the form. Please try again later';

  error_reporting(0);

  try {

    if(count($_POST) == 0) throw new \Exception("Form is empty");

    $emailText = "Alguien llenó el formulario de tu web!!\nPuso lo siguiente:\n=============\n\n";

    foreach ($_POST as $key => $value) {
      if (isset($fields[$key])) {
        $emailText .= "$fields[$key]: $value\n";
      }
    }

    $headers = array( 'Content-Type: text/plain; charset="UTF-8";',
                      'From: ' . $from,
                      'Reply-To: ' . $from,
                      'Return-Path: ' . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);

  } catch (Exception $e) {
      $responseArray = array('type' => 'danger', 'message' => $errorMessage);
  }

  if(!empty($_SERVER['HTTP_X_REQUESTED-WITH']) && mb_strtolower($_SERVER['HTTP_X_REQUESTED-WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
  } else{
    echo $responseArray['message'];
  }

?>
