$(document).ready(function() {
  $('h1').append('me');
  number = 10;
  total = number * number;
  size = 900/number;
  for (i=1; i<=total; i++) {
    $('.container').append('<div class="box"><div>');
  };
  $('.box').css({'width': size + 'px'});
  $('.box').css({'height': size + 'px'});
  $('.box').mouseenter( function()
  	{$(this).addClass('orange');
  });
});

$('button').click( function(){
	$('.container').empty()
  var number = prompt("hi");
  total = number * number;
  size = 900/number;
  for (j=1; j<=total; j++) {
    $('.container').append('<div class="box"><div>');
  };
  $('.box').css({'width': size + 'px'});
  $('.box').css({'height': size + 'px'});
  $('.box').mouseenter( function()
  	{$(this).addClass('orange');
  });s
});