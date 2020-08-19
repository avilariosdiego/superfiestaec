//Funciones
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
            ) {
            var target = $(this.hash);
        target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate(
            {
                scrollTop: target.offset().top - 72,
            },
            1000,
            "easeInOutExpo"
            );
            return false;
        }
    }
});

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

//Preloader
window.onload = function () {
    var contenedor = document.getElementById('contenedor_loader');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

//WhatsApp
$(function () {
    var offset = 300,
    duration = 500,
    top_section = $('.to-top'),
    toTopButton = $('a.back-to-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $(top_section).fadeIn(duration);
        }
        else {
            $(top_section).fadeOut(duration);
        }
    });

    $(toTopButton).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
});

//Slide Animation
$(document).ready(function () {
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})