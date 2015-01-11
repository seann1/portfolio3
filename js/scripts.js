

$(document).ready(function() {

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
  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

function scrollToDiv(divid) {
  $('html, body').animate({
        scrollTop: $("#" + divid).offset().top - 50
    }, 700);
}

  $("#shuffle").shuffleLetters();


//show phone and email on click of icons in footer
$(".fa-phone").click(function() {
  $(".fa-phone").addClass("hidden");
  $(".phone").removeClass("hidden");
});

$(".phone").click(function() {
  $(".phone").addClass("hidden");
  $(".fa-phone").removeClass("hidden");
});

$(".fa-envelope").click(function() {
  $(".fa-envelope").addClass("hidden");
  $(".email").removeClass("hidden");
});

$(".email").click(function() {
  $(".email").addClass("hidden");
  $(".fa-envelope").removeClass("hidden");
});



  var randomText = $(".randomized");

  randomText.shuffleLetters();
  $(".randomized").glitch();

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

    if ($(this).scrollTop() >= 2000) {
        $('#return-to-top').css({"bottom": "12px", "right": "20px"});
    } else {
       $('#return-to-top').css({"bottom": "-135px", "right": "20px"});
    }

  });

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

        if (homeDistance > -50 && homeDistance < 50) {
          $(".nav").find(".active").removeClass("active");
          $(".home-link").addClass("active");
        } else if (portfolioDistance > -50 && portfolioDistance < 50) {
          $(".nav").find(".active").removeClass("active");
          $(".portfolio-link").addClass("active");
        } else if (aboutDistance > -50 && aboutDistance < 50) {
          $(".nav").find(".active").removeClass("active");
          $(".about-link").addClass("active");
        } else if (contactDistance > -50 && contactDistance < 50) {
          $(".nav").find(".active").removeClass("active");
          $(".contact-link").addClass("active");
        } else {

        }
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


      









