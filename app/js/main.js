(function() {
		$(document).ready(function() {

			var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

			$('img').each(function(index) {
				var img_url = $(this).attr('src').replace(/\d\d$/, $(this).data(size));
				$(this).attr('src', img_url);
			});

		});
}());
