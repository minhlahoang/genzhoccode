$('.container').on('mouseover', function(){
    $('.bauble').addClass('light');
    $('.star').addClass('star-light');
  })
  
  $('.container').on('mouseout', function(){
    $('.bauble').removeClass('light');
  })