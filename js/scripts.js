$(document).ready(function() {

	$(".home-link").click(function() {
    $('html, body').animate({
   		scrollTop: $("#index").offset().top
    }, 700);
	});

	$(".portfolio-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 700);
	});

	$(".about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 700);
	});

	$(".contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 700);
	});

// add active class to li in navbar on click
	$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


//scroll to top on click of home link in navbar
	$("#index").click(function() {
		window.scrollTo(0, 0);
	});


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

	
	var timesRun = 0;
	
	var interval = setInterval(function() {
		timesRun += 1;
		if(timesRun === 5){
        clearInterval(interval);
    }
    $(".bluecloud1").glitch2();
	}, 8000);

	setInterval(function() {
		var d = new Date();
		var n = d.getTime();
		n = n.toString();
		if ((parseInt(n.charAt(10)) % 2 === 0) && (parseInt(n.charAt(9)) % 4 > 2) && (parseInt(n.charAt(11)) / 2 == 2))  {
			if ($('body').hasClass("demo")) {
			randomBackground = ["glitch-background", "glitch-background2", "glitch-background3", "glitch-background4", "glitch-background5"]
		} else {randomBackground = []};
				$(".body").addClass(randomBackground[Math.floor(Math.random() * randomBackground.length)]); 
		}
		else { $(".body").removeClass("glitch-background");
					 $(".body").removeClass("glitch-background2");
					 $(".body").removeClass("glitch-background3");
					 $(".body").removeClass("glitch-background4");
					 $(".body").removeClass("glitch-background5");

		}

	}, 20);

	setInterval(function() {
		var randomWord = ["<h1>Coder</h1>", "<h1>Designer</h1>", "<h1>Engineer</h1>", "<h1>Problem Solver</h1>", "<h1>Artist</h1>"]
		$("#subtitle").html(randomWord[Math.floor(Math.random() * randomWord.length)]).shuffleLetters();

	}, 5000);


	//audio

	var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sounds/sound3.wav');

  var audioElement1 = document.createElement('audio');
  audioElement1.setAttribute('src', 'sounds/sound1.wav');

  var audioElement2 = document.createElement('audio');
  audioElement2.setAttribute('src', 'sounds/sound4.wav');

  var audioElement3 = document.createElement('audio');
  audioElement3.setAttribute('src', 'sounds/sound5.wav');

  var audioElement4 = document.createElement('audio');
  audioElement4.setAttribute('src', 'sounds/sound6.wav');

  var audioElement5 = document.createElement('audio');
  audioElement5.setAttribute('src', 'sounds/sound7.wav');

  var audioElement6 = document.createElement('audio');
  audioElement6.setAttribute('src', 'sounds/sound8.wav');

  var audioElement7 = document.createElement('audio');
  audioElement7.setAttribute('src', 'sounds/sound9.wav');

  var randomSound = [audioElement, audioElement1, audioElement2, audioElement3, audioElement4, audioElement5, audioElement6, audioElement7];



        $('.play').click(function() {
        	var chosenSound = randomSound[Math.floor(Math.random() * randomSound.length)];
        	chosenSound.volume = 0.5;
            chosenSound.play();
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
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
    			position: myLatlng,
    			map: map,
    			title:"Sean"
				});

      }
      google.maps.event.addDomListener(window, 'load', initialize);


      









