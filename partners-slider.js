document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#splide-partners', {
      type   : 'loop',
      perMove: 1,
      perPage: 3,
      gap: '2%',
      padding: '0%',
      speed: 800,
      easing: 'cubic-bezier(.22,.48,.23,.92)',
      //fixedWidth : '20rem',
      pagination: false,
      focus: 'center',
      autoplay: "play",
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
          perPage: 2,
          focus: 2,
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