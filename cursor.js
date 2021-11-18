jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
    mouseX = e.pageX ;
    mouseY = e.pageY ; 
    });
    
    setInterval(function(){
    xp += ((mouseX - xp)/5);
    yp += ((mouseY - yp)/5);
    $(".cursor").css({left: xp +'px', top: yp +'px'});
    }, 20);

});

$(document).ready(function(){
    $(".showSocial").click(function(){
      $(".social").slideToggle();
      $(".social").toggle();
    });
  });