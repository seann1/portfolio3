

$(document).ready(function() {

  $(".portfolio-block").hover(function() {
    $(".inner-code-stripe").transition({width:'100%'}, 1000);
  }, function() {
    $(".inner-code-stripe").delay(500).transition({width:'1%'}, 1000);
  });

  $(".design-block").hover(function() {
    $(".inner-design-stripe").transition({width:'100%'}, 1000);
  }, function() {
    $(".inner-design-stripe").delay(500).transition({width:'1%'}, 1000);
  });

  $(".video-block").hover(function() {
    $(".inner-video-stripe").transition({width:'100%'}, 1000);
  }, function() {
    $(".inner-video-stripe").delay(500).transition({width:'1%'}, 1000);
  });

  $(".about-block").hover(function() {
    $(".inner-about-stripe").transition({width:'100%'}, 1000);
  }, function() {
    $(".inner-about-stripe").delay(500).transition({width:'1%'}, 1000);
  });

  $(".contact-block").hover(function() {
    $(".inner-contact-stripe").transition({width:'100%'}, 1000);
  }, function() {
    $(".inner-contact-stripe").delay(500).transition({width:'1%'}, 1000);
  });

  $(".code-hide-show").hide();
  $(".design-hide-show").hide();
  $(".video-hide-show").hide();
  $(".about-hide-show").hide();
  $(".contact-hide-show").hide();
  // $(".nav-hide-show").hide();
  
  $(".code").click(function() {
    $(".code-hide-show").toggle();
  });

  $(".design").click(function() {
    $(".design-hide-show").toggle();
  });

  $(".video-hide").click(function() {
    $(".video-hide-show").toggle();
  });

  $(".about-hide").click(function() {
    $(".about-hide-show").toggle();
  });

  $(".contact-hide").click(function() {
    $(".contact-hide-show").toggle();
  });

  // if ($(".code-hide-show").is(':visible')) {
  //   $(".nav-hide-show").show();
  // } else {}

  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
  };

  $(".large-home-screen, .large-add-screen, .large-settings-screen, .fd-style-tile, .fd-style-tile-variant").hide();

  $("#iphone-home-thumb").click(function() {
    $(".large-home-screen").show();
    $(".large-home-screen").center();
  });

  $("#iphone-add-thumb").click(function() {
    $(".large-add-screen").show();
    $(".large-add-screen").center();
  });

  $("#iphone-settings-thumb").click(function() {
    $(".large-settings-screen").show();
    $(".large-settings-screen").center();
  });

  $("#style-tile-thumb").click(function() {
    $(".fd-style-tile").show();
    $(".fd-style-tile").center();
  });

  $("#style-tile-variant-thumb").click(function() {
    $(".fd-style-tile-variant").show();
    $(".fd-style-tile-variant").center();
  });

  $(".fd-style-tile").click(function() {
    $(".fd-style-tile").hide();
  });

  $(".fd-style-tile-variant").click(function() {
    $(".fd-style-tile-variant").hide();
  });

  $(".large-home-screen").click(function() {
    $(".large-home-screen").hide();
  });

  $(".large-add-screen").click(function() {
    $(".large-add-screen").hide();
  });

  $(".large-settings-screen").click(function() {
    $(".large-settings-screen").hide();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

    $(".i-c-mail, .i-c-phone").tooltip();

      $(".vid-title-container").hover(function(){
    if (!$(this).hasClass('animated')) {
      $(this).dequeue().stop().transition({ perspective: '500px',
      rotateX: '30deg' }, 2000, "easeOutCubic");
    }
  }, function() {
      $(this).addClass('animated').transition({ rotateX: '0deg' }, "normal", "easeOutCubic", function() {
      $(this).removeClass('animated').dequeue();
    });
  });

  $(".icon-container").hover(function(){
    if (!$(this).hasClass('animated')) {
      $(this).dequeue().stop().transition({ perspective: '100px',
      rotateX: '30deg' });
    }
  }, function() {
      $(this).addClass('animated').transition({ rotateX: '0deg' }, "normal", "linear", function() {
      $(this).removeClass('animated').dequeue();
    });
  });

  // $.get(
  //   "https://api.github.com/repos/octokit/octokit.rb",
  //   {paramOne : 1, paramX : 'abc'},
  //   function(data) {
  //      alert('page content: ' + data);
  //   }
  // );

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop(),
        portfolioOffset = $('#portfolio').offset().top,
        portfolioDistance  = (portfolioOffset - scrollTop),
        aboutOffset = $("#about").offset().top,
        aboutDistance = (aboutOffset - scrollTop),
        contactOffset = $('#contact').offset().top,
        contactDistance = (contactOffset - scrollTop),
        homeOffset = $('#home').offset().top,
        homeDistance = (homeOffset - scrollTop);

        if (homeDistance > -100 && homeDistance < 100) {
          $(".nav").find(".active").removeClass("active");
          $(".home-link").addClass("active");
        } else if (portfolioDistance > -100 && portfolioDistance < 100) {
          $(".nav").find(".active").removeClass("active");
          $(".portfolio-link").addClass("active");
        } else if (aboutDistance > -100 && aboutDistance < 100) {
          $(".nav").find(".active").removeClass("active");
          $(".about-link").addClass("active");
        } else if (contactDistance > -100 && contactDistance < 100) {
          $(".nav").find(".active").removeClass("active");
          $(".contact-link").addClass("active");
        } else {

        }
  });

  $(".home-link").click(function() {
    scrollToDiv('home');
  });

  $(".portfolio-link").click(function() {
    scrollToDiv('portfolio');
  });

  $(".about-link").click(function() {
    scrollToDiv('about');
  });

  $(".contact-link").click(function() {
    scrollToDiv('contact');
  });

// add active class to li in navbar on click
//   $(".nav a").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
// });

function scrollToDiv(divid) {
  $('html, body').animate({
        scrollTop: $("#" + divid).offset().top - 50
    }, 700);
}

  $("#shuffle").shuffleLetters();

  var randomText = $(".randomized");

  randomText.shuffleLetters();

  setInterval(function() {
    var randomWord = ["<h1>Coder</h1>", "<h1>Designer</h1>", "<h1>Engineer</h1>", "<h1>Problem Solver</h1>", "<h1>Artist</h1>"];
    $("#subtitle").html(randomWord[Math.floor(Math.random() * randomWord.length)]).shuffleLetters();

  }, 5000);


  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  $("#shuffle, #shuffle3, #shuffle4, #shuffle5, #shuffle6, #shuffle7, #shuffle8, #shuffle9, #shuffle10, #shuffle11, #shuffle12, #shuffle13, #shuffle14, #shuffle15, #shuffle16, #shuffle17, #shuffle18, #shuffle19").shuffleLetters();

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(1000);       // If page is scrolled more than 50px
    } else {
        // $('.uparrow').animate({opacity: "0%"}, 3000);   // Else fade out the arrow
        $('#return-to-top').fadeOut(1000);
    }

    // if ($(this).scrollTop() >= 2000) {
    //     $('#return-to-top').css({"bottom": "12px", "right": "20px"});
    // } else {
    //    $('#return-to-top').css({"bottom": "-135px", "right": "20px"});
    // }

  });

  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });


});


//google maps
      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(45.422615, -122.716294);
        var mapOptions = {
          center: new google.maps.LatLng(45.422615, -122.716294),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title:"Sean"
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);


      









