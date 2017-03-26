$(document).ready(function() {
    // sections includes all of the container divs that relate to menu items.
    var sections = $('.content');

    // Smooth scrolling of page
    (function() {
        $("#sidebar a").on("click", function(e) {
            // fetch element to scroll
            var elem = $("#"+this.href.split('#')[1]);
            $("body, html").animate({
                scrollTop: elem.offset().top
            }, 400);
            e.preventDefault();
        });
    })();

    // Highlight links over scrolling
    $(window).scroll(function() {
        var currentScroll, currentSec, currentSecId, divPosition;
        // currentScroll is the number of pixels the window has been scrolled
        currentScroll = $(this).scrollTop();
        
        // We check the position of each of the divs compared to the windows scroll positon
        sections.each(function() {
            // divPosition is the position down the page in px of the current section we are testing      
            divPosition = $(this).offset().top;

            // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
            // the -1 is so that it includes the div 1px before the div leave the top of the window.
            if (divPosition - 1 < currentScroll) {
                // We have either read the section or are currently reading the section so we'll call it our current section
                currentSec = $(this);
                // This is the bit of code that uses the currentSec as its source of ID
                currentSecId = currentSec.attr('id');
                $('a').removeClass('active');
                $('[href=\\#'+currentSecId+']').addClass('active');
            }
        })
    });
});