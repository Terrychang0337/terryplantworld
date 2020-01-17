$(document).ready(function() {

    //fullpage plugin 初始化
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage'],
        menu: '#js-menu',
        autoScrolling: false,
        fitToSection: false,

    });

    //logo change when scroll
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js--header");


        if (scrollDistance > 80) {
            $header.addClass("header--scrolling");
        } else {
            $header.removeClass("header--scrolling");
        }
        if (scrollDistance > 870) {
            // $("div").css({ "background-color": "red" });

            $(".plantbox__titlebar").css({ "animation-name": "grow", "animation-duration": "5s", "animation-animation-fill-mode": "both" });
        }


    })


    //fancybox initailization
    $('[data-fancybox="images"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs: {
            autoStart: true
        }
    });

    // rellax initialization
    if (screen.width > 960) {
        var rellax = new Rellax('.rellax', {
            center: true
        });

    }


    // wow initialization
    new WOW().init();


    //owl carousel initialization
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


});