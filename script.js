function portfolio(){
    alert("portfolio clicked")
}

jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
    mouseX = e.pageX ;
    mouseY = e.pageY ; 
    });
    
    setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $(".cursor").css({left: xp +'px', top: yp +'px'});
    }, 20);

});