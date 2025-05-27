require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
        $('.home-banner-main-slick').slick({
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            swipe: true,
            draggable: true,
            touchThreshold: 5,
            lazyLoad: 'ondemand',
        });
    });
});
