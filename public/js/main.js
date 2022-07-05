/*-----------------------------------------------------------------------------------

    Theme Name: BioBayter
    Theme URI: http://
    Description: Your NFTs for Life
    Version: 1.0

-----------------------------------------------------------------------------------*/

// == Table Of Content
//
//	01 Navbar scrollIt
//	02 nav-toggle
//	03 portfolio taps
//	04 portfolio mixitup
//	05 services carousel
//  06 - progress bar
  
$(function(){
    
    "use strict";
    var wind = $(window);

/* ----------------------------------------------------------------
                [ 01 Navbar ( scrollIt ) ]
-----------------------------------------------------------------*/
$.scrollIt({
    upKey: 38,                // key code to navigate to the next section
    downKey: 40,              // key code to navigate to the previous section
    easing: 'swing',          // the easing function for animation
    scrollTime: 800,          // how long (in ms) the animation takes
    activeClass: 'active',    // class given to the active nav element
    onPageChange: null,       // function(pageIndex) that is called when page is changed
    topOffset: -70            // offste (in px) for fixed top navigation
  });
    
/* ----------------------------------------------------------------
                [ 02 nav-toggle ]
-----------------------------------------------------------------*/
    
     // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 10){

            navbar.addClass("nav-fix");
            logo.attr('src', 'img/logo.png');

        }else{

            navbar.removeClass("nav-fix");
            logo.attr('src', 'img/dark-logo.png');
        }
        
    });
    
    //Hide menu when click on ul object
    $("#navbarNavDropdown a").on("click", function(){
        $( ".navbar-toggler" ).trigger( "click" );
    })

    $(".navbar-toggler").on("click", function(){
        $(this).toggleClass("active");
    })
    
    $(".navbar .search").on("click", function(){
        $(".navbar .search-input").toggleClass("active");
    })
    
/* ----------------------------------------------------------------
                [ 03- portfolio taps ]
-----------------------------------------------------------------*/
    $('.portfolio .taps span').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    
/* ----------------------------------------------------------------
                [ 04 - portfolio mixitup ]
-----------------------------------------------------------------*/
    var containerEl = document.querySelector('.portfolio .items');
    var mixer = mixitup(containerEl);

/* ----------------------------------------------------------------
                [ 05 - services carousel ]
-----------------------------------------------------------------*/
    $('.clients .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        responsiveClass:true,
        dots: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
    });
   
/* ----------------------------------------------------------------
                [ 06 - snake effect ]
-----------------------------------------------------------------*/
$('header .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    responsiveClass:true,
    dots: false,
    animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
});
});

$(window).on("load",function (){
    $(".loader").fadeOut(1000);
});


// Slider 
$(document).ready(function() {

    var owl = $('.header .owl-carousel');


    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500
    });

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
       $('h4').removeClass('animated fadeInDown fadeInUp fadeInLeft');
       $('h1').removeClass('animated fadeInUp fadeInRight');
       $('.slider-line').removeClass('animated zoomIn fadeInUp');
       $('p').removeClass('animated fadeInDown fadeInUp flipInX');
       $('.butn').removeClass('animated zoomIn fadeInUp flipInY');
       $('.img').removeClass('animated zoomIn fadeInUp');

        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInDown');
        
//        $('.agency .owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInDown');
//        $('.agency .owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
//        $('.agency .owl-item').not('.cloned').eq(item).find('.slider-line').addClass('animated zoomIn');
//        $('.agency .owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated flipInY');
        $('.owl-item').not('.cloned').eq(item).find('.img').addClass('animated zoomIn');
    });
});

let sendEmail=()=>{
    const name=document.getElementById("form_name").value;
    const phone=document.getElementById("form_phone").value;
    const email=document.getElementById("form_email").value;
    const subject=document.getElementById("form_subject").value;
    const message=document.getElementById("form_message").value;
    fetch("/getInTouch", {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
        body: `name=${name}&phone=${phone}&email=${email}&subject=${subject}&message=${message}`
      }).then(res => {
        alert("It has been sent your message, we will soon contact you");
      });
};