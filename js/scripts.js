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



  var randomText = $(".randomized")

  randomText.shuffleLetters();
  $(".randomized").glitch();

  setInterval(function() {
    var randomWord = ["<h1>Coder</h1>", "<h1>Designer</h1>", "<h1>Engineer</h1>", "<h1>Problem Solver</h1>", "<h1>Artist</h1>"]
    $("#subtitle").html(randomWord[Math.floor(Math.random() * randomWord.length)]).shuffleLetters();

  }, 5000);


  //audio

});


//google maps
      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(45.422615, -122.716294);
        var mapOptions = {
          center: new google.maps.LatLng(45.422615, -122.716294),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title:"Sean"
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);


      









