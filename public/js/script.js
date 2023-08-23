

$(document).ready(function () {
  $(".jnp-accordion").click(function () {
    $(this).toggleClass("jnp-active");
    var panel = $(this).next();
    if (panel.is(":visible")) {
      panel.slideUp();
    } else {
      panel.slideDown();
    }
  });
});

// Initialize Slick Slider
$(document).ready(function () {
  $('.slick-slider').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true, // Ensure slider adjusts to image heights
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          arrows: false // Hide navigation arrows on mobile
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.our-customer-slider').slick({
    dots: false, // Add navigation dots
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    adaptiveHeight: true, // Ensure slider adjusts to image heights
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          arrows: false // Hide navigation arrows on mobile
        }
      }
    ]
  });
});

$(document).ready(function () {
  $(window).on('scroll', function () {
    $(".fade-up").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (position < scroll + windowHeight && !$(this).hasClass("fade-up-active")) {
        $(this).addClass("fade-up-active");
      }
    });
  });
});

// $(document).ready(function () {
//   var sidebar = $('.sidebar');
//   var footer = $('.release-sidebar'); // Replace with the actual selector for your footer
//   var stickyTop = sidebar.offset().top;
//   var footerTop = footer.offset().top - sidebar.outerHeight(); // Adjust for sidebar height

//   $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();

//     if (scrollTop > stickyTop && scrollTop < footerTop) {
//       sidebar.addClass('sticky');
//     } else {
//       sidebar.removeClass('sticky');
//     }
//   });
// });
