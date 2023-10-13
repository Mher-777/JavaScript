var defaults = {

	events: () => {
		$('.header__slide').on('click', function (e) {
			e.preventDefault()
			const $this = $(this)
			const attr = $(this).find('img').attr('alt')
			const content = $this.closest('.header').find('.header__info')
			$("." + e.currentTarget.className).removeClass('is-active')
			$this.addClass('is-active')

			content.fadeOut(200, function() {
				$(this).html(attr).fadeIn(200);
			});
		})

		$(".js-stars").rateYo();
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }