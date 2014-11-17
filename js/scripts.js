$(document).ready(function() {
	ani();

	function revani() {
		$.when(
			$("#cloud").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani)
	};

  function ani() {
  	$.when(
	  	$("#cloud").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani);
};
ani2();

function revani2() {
		$.when(
			$("#cloud2").animate({
	  	position: "relative",
	  	left: "+=1000",
	  	height: "100px",
	  	}, 2000)
	  	).then(ani2)

	};

  function ani2() {
  	$.when(
	  	$("#cloud2").animate({
	  	position: "relative",
	  	right: "+=100",
	  	height: "90px",
	  	}, 2000)
  	).then(revani2);
};


function randomtext() {
	var messages = [
	"#", "<img src='images/skull.png' class='skull'></img>", "<img src='images/jackolantern.png' class='skull'></img>", "^", "%"].reverse();

	$('.random-text').html(messages[Math.floor(Math.random() * messages.length)]).fadeIn(3000).delay(100).fadeOut(3000, randomtext);

};

randomtext();

});