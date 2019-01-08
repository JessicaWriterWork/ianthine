(function( $ ) {

	// Plugin function.
	$.fn.semantic_aria_accordion = function(options) {
		$('#' + $(this).attr('id')).attr('data-semantic-aria-accordion-' + $(this).attr('id').replace(/_/g, '-'), '');

		$('#' + $(this).attr('id')).find('section').each(function() {
			$(this).attr('data-semantic-aria-accordion-section', '');
			$(this).attr('data-semantic-aria-accordion-section-' + $(this).attr('id').replace(/_/g, '-'), '');

			$(this).children().not(':first-child').wrapAll('<div data-semantic-aria-accordion-panel></div>');
		});

		$('#' + $(this).attr('id')).find('[data-semantic-aria-accordion-panel]').each(function() {
			$(this).attr('data-semantic-aria-accordion-panel-' + $(this).parent().attr('id').replace(/_/g, '-'), '');
			if($(this).children('section').length === 0) {
				$(this).attr('data-semantic-aria-accordion-panel-single', '');
			} else {
				$(this).attr('data-semantic-aria-accordion-panel-nested', '');
			}
		});

		$('#' + $(this).attr('id')).find(':header').each(function() {
			var tag = $(this).prop('tagName');
			var text = $(this).text();

			$(this).attr('data-semantic-aria-accordion-header', '');
			$(this).attr('data-semantic-aria-accordion-header-' + tag, '');

			var button = $('<button></button>');
			button.attr('type','button');
			button.attr('tabindex', '0');
			button.attr('data-semantic-aria-accordion-button', '');
			button.attr('data-semantic-aria-accordion-button-' + tag, '');
			button.text(text);

			$(this).empty();
			$(this).append(button);
		});

		$('#' + $(this).attr('id')).find('button').each(function() {
			$(this).click(function() {
				var panel = $(this).parent().next();
				if(panel.is(':visible')) {
					panel.hide();
				} else {
					panel.show();
				}
			});
		});
	};
}( jQuery ));
