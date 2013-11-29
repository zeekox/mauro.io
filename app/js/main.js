(function($) {
		$(document).ready(function() {

			var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

			$('img').each(function() {
				var img_url = $(this).attr('src').replace(/\d\d$/, $(this).data(size));
				$(this).attr('src', img_url);
			});

			$('li').click(function(e) {
				var li = $(this);

				if ( !$(e.target).is('a') ){
					var link = $('a', li);
					window.location = link.attr('href');
				}

			});
		});
}(jQuery));
