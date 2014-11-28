$(document).ready(function() {

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

});