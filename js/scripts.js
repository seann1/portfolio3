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

});