(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        $(".embed-response-ifreme").addClass("embed-response-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $("[data-toggle='tooltip']").tooltip();

        //jQuery sticky navigation
        $(".header-top").sticky({ topSpacing: 0 });


        //jQuery Smooth scroll 
        $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '66';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutQuint');
            event.preventDefault();
        });






    });

    jQuery(window).load(function() {

    });
}(jQuery));