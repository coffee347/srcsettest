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

    if (nextSectionTop < mainSectionBottomCoord || nextSectionTop == problematicElementPosition) {
        problematicElementPosition = nextSectionTop;
        nextSection.style.marginTop = mainSectionBottomCoord - problematicElementPosition + 10 + 'px';
    }
    
    if (nextSectionTop >= mainSectionBottomCoord + 10) {
        nextSection.style.marginTop = 0;
    }

    if (windowWidth < 993) {
        let ps = new Swiper('.ds-illustrated-row-ps5 .ds-row-slider', {
            pagination: {
                el: '.ds-swiper-pagination',
            },
        });

        ps.init();

        let iphone = new Swiper('.ds-illustrated-row-iphone .ds-row-slider', {
            pagination: {
                el: '.ds-swiper-pagination',
            },
        });

        iphone.init();

        let car = new Swiper('.ds-illustrated-row.car .ds-row-slider', {
            pagination: {
                el: '.ds-swiper-pagination',
            },
        });
        car.init();
        
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
