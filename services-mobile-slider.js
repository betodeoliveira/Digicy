document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type   : 'loop',
      perMove: 1,
      perPage: 3,
      gap: '2%',
      padding: {right: '10%'},
      speed: 800,
      easing: 'cubic-bezier(.22,.48,.23,.92)',
      //fixedWidth : '20rem',
      pagination: true,
      focus: 'center',
      breakpoints: {
        991: {
        	perPage: 3,
          padding: '10%'
        },
        767: {
        	perPage: 2,
          padding: '10%'
        },
        479: {
          perPage: 1,
          padding: '10%'
        },
      },
      classes: {
        prev  : 'splide__arrow--prev',
        next  : 'splide__arrow--next',
        pagination: 'splide__pagination',
        page: 'splide__pagination__page is-outlined',
      },
    });
    splide.mount();
  } );