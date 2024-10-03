let windowWidth = window.innerWidth;


var elms = document.getElementsByClassName( 'splide' );



if (windowWidth < 993) {
    for ( var i = 0; i < elms.length; i++ ) {
        new Splide( elms[ i ], {
              arrows: false,
              classes: {
                  pagination: 'ds-row-slider__pagination',
              }
          }).mount();
    }
}

window.addEventListener('resize', function() {
    if (windowWidth < 993) {
        // let ps = new Swiper('.ds-illustrated-row-ps5 .ds-row-slider', {
        //     spaceBetween: 20,
        //     pagination: {
        //         el: '.ds-swiper-pagination',
        //     },
        // });

        // ps.init();

        // let iphone = new Swiper('.ds-illustrated-row-iphone .ds-row-slider', {
        //     spaceBetween: 20,
        //     pagination: {
        //         el: '.ds-swiper-pagination',
        //     },
        // });

        // iphone.init();

        // let car = new Swiper('.ds-illustrated-row.car .ds-row-slider', {
        //     spaceBetween: 20,
        //     pagination: {
        //         el: '.ds-swiper-pagination',
        //     },
        // });
        // car.init();


    } else {
        // if (document.querySelector('.ds-row-slider').classList.contains('swiper-initialized')) {
        //     let allSliders = document.querySelectorAll('.ds-row-slider');

        //     allSliders.forEach(element => {
        //         element.swiper.destroy();
        //     });
        // }

    }
});


