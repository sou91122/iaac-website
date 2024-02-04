$( document ).ready(function() {

    // sticky 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $(".top").addClass("sticky");
        } else {
            $(".top").removeClass("sticky");
        }
    });



// scroll-to-top-area-start
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
    } else {
        $(scrollTop).css("opacity", "0");
    }
})
$(scrollTop).click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
// scroll-to-top-area-end


    // //Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });
    //  //Menu On Hover

    // dropdown
    $('.dropdown-menu a.dropdown-toggle').click(function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
    });
    //dropdown


    // main-slider-starts //
    $('#main-slider').slick({
        dots: false,
        fade: true,
        // infinite: false,
        speed: 1500,
        cssEase: 'ease',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
// main-slider-ends //


// overall-scrollbars
$(function(){
    $('#about-area .content-area').overlayScrollbars(
        {scrollbars:{autoHide:"leave",autoHideDelay:1000}});
});

$(function(){
    $('.membershipformdiv').overlayScrollbars(
        {scrollbars:{autoHide:"leave",autoHideDelay:1000}});
});

// sponsors-area-start
$('#sponsor-slide').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:2300,
    dotsSpeed:2000,
    responsive:{0:
        {items:1},
        600:{items:3},
        1000:{items:4}
    }})


    // events-area-starts
    $('#events-carousel').owlCarousel({
        loop:true,
        margin:18,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        smartSpeed: 2400,
        dotsSpeed: 2500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })


});
$ (window).ready (function () {
    setTimeout (function () {
        $ ('#iaacwindowmodal').modal ("show")
    })
})

$('.partner-listed').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    dots: false,
    nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
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

$('.patronslist').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    dots: false,
    nav:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
});

$(document).ready(function() {
    $('.gallerysection').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            
        },
        gallery: {
            enabled: true
        },
       
        
    });
});