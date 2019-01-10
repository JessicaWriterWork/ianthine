(function( $ ) {

	// Plugin function.
	$.fn.semantic_aria_accordion = function(options) {
		var root = $('#' + $(this).attr('id'));
		root.wrapInner('<div class="semantic-aria-accordion"></div>');

		root.find('section').each(function() {
			$(this).children().not(':first-child').wrapAll('<div/>');
		});

		root.find(':header').each(function() {
			var button = $('<button/>');
			button.attr('type','button');
			button.attr('tabindex', '0');
			button.text($(this).text());

			$(this).empty();
			$(this).append(button);
		});

		root.find('button').each(function() {
			$(this).click(function() {
				var panel = $(this).parent().next();
				if(panel.is(':visible')) {
					panel.hide();
				} else {
					panel.show();
				}
			});
		});

		var css_number_regex = /^([0-9]+([,.][0-9]+)?)(em|px)$/g;
		var border_width_matches = css_number_regex.exec(options.border_width);
		var half_border_width = (parseFloat(border_width_matches[1]) / 2) + border_width_matches[3];
		$('.semantic-aria-accordion').css('border-width', half_border_width);
		$('.semantic-aria-accordion :header').css('border-width', half_border_width);
		$('.semantic-aria-accordion :header + div').css('border-width', half_border_width);

		$('.semantic-aria-accordion').css('border-color', options.border_color);
		$('.semantic-aria-accordion :header').css('border-color', options.border_color);
		$('.semantic-aria-accordion :header + div').css('border-color', options.border_color);

		$('.semantic-aria-accordion :header button').css('padding', options.padding);
		$('.semantic-aria-accordion :header + div').css('padding', options.padding);

		root.find('section').each(function() {
			if($(this).find('section').length > 0) {
				$(this).children('div').css('border', 'none');
				$(this).children('div').css('padding', '0');
			}
		});
	};
}( jQuery ));
