(function($) {
		$(document).ready(function() {

			var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

			if(size) {
				$('img').each(function() {
					// firefox put property value between "
					var size_attr = $(this).data(size.replace(/"/g, ''));

					if(size_attr) {
						var img_url = $(this).attr('src').replace(/\d\d$/, size_attr);
						$(this).attr('src', img_url);
					}
				});
			}

			$('li').click(function(e) {
				var li = $(this);

				if ( !$(e.target).is('a') ){
					var link = $('a', li);
					window.location = link.attr('href');
				}

			});
		});
}(jQuery));
