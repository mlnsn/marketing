$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            1000:{
                items:1,
                nav:true,
            }
        }
    })
});
