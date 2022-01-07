const swup = new Swup()
function portfolio(){
   // alert('Coming Soon');
    // var about=document.getElementsByClassName('imageCard');
    // alert(about[0]);
    // about[0].style.display= "none"; 
    // navItem = document.getElementsByClassName('navItem');
    // other = document.getElementsByClassName('other');
    // other[0].style.color = 'black';
    // navItem[0].style.color = 'rgba(0,0,0,0.4)'   
    window.open("portfolio.html","_self")
    
    
 
}
function invisible(){
    document.body.style.cursor = "pointer";
    // alert('invisible called');
    swal(
        'Invisible UX?',
        'Users will complain about Bad UX & Praise Good UX, But Great UX is always invisible',
      ).then(function() {
        document.body.style.cursor = "none";
    });
 
}
// const el = document.querySelector(".imageCard");

// el.addEventListener("mousemove", (e) => {
//     let x = e.offsetX/100 + 'px';
//     let y = e.offsetY/100 + 'px';
//     console.log(x,y);
//     el.style.transform = "translateX(x)";
// //   el.style.transform = "translate('e.offsetX','e.offsetY')" ;
// });

