jQuery(document).ready(function($) {

	// $(".headroom").headroom({
	// 	"tolerance": 20,
	// 	"offset": 50,
	// 	"classes": {
	// 		"initial": "animated",
	// 		"pinned": "slideDown",
	// 		"unpinned": "slideUp"
	// 	}
	// });
	$('#login').hide();
	$('#register').hide();



	$('#connexion').click(function(){
		$('#login').show();
		$('#home').hide();
		$('#contact').hide();
	});

	$('#regi-1').click(function(){
		$('#register').show();
		$('#login').hide();
		$('#home').hide();
	});

	$('.btn1').click(function(){
		$('#login').show();
		$('#home').hide();
		$('#register').hide();
	});
});