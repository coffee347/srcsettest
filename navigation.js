let headerRoot = document.querySelector('header');

// Scrollspy
function Scrollspy(arg) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = (windowScroll / windowHeight) * 100;
    
    switch (arg) {
        case arg == "scrolled":
            return windowScroll;
        case arg == "height":
            return windowHeight;  
        case arg == "scrollPercentage":
            return scroll;
        default:
            return windowScroll;
    }
};

// Sticky header
window.addEventListener('scroll', function() {
    let sticky = Scrollspy('scrolled');
    let headerRoot = document.querySelector('header');

    if ( sticky > 105) {
        headerRoot.classList.add("header--dim");
    }
    
    if ( sticky < 105) {
        headerRoot.classList.remove("header--dim");
    } 
});


window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 993) {
        new Swiper('.ds-row-slider', {
            pagination: {
                el: '.ds-prizes-container .ds-swiper-pagination',
            },
        });

        console.info('Swiper slider initialized');
        
    } else {
        if (document.querySelector('.ds-row-slider').classList.contains('swiper-initialized')) {
            let allSliders = document.querySelectorAll('.ds-row-slider');

            allSliders.forEach(element => {
                element.swiper.destroy();  
                console.info('Swiper slider deactivated');
            });
            
            
        }
    }

    console.log(windowWidth);
});