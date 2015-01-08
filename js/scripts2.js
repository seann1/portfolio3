

$(document).ready(function() {



	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
	}); 

	$("#shuffle, #shuffle3, #shuffle4, #shuffle5, #shuffle6, #shuffle7, #shuffle8, #shuffle9, #shuffle10, #shuffle11, #shuffle12, #shuffle13, #shuffle14, #shuffle15, #shuffle16, #shuffle17, #shuffle18, #shuffle19").shuffleLetters();

	$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }

    if ($(this).scrollTop() >= 2000) {
        $('#return-to-top').css({"bottom": "12px", "right": "20px"});
    } else {
       $('#return-to-top').css({"bottom": "-135px", "right": "20px"}); 
    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});


});