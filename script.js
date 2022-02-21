// const swup = new Swup()

// let threeD = document.querySelector('.threeD');

// document.addEventListener('mousemove', function(e) {
//   let xAxis = (window.innerWidth / 0.5 - e.pageX) / 10;
//   let yAxis = (window.innerHeight / 0.5 - e.pageY) / 5;
//   threeD.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
// });


const mediaQuery = window.matchMedia('(min-width: 768px)')

if(mediaQuery.matches){
  
  let aboutContainer = document.querySelector('.aboutContainer');
  let smithPhoto = document.querySelector('.smithPhoto');
  let threeDmove = document.querySelector('.threeDmove');
  document.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth  - e.pageX) / 50;
    let yAxis = (window.innerHeight  - e.pageY) / 50;
    smithPhoto.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
  });
  
  document.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth  - e.pageX) / 100;
    let yAxis = (window.innerHeight  - e.pageY) / 100;
    aboutContainer.style.transform = `translateY(${xAxis}px)  translateX(${yAxis}px)`;
  });
  document.addEventListener('mousemove', function(e) {
    let xAxis = (window.innerWidth  - e.pageX) / 50;
    let yAxis = (window.innerHeight  - e.pageY) / 50;
    threeDmove.style.transform = `translateY(${yAxis}px)  translateX(${xAxis}px)`;
  });
  
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
function Stellars(){
  swal("View Stellars Summer School Design?", {
    buttons: {
      
      catch: {
        text: "View Mobile Prototype",
        value: "mobile",
      },
      Desktop:{
        text:"View Desktop Prototype",
        value:"desktop",
      },
      
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        swal("Going to Desktop!");
        window.open("https://www.figma.com/proto/l7WJJOj9w5nCaL4ZlLjKWw/Stellars-School?node-id=91%3A5146&scaling=min-zoom&page-id=91%3A5145&starting-point-node-id=91%3A5146&show-proto-sidebar=1&hide-ui=1");
        

        break;
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/l7WJJOj9w5nCaL4ZlLjKWw/Stellars-School?node-id=93%3A2&scaling=min-zoom&page-id=91%3A5145&starting-point-node-id=93%3A2&hide-ui=1");
        break;
   
      default:
        break;
    }
  });
  
}
function Footrax(){
  swal("View Footrax?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile",
        value: "mobile",
      },
      Desktop:{
        text:"View Desktop",
        value:"desktop",
        
        
      },
      
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        swal("Going to Desktop!");
        window.open("https://www.figma.com/proto/MhCxKr4Yzyb0zIPlJsInvR/Footrax-Handoff?node-id=2%3A7&scaling=min-zoom&page-id=2%3A6&starting-point-node-id=2%3A7&hide-ui=1");
        break;
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/MhCxKr4Yzyb0zIPlJsInvR/Footrax-Handoff?node-id=2%3A572&scaling=min-zoom&page-id=2%3A6&starting-point-node-id=2%3A572&hide-ui=1");
        
        break;
      case "casestudy":
        
        window.open("/assets/case/Footrax.pdf");
        break;
      default:
        break;
    }
  });
  
}
function Festinger(){
  window.open("/assets/case/FestingerVault.pdf");
}
function Better(){
  window.open("/assets/case/BetterBarter.pdf");
}
function astro(){
  swal("View Astro Energy Guru?", {
    buttons: {
      
      Desktop:{
        text:"View Desktop Prototype",
        value:"desktop",
      },
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      }
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        window.open("https://www.figma.com/proto/m3exT64DSgaJqJVdubvpWs/Astro-Energy-Guru?node-id=208%3A2168&starting-point-node-id=208%3A2168&hide-ui=1");

        break;
   
      case "casestudy":
        window.open("/assets/case/AstroEnergyGuru.pdf");

        break;
      default:
        break;
    }
  });
}


function neofantasy(){
  swal("View NeoFanTasy?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile",
        value: "mobile",
      },
      Desktop:{
        text:"View Desktop",
        value:"desktop",
        
        
      },
      
    },
  })
  .then((value) => {
    switch (value) {
   
      case "desktop":
        swal("Going to Desktop!");
        window.open("https://www.figma.com/proto/koEiGCYfKuKBYgY4KjzcjO/NeoFantasy-Admin-%26-End-User-Web-Interface?node-id=453%3A1325&scaling=min-zoom&page-id=453%3A1324&starting-point-node-id=453%3A1325&hide-ui=1");
        break;
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/U7l9MqIsH04z6TscsC0GdS/NeoFantasy?node-id=465%3A594&scaling=scale-down&page-id=282%3A45&starting-point-node-id=289%3A664&hide-ui=1");
        
        break;
      case "casestudy":
        
        window.open("/assets/case/neofantasy.pdf");
        break;
      default:
        break;
    }
  });
  
}

function inforida(){
  swal("View Inforida?", {
    buttons: {
      casestudy:{
        text:"Case Study",
        value:"casestudy",
      },
      mobile: {
        text: "View Mobile Prototype",
        value: "mobile",
      },
        
     
    },
  })
  .then((value) => {
    switch (value) {
   
   
      case "mobile":
        swal("Going to Mobile");
        window.open("https://www.figma.com/proto/NGoAKdwhYRIX7xZoTINP3j/Smith-%7C-UX-Portfolio?node-id=416%3A5269&scaling=scale-down&page-id=416%3A1318&starting-point-node-id=416%3A5269&hide-ui=1");
        
        break;
      case "casestudy":
        
        window.open("/assets/case/inforida.pdf");
        break;
      default:
        break;
    }
  });
  
}

