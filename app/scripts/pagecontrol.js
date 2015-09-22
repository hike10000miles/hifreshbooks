'use strict';
(function($) {
  $(document).ready(function() {
 
    function sendAJAX1() {
      $('#view').load('page1.html', function() {
        $('#view').find('div').fadeIn('slow');
      });
    }
    
    function sendAJAX2() {
      $('#view').load('page2.html', function() {
        $('#view').find('div').fadeIn('slow');
      });
    }
  
    $('#load1').click(sendAJAX1);
    $('#load2').click(sendAJAX2);

  });
})(jQuery);