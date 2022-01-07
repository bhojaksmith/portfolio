// const swup = new Swup()

// let threeD = document.querySelector('.threeD');

// document.addEventListener('mousemove', function(e) {
//   let xAxis = (window.innerWidth / 0.5 - e.pageX) / 10;
//   let yAxis = (window.innerHeight / 0.5 - e.pageY) / 5;
//   threeD.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
// });

let imageCard = document.querySelector('.imageCard');
let smithPhoto = document.querySelector('.smithPhoto');
let threeDmove = document.querySelector('.threeDmove');

document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth  - e.pageX) / 50;
  let yAxis = (window.innerHeight  - e.pageY) / 50;
  smithPhoto.style.transform = `translateY(${yAxis}px)  translateX(${xAxis}px)`;
});

document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth  - e.pageX) / 100;
  let yAxis = (window.innerHeight  - e.pageY) / 100;
  imageCard.style.transform = `translateY(${yAxis}px)  translateX(${xAxis}px)`;
});
document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth  - e.pageX) / 50;
  let yAxis = (window.innerHeight  - e.pageY) / 50;
  threeDmove.style.transform = `translateY(${yAxis}px)  translateX(${xAxis}px)`;
});

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
