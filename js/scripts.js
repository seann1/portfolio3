$(document).ready(function() {
	ani();

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
	  	left: "+=1000",
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
	  	right: "+=100",
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

});