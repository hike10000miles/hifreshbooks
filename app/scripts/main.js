'use strict';

(function($) {
  $(document).ready(function() {

    function toggleButton() {
      $('#sideBar').find('.button').toggle(400);

    }
    
    function sendAJAX1() {
      $('#view').load('page1.html', function() {
        $('#view').find('div').fadeIn('slow');
        $('#header').find('h1').hide();
        $('#header').find('h2').text('My name is Chen Shen.');
      });
    }
    
    function sendAJAX2() {
      $('#view').load('page2.html', function() {
        $('#view').find('div').fadeIn('slow');
        $('#header').find('h1').hide();
        $('#header').find('h2').text('My name is Chen Shen.');
      });
    }

    function sendAJAX3() {
      $('#view').load('page3.html', function() {
        $('#view').find('div').fadeIn('slow');
        $('#header').find('h1').hide();
        $('#header').find('h2').text('My name is Chen Shen.');
      });
    }
    
    
    $('#load1').click(sendAJAX1);
    $('#load2').click(sendAJAX2);
    $('#load3').click(sendAJAX3);    
    $('#menu').click(toggleButton);


  
  });
})(jQuery);
