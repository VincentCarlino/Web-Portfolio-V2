$(document).ready(function () {

	const o = $('.nav').outerHeight(true)/2;

	$(".home").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
            scrollTop: 0
        }, 800);
        clearOverlay();
	});

	$(".about").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
            scrollTop: $("#a").offset().top - o
        }, 800);
        clearOverlay();
	});

	$(".project").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
            scrollTop: $("#b").offset().top - o
        }, 800);
        clearOverlay();
	});

	$(".exp").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
            scrollTop: $("#c").offset().top - o
        }, 800);
        clearOverlay();
	});

	$(".art").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
            scrollTop: $("#d").offset().top - o
        }, 800);
        clearOverlay();
	});


	function clearOverlay(e) {
		const menu = document.getElementById("toggle");
		const overlay = document.getElementById("overlay");
		const bod = document.getElementById("body");
		menu.classList.remove("open");
		overlay.classList.remove("open");
		bod.classList.remove("scrollless");
	}
});

function openNav(e) {
	const menu = document.getElementById("toggle");
	const overlay = document.getElementById("overlay");
	const bod = document.getElementById("body");
	menu.classList.toggle("open");
	overlay.classList.toggle("open");
	bod.classList.toggle("scrollless");

}


