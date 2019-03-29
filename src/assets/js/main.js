jQuery(document).ready(function() {
  console.log('Everything fired!');

  // cookie scripting for welcome-modal
  if (!$.cookie('alert')) {
    jQuery('.welcome-modal').show();
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    $.cookie('alert', true, { expires: date });
   }

  // welcome-modal scripting
  jQuery('.welcome-modal').show();
  jQuery('.close-modal-btn').on('click', function() {
    jQuery('.welcome-modal, .overlay').hide();
  });
  
  // user input scripting
  function pwdInput() {
      var pwdInput = document.getElementById("pwdInput").value;
      alert(pwdInput);
  }

});
