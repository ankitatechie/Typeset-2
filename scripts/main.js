(function() {

    // Smooth scrolling of page
    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference, perTick;
        difference = to - element.scrollTop;
        perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    document.addEventListener("click", function(event) {
        if (event.target.nodeName === 'A') {
            var elem, targetElement;
            elem = event.target;
            targetElement = document.getElementById(elem.href.split('#')[1]);
            event.preventDefault();
            scrollTo(document.body, targetElement.offsetTop, 250);
        }
    });


    // Highlight links over scrolling
    var sections = document.getElementsByClassName('content');
    window.addEventListener('scroll', function(e) {
        var currentScroll, currentSec, currentSecId, divPosition, tagElm, activeLink;
        // currentScroll is the number of pixels the window has been scrolled
        currentScroll = document.body.scrollTop;
        
        // We check the position of each of the divs compared to the windows scroll positon
        for (var i = 0; i < sections.length; i++) {
            // divPosition is the position down the page in px of the current section we are testing      
            divPosition = sections[i].offsetTop;

            // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
            // the -1 is so that it includes the div 1px before the div leave the top of the window.
            if (divPosition - 1 < currentScroll) {
                // We have either read the section or are currently reading the section so we'll call it our current section
                currentSec = sections[i];
                // This is the bit of code that uses the currentSec as its source of ID
                currentSecId = currentSec.id;
                tagElm = document.querySelectorAll('a');
                for (var j = 0; j < tagElm.length; j++) {
                    if (tagElm[j].className === 'active') {
                        tagElm[j].className = '';
                        break;
                    }
                }
                activeLink = document.querySelector('[href="#'+currentSecId+'"]');
                activeLink.classList = 'active';
            }
        }
    })
})();