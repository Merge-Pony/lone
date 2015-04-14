'use strict'

function fitVid () {
    $('.fit-video').fitVids();
}

function backStretch () {
	$("#top").backstretch([
	    "img/bg.jpg"
	    , "img/bg1.jpg"
	    , "img/bg2.jpg"
	], {duration: 3000, fade: 750});
}

function menu() {
	$("#menu-close").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});

	// Opens the sidebar menu
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});
}

// Scrolls to the selected menu item on the page
function magnific() {
	$('.image-link').magnificPopup({ 
	  type: 'image',
	  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	  zoom: {
	    enabled: true, // By default it's false, so don't forget to enable it

	    duration: 300, // duration of the effect, in milliseconds
	    easing: 'ease-in-out', // CSS transition easing function 

	    // The "opener" function should return the element from which popup will be zoomed in
	    // and to which popup will be scaled down
	    // By defailt it looks for an image tag:
	    opener: function(openerElement) {
	      // openerElement is the element on which popup was initialized, in this case its <a> tag
	      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  }

	});
}

$(document).ready(function() {
    $(window).on("load", function() {
        fitVid();
        backStretch();
        menu();
        magnific();
    });
});