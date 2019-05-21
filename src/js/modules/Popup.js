import $ from 'jquery';

const Popup = () => {
	const portfolioItem = $('.portfolio__item');
	const menu = $('.menu li');
	const popup = $('.popup');
	const back = $('.popup__back');
	const popupContentWrap = $('.popup__content');
	const siteBody = $('body');
	const prevBtn = $('.popup__arrow--prev');
	const nextBtn = $('.popup__arrow--next');


	portfolioItem.on('click', showPopup);
	menu.on('click', hidePopup);
	back.on('click', hidePopup);
	prevBtn.on('click', goPrev);
	nextBtn.on('click', goNext);

	function showPopup(e) {
		const portfolioSingle = $(this).parent().find('.portfolio-single').html();

		e.preventDefault();

		$(this).toggleClass('portfolio__item--active');

		popupContentWrap.html("");
		popupContentWrap.append(portfolioSingle);
		popup.addClass('popup--visible');
		siteBody.addClass('fixed');

		hideButtons();
	};

	function hidePopup() {
		popup.removeClass('popup--visible');
		siteBody.removeClass('fixed');
		$('.portfolio__item--active').removeClass('portfolio__item--active');
	}

	function goPrev() {
		$('.portfolio__item--active').removeClass('portfolio__item--active').parent().prev().find('.portfolio__item').addClass('portfolio__item--active');

		const nextItem = $('.portfolio__item--active').parent().find('.portfolio-single').html();

		popupContentWrap.html("");
		popupContentWrap.append(nextItem);

		hideButtons();
	}

	function goNext() {
		$('.portfolio__item--active').removeClass('portfolio__item--active').parent().next().find('.portfolio__item').addClass('portfolio__item--active');

		const nextItem = $('.portfolio__item--active').parent().find('.portfolio-single').html();

		popupContentWrap.html("");
		popupContentWrap.append(nextItem);

		hideButtons();
	}

	function hideButtons() {
		prevBtn.hide();
		nextBtn.hide();

		if( $('.portfolio__item--active').parent().prev().length !== 0 ) {
			prevBtn.show();
		};

		if( $('.portfolio__item--active').parent().next().length !== 0 ) {
			nextBtn.show();
		}

	}

}

export default Popup;