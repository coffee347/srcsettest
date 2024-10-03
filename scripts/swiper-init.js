let windowWidth = window.innerWidth;
if (windowWidth < 993) {
    new Swiper('.ds-row-slider', {
        pagination: {
            el: '.ds-swiper-pagination',
        },
    });
}

window.addEventListener('resize', function() {
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
    } else {
        if (document.querySelector('.ds-row-slider').classList.contains('swiper-initialized')) {
            let allSliders = document.querySelectorAll('.ds-row-slider');

            allSliders.forEach(element => {
                element.swiper.destroy();
            });
        }
    }
});
