(function($) {
	
	$.fn.flipNav = function(options) {

		options = $.extend({
			speed : 200
		}, options);
	
		return this.each(function() {
					
			var nav = $(this),
				lis = $('li', nav),
				anchors = $('a', lis).css('padding', 0),
				spanHeight;

			$.each(anchors, function() {
				var a = $(this),
					val = a.text();

				a.html('<span>' + val + '</span> <span>' + val + '</span>')
				 .parent('li')
					.height(a.children('span:first').outerHeight())
				 .end()
				 .children('span:first')
					.css('marginTop', 0) // strange for IE
			});	

			spanHeight = lis.eq(0).height();
			
			lis.hover(function() {
				$(this).find('span:first').animate({
					marginTop : '-' + spanHeight
				}, { duration: options.speed, queue : false });
			}, function() {
				$(this).find('span:first').animate({
					marginTop : 0
				}, { duration: options.speed, queue: false });
			});

		}); // end each
	
	}
	
})(jQuery);