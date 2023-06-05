import React, { useEffect } from 'react';
import $ from 'jquery'; 
window.jQuery = $;
import 'slick-carousel';
import 'meanmenu';

const MyComponent = () => {
  useEffect(() => {
    $(document).ready(() => {
      $('body').css('overflow-y', 'hidden');
      $('#preloader').delay(2000).fadeOut('slow', () => {
        $(this).remove();
        $('body').css('overflow-y', 'auto');
      });
    });

    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: '992',
    });

    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop();
      const logoSrc = 'images/logo/site-logo/logo_white.png';
      if (scrollTop >= 300) {
        $('.menu-header').addClass('menu-header-dark');
        $('img.logo').attr('src', logoSrc);
      } else {
        $('.menu-header').removeClass('menu-header-dark');
        $('img.logo').attr('src', 'images/logo/site-logo/logo.png');
        $('.home-02-menu-header img.logo').attr('src', logoSrc);
      }
    });

    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });

    $('.review-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      nextArrow: '<button class="slide-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
      prevArrow: '<button class="slide-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $('.companies-logo').slick({
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $('.home-slider').slick({
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 1000,
      prevArrow: '<button class="slick-prev slick-arrow"><i class="fas fa-long-arrow-alt-left"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow"><i class="fas fa-long-arrow-alt-right"></i></button>',
    });

    // Rest of the code...
  }, []);

  return <div>Hello, World!</div>;
};

export default MyComponent;

