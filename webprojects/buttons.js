$(document).ready(function () {
	$('.buttons').hide();
	 $(window).scroll(function() {

    if ($(this).scrollTop()===0)
     {
        $('.buttons').fadeOut();
     }
    else
     {
      $('.buttons').fadeIn();
     }
 });
	
	$(home).click(function(e) {
		e.preventDefault();
		$('html,body').animate({
            scrollTop: 0
        }, 800);
	});
	
	// $(noem).click(function(e) {
	// 	e.preventDefault();
	// 	console.log(e);
	// });
});