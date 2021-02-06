(function($) {
	console.log("wahba");

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		console.log("test")
      $('#sidebar').toggleClass('active');
  });

})(jQuery);
