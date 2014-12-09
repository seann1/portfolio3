

$(document).ready(function() {



	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
	}); 


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

	$("#shuffle, #shuffle3, #shuffle4, #shuffle5, #shuffle6, #shuffle7, #shuffle8, #shuffle9, #shuffle10, #shuffle11, #shuffle12, #shuffle13, #shuffle14, #shuffle15, #shuffle16, #shuffle17, #shuffle18, #shuffle19").shuffleLetters();

	$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});


});