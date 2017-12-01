/*version 1*/
$(function() {
  $('#contact-form').validator();

  $('#contact-form').on('submit', function(e) {
    if (!e.isDefaultPrevented()) {
      console.log("entre al if1");
      var url = 'php/contacto.php';

      $.ajax({
        type: 'POST',
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          console.log("entre al ajax.data");
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message;
          console.log(messageAlert);
          console.log(messageText);

          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
          console.log(alertBox);
          if (messageAlert && messageText) {
            console.log("entre al if2");
            $('#contact-form').find('.messages').html(alertBox);
            $('#contact-form')[0].reset();
          } else {
            console.log("NO entré al if2");
          }
        }
      })
      console.log("retorné falso");
      //return false; what's this for?
    }
  })
});
