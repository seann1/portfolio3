$(document).ready(function() {
	ani();

	$("#shuffle").shuffleLetters();

	function revani() {
		$.when(
			$(".pinkcloud1").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)
		
		$.when(
			$(".pinkcloud2").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)

		$.when(
			$(".bluecloud1").animate({
	  	position: "relative",
	  	left: "+=4",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)
		
		$.when(
			$(".bluecloud2").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)

		$.when(
			$(".yellowcloud1").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)
		
		$.when(
			$(".yellowcloud2").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)
	};

  function ani() {
  	$.when(
	  	$(".pinkcloud1").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);

  	$.when(
	  	$(".pinkcloud2").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);

  	$.when(
	  	$(".bluecloud1").animate({
	  	position: "relative",
	  	right: "+=10",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);

  	$.when(
	  	$(".bluecloud2").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);

  	$.when(
	  	$(".yellowcloud1").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);

  	$.when(
	  	$(".yellowcloud2").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);
};


function randomtext() {
	var messages = [
	 "<img src='images/skull.png' class='skull'></img>", "<img src='images/jackolantern.png' class='skull'></img>"].reverse();

	$('.random-text').html(messages[Math.floor(Math.random() * messages.length)]).fadeIn(3000).delay(100).fadeOut(3000, randomtext);

};

randomtext();

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


	$('#turn-off').click(function() {
		$('.pinkcloud1').removeClass('pinkcloud1');
		$('.pinkcloud2').removeClass('pinkcloud2');
		$('.bluecloud1').removeClass('bluecloud1');
		$('.bluecloud2').removeClass('bluecloud2');
		$('.yellowcloud1').removeClass('yellowcloud1');
		$('.yellowcloud2').removeClass('yellowcloud2');
	});

	$('#turn-on').click(function() {
		location.reload();
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
			randomBackground = ["glitch-background", "glitch-background2", "glitch-background3", "glitch-background4", "glitch-background5"]
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

  var randomSound = [audioElement, audioElement1, audioElement2, audioElement3];



        $('.play').click(function() {
        	var chosenSound = randomSound[Math.floor(Math.random() * randomSound.length)];
        	chosenSound.volume = 0.5;
            chosenSound.play();
        });


});
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


      









