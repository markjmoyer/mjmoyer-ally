
jQuery.getJSON("assets/data/code-test.json").done(function(data) {

  getBankData(data);

});

//sort the data

function getBankData(data) {
  var sortedEarnings = [];
  jQuery.each(data, function(s, sortEarnings){
      sortedEarnings.push(sortEarnings);
  });
  return (function(sortedVehicles){

    jQuery.each(data, function(x, data) {
      var bankName = data.name;
      var bankAPY = data.apy + " %";
      var bankEarnings = "$" + parseFloat(data.earnings).toFixed(2);

      var bankData = '<div class="table-row"><span class="bank-name">'+bankName+'</span><span class="bank-apy">'+bankAPY+'</span><span class="bank-earnings">'+bankEarnings+'</span></div>';

        jQuery('.bank-data-table').append(bankData);
        console.log(bankName + " " + bankAPY + " " + bankEarnings);

    });
  })(sortedEarnings);

}










  //console.log(data.name);





jQuery(document).ready(function() {
  //var bankDataFile = "assets/data/code-test.json";

  // sidebar tab functionality
  jQuery('.nav-tabs li').on('click', function() {
    jQuery('.nav-tabs li').removeClass('inactive');
    jQuery(this).toggleClass('inactive');
  });

  // did everything run? Maybe...
  console.log('Everythings fired up!');

});


// welcome-modal scripting
// jQuery('.welcome-modal').show();
// jQuery('.close-modal-btn').on('click', function(e) {
//   e.preventDefault();
//   jQuery('.welcome-modal, .overlay').hide();
// });

// cookie scripting for welcome-modal
// if (!$.cookie('alert')) {
//   jQuery('.welcome-modal').show();
//   var date = new Date();
//   date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
//   $.cookie('alert', true, { expires: date });
//  }
