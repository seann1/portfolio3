

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

	// function httpGet(theUrl)
	// {
	//     var xmlHttp = null;

	//     xmlHttp = new XMLHttpRequest();
	//     xmlHttp.open( "GET", theUrl, false );
	//     xmlHttp.send( null );
	//     return xmlHttp.responseText;
	// }
	// var getresponse = httpGet("http://google.com");
	// $(".api").text(getresponse);

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