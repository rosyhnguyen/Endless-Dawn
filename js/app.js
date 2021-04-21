// var apiEndpoint = 'http://3.23.96.181:3000/api/'
// var awsPath= 'https://myqclubdev.s3.amazonaws.com'
// var baseMarketingLink = 'http://3.23.96.181/'

// for production
var apiEndpoint = 'https://api.myqclub.ca/api/'
var awsPath= 'https://d3iptk7nqtz7oi.cloudfront.net'
var baseMarketingLink = 'https://business.myqclub.ca'


$(function () {
  var $carousel = $('.slider')
  var settings = {
    dots: false,
    arrows: true,
    slide: '.slick-slideshow__slide',
    slidesToShow: 3,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]')
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function () {
      $(this).css('opacity', 1)
    })

    //Set the opacity of the first and last partial slides.
    $(visibleSlides).first().prev().css('opacity', 0)
  }

  $carousel.slick(settings)
  $carousel.slick('slickGoTo', 1)
  setSlideVisibility()

  $carousel.on('afterChange', function () {
    setSlideVisibility()
  })

  $('.customSelect select').selectmenu()

  stickyHeader()
  $(window).resize(function () {
    stickyHeader()
  })

  function stickyHeader() {
    var shrinkHeader = 80
    if ($(window).width() >= 991) {
      $(window).scroll(function () {
        var scroll = getCurrentScroll()
        if (scroll >= shrinkHeader) {
          $('#header').addClass('sticky')
        } else {
          $('#header').removeClass('sticky')
        }
      })
      $(window).load(function () {
        var scroll = getCurrentScroll()
        if (scroll >= shrinkHeader) {
          $('#header').addClass('sticky')
        } else {
          $('#header').removeClass('sticky')
        }
      })
    }

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop
    }
  }

  $('.navbar-toggler').click(function () {
    if ($('#header').hasClass('sticky')) {
    } else {
      $('#header').addClass('sticky')
    }
  })
  // $("a").on('click', function(event) {
  //     if (this.hash !== "") {
  //       event.preventDefault();
  //       var hash = this.hash;
  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 800, function(){
  //         window.location.hash = hash;
  //       });
  //     }
  // });
})
