$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
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

    })
});


$('.dropdown').mouseenter(function(){
    $(this).children('.cust-drop').addClass('.show');
});
$('.dropdown').mouseleave(function(){
    $(this).children('.cust-drop').removeClass('.show');
});
