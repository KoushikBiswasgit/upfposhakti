const $ = jQuery.noConflict();



$(document).ready(function(){    

       /********Active MainMenu*************** */        
       $('.nav-link.active').removeClass('active').removeAttr('aria-current');
       $('a[href="' + location.pathname + '"]').addClass('active').attr('aria-current', 'page'); 




              

 });

 

 $('.marqueeNew').slick({
    slidesToScroll: 10,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    autoplaySpeed: 1000,
    infinite:true,   
});