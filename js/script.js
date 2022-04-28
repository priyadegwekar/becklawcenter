// Owlcarousel
$(document).ready(function(){
    $(".owl-one").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
//   Testimnoal Slider

    $(".owl-two").owlCarousel({
        center: true,
        loop:true,
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true,
        responsive : {
            0 : {
              items: 1,
              slideBy: 1
            },
            768 : {
              items: 2,
              slideBy: 2
            },
            1024 : {
              items:2,
              slideBy: 2
            },
          }
        
    });
    
});

//Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
