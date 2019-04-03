jQuery('.overlay').hide();
jQuery(document).ready(function() {

  //sidebar tab functionality
  jQuery('.nav-tabs li').on('click', function(e) {
    e.preventDefault();
    jQuery('.nav-tabs li').removeClass('inactivated');
    jQuery(this).toggleClass('inactivated');
  });

  // login-modal functionality
  jQuery('.overlay').hide();
  jQuery('.login').on('click', function(e) {
    e.preventDefault();
    jQuery('.overlay').show();
    jQuery('.login-modal input[type="text"]').focus();
  });

  // login-modal close button functionality
  jQuery('a.close-modal').on('click', function() {
    jQuery('.overlay').hide();
  });

  // place the copyright text under main navigation at 550px
  if (jQuery(window).width() <= 768) {
    jQuery('.copyright-disclosure').appendTo('footer');
  }
  //mobile menu functionality
  jQuery('.mobile-menu-button').on('click', function() {
    jQuery('header nav.main-navigation').toggle();
  });

  // tab functionality
  // jQuery("ul.nav-tabs li").on('click', function () {
  //   //Toggle particular element
  //   jQuery('.tab-content').next('.tab-content.news').toggle();
  //   //Hide all the elements but not the clicked one
  //   jQuery('ul.nav-tabs li').next('.tab-content').not(jQuery(this).next('.tab-content.archive')).hide();
  // });

  jQuery('.tab-content.archive').addClass('inactive');
  jQuery("ul.nav-tabs li.archive").on('click', function () {
    //jQuery('.tab-content.news').addClass('inactive');
    jQuery('.tab-content.news').hide();
    jQuery('.tab-content.archive').show();
  });
  jQuery("ul.nav-tabs li.news").on('click', function () {
    jQuery('.tab-content.archive').hide();
    jQuery('.tab-content.news').show();
  });



});

// get the JSON and sort earnings while we're at it
jQuery.getJSON("assets/data/code-test.json").done(function(data) {

  data.sort(function(a, b) {
  	return b.earnings - a.earnings;
  });
  getBankData(data);

});

function getBankData(data) {

    jQuery.each(data, function(x, data) {
      var bankName = data.name;
      var bankAPY = data.apy + " %";
      var bankEarnings = "$" + parseFloat(data.earnings).toFixed(2);

      var bankData = '<div class="table-row"><span class="bank-name">'+bankName+'</span><span class="bank-apy">'+bankAPY+'</span><span class="bank-earnings">'+bankEarnings+'</span></div>';

        jQuery('.bank-data-table').append(bankData);
        console.log(bankName + " " + bankAPY + " " + bankEarnings);

    });

}





// cookie scripting for welcome-modal
// if (!$.cookie('alert')) {
//   jQuery('.welcome-modal').show();
//   var date = new Date();
//   date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
//   $.cookie('alert', true, { expires: date });
//  }
