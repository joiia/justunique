
import $ from 'jquery';

const Form = () => {
	const inputWrapper = $('.form__input-wrapper input');
	inputWrapper.on('focus', inputFocus);
	inputWrapper.on('blur', inputFocus);

	function inputFocus() {
		console.log('Hello!');
		if ($(this).val()==="") {
			$(this).parent().find('.form__input-placeholder').toggleClass('form__input-placeholder--focus');
		}
	}
}

export default Form;