$(function ($) {
   "use strict";

   (function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){if(i.raw){return e}return decodeURIComponent(e.replace(t," "))}function r(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}e=n(e);try{return i.json?JSON.parse(e):e}catch(t){}}var t=/\+/g;var i=e.cookie=function(t,s,o){if(s!==undefined){o=e.extend({},i.defaults,o);if(typeof o.expires==="number"){var u=o.expires,a=o.expires=new Date;a.setDate(a.getDate()+u)}s=i.json?JSON.stringify(s):String(s);return document.cookie=[i.raw?t:encodeURIComponent(t),"=",i.raw?s:encodeURIComponent(s),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}var f=document.cookie.split("; ");var l=t?undefined:{};for(var c=0,h=f.length;c<h;c++){var p=f[c].split("=");var d=n(p.shift());var v=p.join("=");if(t&&t===d){l=r(v);break}if(!t){l[d]=r(v)}}return l};i.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==undefined){e.cookie(t,"",e.extend({},n,{expires:-1}));return true}return false}});

   if ($.cookie('policy-check') != '1') {
      setTimeout(function () {
         $('.cookie-notice').addClass('active');
         $('.cookie-notice').find('button').click(function () {
            $.cookie('policy-check', '1', {expires: 7, path: '/'});
            $('.cookie-notice').removeClass('active');
         });
      }, 10);
   }

   $(".custom-checkbox").on("click", function () {
      if ($('.custom-checkbox input').prop('checked')) {
         $('.contact-button').prop('disabled', false);
      } else {
         $('.contact-button').prop('disabled', true);
      }
   })

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });

   }
   $(document).on("scroll", onScroll);
   function onScroll(){
      let scrollPos = $(document).scrollTop();
      $('.nav-link-js').each(function () {
         let currLink = $(this);
         let refElement = $(currLink.attr("href"));
         if (refElement.position().top-200 <= scrollPos && refElement.position().top-200+ refElement.height() > scrollPos) {
            $('.nav-item').removeClass("active");
            currLink.parent().addClass("active");
         }
         else{
            currLink.removeClass("active");
         }
      });
   }

   $('.nav-link-js').on("click", function(e) {
      $('.nav-item').removeClass('active')
      e.preventDefault();
      let dest = $(this).attr("href");
      $(this).parent().addClass('active')
      if( $( window ).width() > 992) {
         if ($('.tw-head').hasClass('navbar-fixed')) {

            $("html, body").animate({
               'scrollTop': $(dest).offset().top - 95
            }, 1000);
         } else {
            $("html, body").animate({
               'scrollTop': $(dest).offset().top - 195
            }, 1000);
         }
      } else {
            $("html, body").animate({
               'scrollTop': $(dest).offset().top
            }, 1000);
      }
   });

   $(document).on('click', '[data-content-filter]', function(event) {
      event.preventDefault();
      $('[data-content-filter]').removeAttr('aria-selected').removeClass('active');
      $(this).addClass('active');
      switch ($(this).attr('aria-selected', 'true').attr('data-content-filter')) {
         case 'all':
            $('[data-item]').show();
            break;
         case 'lp':
            $('[data-item="lp"]').show();
            $('[data-item="rs"]').hide();
            $('[data-item="is"]').hide();
            break;
         case 'rs':
            $('[data-item="rs"]').show();
            $('[data-item="lp"]').hide();
            $('[data-item="is"]').hide();
            break;
         case 'is':
            $('[data-item="is"]').show();
            $('[data-item="lp"]').hide();
            $('[data-item="rs"]').hide();
            break;
      }
   });

   /*Main Slideshow*/
   $(".tw-hero-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      mouseDrag: false,
      smartSpeed: 1100,
      navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
   });

   /*Testimonial Slider*/
   $(".tw-testimonial-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: false,
      dots: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      mouseDrag: false,
      smartSpeed: 900,
   });

   /* Testimonial Slider */
   if ($(".testimonial-slider").length > 0) {
      $(".testimonial-slider").owlCarousel({
         items: 1,
         loop: true,
         autoplay: true,
         nav: false,
         dots: true,
         autoplayTimeout: 5000,
         autoplayHoverPause: true,
         mouseDrag: true,
         smartSpeed: 900,
      });
   };

   /* Testimonial Slider */
   if ($(".testimonial-carousel-gray").length > 0) {
      $(".testimonial-carousel-gray").owlCarousel({
         items: 2,
         margin: 20,
         loop: true,
         autoplay: true,
         nav: false,
         dots: true,
         autoplayTimeout: 5000,
         autoplayHoverPause: true,
         mouseDrag: true,
         smartSpeed: 900,
      });
   };
   /* Testimonial Box Carousel */
   if ($(".testimonial-box-carousel").length > 0) {
      $(".testimonial-box-carousel").owlCarousel({
         items: 3,
         margin: 20,
         loop: true,
         autoplay: true,
         nav: false,
         dots: true,
         autoplayTimeout: 5000,
         autoplayHoverPause: true,
         mouseDrag: true,
         responsiveClass: true,
         smartSpeed: 900,
         responsive: {
            0: {
               items: 1,
            },
            600: {
               items: 2,
            },
            1000: {
               items: 3,
            }
         }
      });
   };


   /* Counter UP */
   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });

   /* Client carousel */
   $(".clients-carousel").owlCarousel({
      items: 4,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      responsiveClass: true,
      autoplayHoverPause: true,
      mouseDrag: false,
      smartSpeed: 900,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 4,
         }
      }
   });

   /* Back to top */
   $(window).scroll(function () {
      if ($(this).scrollTop()) {
         $('.back-to-top button').fadeIn();
      } else {
         $('.back-to-top button').fadeOut();
      }
   });
   $(".back-to-top button").on('click', function () {
      $("html, body").animate({
         scrollTop: 0
      }, 1000);
   });

   /* Video Popup */
   if ($('.video-popup').length > 0) {
      $('.video-popup').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   };

   /* Our Mission Carousel */
   $('.mission-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      mouseDrag: false,
      smartSpeed: 900,
      animateOut: 'animated slideInRight',
      animateIn: 'animated slideInRight',
   });

   /* Map */
   if ($('#map').length > 0) {

      var contactmap = {
         lat: -37.816218,
         lng: 144.964068
      };

      $('#map')
         .gmap3({
            zoom: 12,
            center: contactmap,
            scrollwheel: false,
            mapTypeId: "shadeOfGrey",
            mapTypeControlOptions: {
               mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
         })

         .styledmaptype(
            "shadeOfGrey", [

               {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [{
                     "color": "#fefefe"
                  }, {
                     "lightness": 17
                  }, {
                     "weight": 1.2
                  }]
               },
               {
                  "featureType": "administrative",
                  "elementType": "geometry.fill",
                  "stylers": [{
                     "color": "#fefefe"
                  }, {
                     "lightness": 20
                  }]
               },
               {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#f2f2f2"
                  }, {
                     "lightness": 19
                  }]
               },
               {
                  "featureType": "all",
                  "elementType": "labels.icon",
                  "stylers": [{
                     "visibility": "off"
                  }]
               },
               {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": [{
                     "saturation": 36
                  }, {
                     "color": "#333333"
                  }, {
                     "lightness": 40
                  }]
               },
               {
                  "featureType": "all",
                  "elementType": "labels.text.stroke",
                  "stylers": [{
                     "visibility": "on"
                  }, {
                     "color": "#ffffff"
                  }, {
                     "lightness": 16
                  }]
               },
               {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#f5f5f5"
                  }, {
                     "lightness": 21
                  }]
               },
               {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 16
                  }]
               },
               {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 18
                  }]
               },
               {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 29
                  }, {
                     "weight": 0.2
                  }]
               },
               {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [{
                     "color": "#ffffff"
                  }, {
                     "lightness": 17
                  }]
               },
               {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#f5f5f5"
                  }, {
                     "lightness": 20
                  }]
               },
               {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [{
                     "color": "#e9e9e9"
                  }, {
                     "lightness": 17
                  }]
               }
            ], {
               name: "HQ"
            }
         )

         .marker({
            position: contactmap,
            icon: './images/icon/map_marker.png'
         })

         .infowindow({
            position: contactmap,
            content: "16122 Collins Street West. Victoria"
         })

         .then(function (infowindow) {
            var map = this.get(0);
            var marker = this.get(1);
            marker.addListener('click', function () {
               infowindow.open(map, marker);
            });
         });
   };

   /* Contact Form */
   $('#contact-form').submit(function () {

      var $form = $(this),
         $error = $form.find('.error-container'),
         action = $form.attr('action');

      $error.slideUp(750, function () {
         $error.hide();

         var $name = $form.find('.form-name'),
            $phone = $form.find('.form-phone'),
            $email = $form.find('.form-email'),
            $subject = $form.find('.form-subject'),
            $message = $form.find('.form-message');

         $.post(action, {
               name: $name.val(),
               phone: $phone.val(),
               email: $email.val(),
               subject: $subject.val(),
               message: $message.val()
            },
            function (data) {
               $error.html(data);
               $error.slideDown('slow');

               if (data.match('success') != null) {
                  $name.val('');
                  $phone.val('');
                  $email.val('');
                  $subject.val('');
                  $message.val('');
               }
            }
         );

      });

      return false;

   });

   /* Service List Box Slider */
   if ($(".service-list-carousel").length > 0) {
      $(".service-list-carousel").owlCarousel({
         items: 3,
         loop: true,
         margin: 10,
         autoplay: true,
         nav: true,
         navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
         dots: false,
         autoplayTimeout: 5000,
         autoplayHoverPause: true,
         mouseDrag: true,
         responsiveClass: true,
         smartSpeed: 900,
         responsive: {
            0: {
               items: 1,
            },
            600: {
               items: 2,
            },
            1000: {
               items: 3,
               margin: 5,
            }
         }
      });
   };

   /* On Hover Timeline Active Changed */
   $(".timeline-wrapper .row").hover(function () {
      $(".timeline-item").find(".timeline-badge").removeClass("active");
      $(this).find(".timeline-badge").addClass("active");
   });
   $(".timeline-wrapper .row").hover(function () {
      $(".timeline-item").find(".timeline-date").removeClass("active");
      $(this).find(".timeline-date").addClass("active");
   });

   /* On Click search bar */
   $(".tw-search i, .tw-offcanvas-menu i").on('click', function () {
      $(".search-bar").addClass('active');
   });
   $(".search-bar i.fa-close").on('click', function () {
      $(".search-bar").removeClass('active');
   });

   /* Onclick offcanvas menu visible */
   $(".tw-menu-bar").on("click", function () {
      $(".offcanvas-wrapper").addClass('active');
      $(".offcanvas-menu-overlay").addClass('menu-show');
   });
   $(".menu-close-btn, .offcanvas-menu-overlay").on("click", function () {
      $(".offcanvas-wrapper").removeClass('active');
      $(".offcanvas-menu-overlay").removeClass('menu-show');
   });

   /* Wow Initialize */
   new WOW().init();

   /* Accordion */
   function toggleIcon(e) {
      $(e.target)
         .prev('.card-header')
         .find(".faq-indicator")
         .toggleClass('fa-minus fa-plus');
   }
   $('#accordion').on('hidden.bs.collapse', toggleIcon);
   $('#accordion').on('shown.bs.collapse', toggleIcon);

   /* Navbar fixed */
   $(window).on('scroll', function () {
      if ($(window).scrollTop() > 400) {
         $('.tw-head, .tw-header').addClass('navbar-fixed');
      } else {
         $('.tw-head, .tw-header').removeClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 400) {
         setTimeout(() => {
            $('header').removeClass('off-canvas');
         }, 0);
      } else {
         setTimeout(() => {
            $('header').addClass('off-canvas');
         }, 0);
      }
   });

});
