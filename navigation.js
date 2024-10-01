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

let windowWidth = window.innerWidth;
if (windowWidth < 993) {
    new Swiper('.ds-row-slider', {
        pagination: {
            el: '.ds-swiper-pagination',
        },
    });
}


let absolutePositionedEl = document.querySelector('.main-banner-wrapper');
let mainSection = document.querySelector('.main-banner-wrapper section#main');

let nextSection = document.querySelector('section#need-for-traff');

let problematicElementPosition = '';

window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let mainSectionBottomCoord = windowHeight - mainSection.offsetTop - mainSection.offsetHeight;
    let nextSectionTop = nextSection.offsetTop;

    console.log(mainSectionBottomCoord);
    console.log(nextSectionTop);

    // if (nextSectionTop < mainSectionBottomCoord || nextSectionTop == problematicElementPosition) {
    //     problematicElementPosition = nextSectionTop;
    //     nextSection.style.marginTop = mainSectionBottomCoord - problematicElementPosition + 10 + 'px';
    // }
    
    // if (nextSectionTop >= mainSectionBottomCoord + 10) {
    //     nextSection.style.marginTop = 0;
    // }

    if (windowWidth < 993) {
        new Swiper('.ds-row-slider', {
            pagination: {
                el: '.ds-swiper-pagination',
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
});


let mobileMenu = document.querySelector('.ds-mobile-menu');
let mobileMenuTrigger = document.querySelector('#mobile-menu-trigger');
let mobileMenuClose = document.querySelector('#mobile-menu-close');

mobileMenuTrigger.addEventListener('click', function() {
    mobileMenu.classList.add('ds-mobile-menu--opened')
})

mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('ds-mobile-menu--opened')
})