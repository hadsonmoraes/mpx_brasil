$('.carousel').slick(
  {
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  }
);

$('.carousel-servicos').slick(
  {
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }
);

$('.card-group2').slick(
  {
    autoplay: true,
    // infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }
);

$('.galeria-slide').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        // centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});