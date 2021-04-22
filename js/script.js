$('.app-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode:true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    
  });

  var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');  
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');  
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),  
  prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 300,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button> prev</button>',
  nextArrow: '<button> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});


$(function () {

  $('#team-part .member .icon').click(function () {
      $('#team-part .member .text').fadeToggle();
  });
  $('#team-part .icon').click(function () {
      $('#team-part .member .icon i').toggleClass('fa-minus');
  });
  $('#team-part .icon').click(function () {
      $('#team-part .member .icon i').toggleClass('fa-plus');
  });
});

$('.testi-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});