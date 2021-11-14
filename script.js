function portfolio(){
   // alert('Coming Soon');
    // var about=document.getElementsByClassName('imageCard');
    // alert(about[0]);
    // about[0].style.display= "none"; 
    // navItem = document.getElementsByClassName('navItem');
    // other = document.getElementsByClassName('other');
    // other[0].style.color = 'black';
    // navItem[0].style.color = 'rgba(0,0,0,0.4)'   
    swal("I am still working on this one!");
 
}
function invisible(){
    // alert('invisible called');
    swal(
        'Invisible UX?',
        'Users will complain about Bad UX & Praise Good UX, But Great UX is always invisible',
        
        
      );
}
// const el = document.querySelector(".imageCard");

// el.addEventListener("mousemove", (e) => {
//     let x = e.offsetX/100 + 'px';
//     let y = e.offsetY/100 + 'px';
//     console.log(x,y);
//     el.style.transform = "translateX(x)";
// //   el.style.transform = "translate('e.offsetX','e.offsetY')" ;
// });

jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
    mouseX = e.pageX ;
    mouseY = e.pageY ; 
    });
    
    setInterval(function(){
    xp += ((mouseX - xp)/4);
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