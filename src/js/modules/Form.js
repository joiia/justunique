
import $ from 'jquery';

const Form = () => {
	const inputWrapper = $('.form__input-wrapper input');

	inputSet();
	inputWrapper.on('focus', inputFocus);
	inputWrapper.on('blur', inputFocus);

	function inputSet() {
		if (inputWrapper.val()==="") {
			inputWrapper.parent().find('.form__input-placeholder').removeClass('form__input-placeholder--focus');
		}
	};

	function inputFocus() {
		if ($(this).val()==="") {
			$(this).parent().find('.form__input-placeholder').toggleClass('form__input-placeholder--focus');
		}
	};
}

export default Form;