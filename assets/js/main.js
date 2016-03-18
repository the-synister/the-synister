// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
var isWindows = navigator.platform.toUpperCase().indexOf('WIN')>=0;

if (isMac) {
    $('#download-button').attr('href', $('#download-button').attr('href') + '/synister-Mac-1.0.2.zip');
} else if (isWindows) {
    $('#download-button').attr('href', $('#download-button').attr('href') + '/synister-Win-1.0.2.exe');
} else {
    $('#mac-windows-support').addClass('hidden');
    $('#linux-support').removeClass('hidden');
}
