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




let mobileMenu = document.querySelector('.ds-mobile-menu');
let mobileMenuTrigger = document.querySelector('#mobile-menu-trigger');
let mobileMenuClose = document.querySelector('#mobile-menu-close');

mobileMenuTrigger.addEventListener('click', function() {
    mobileMenu.classList.add('ds-mobile-menu--opened');
})

mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('ds-mobile-menu--opened');
})