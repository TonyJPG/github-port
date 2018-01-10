/*version 2*/
$(function() {
  $('#contact-form').validator();
  $('#contact-form').on('submit', function(e) {
    if (!e.isDefaultPrevented()) {

      //event added to the dataLayer to fire a trigger in GTM
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'formSubmissionSuccessful',
        formID: 'contact-form'
      });

      var url = '../php/contacto.php';
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data) {
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message;
          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
          if (messageAlert && messageText) {
            $('#contact-form').find('.messages').html(alertBox);
            $('#contact-form')[0].reset();
          }
        }
      });
      return false; //this return fix the double email and stuff
    } else {
      //This happens when the form's submit fails
      
    }
  })
});
