$("#todo").keyup(function(){
    
  
    $("#typing").text( 'Typing:'.concat($(this).val()));
  
  });