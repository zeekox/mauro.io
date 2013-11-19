(function() {
		$(document).ready(function() {

			// make all link open new tabs/windows
			// but only when href begins with http (external) 
			$('a[href^="http"]').each(function(){
				$(this).attr('target', '_blank');
			});
		});
}());
