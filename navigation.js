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

let prizeSlider = new Swiper('.ds-illustrated-row');