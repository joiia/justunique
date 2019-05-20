
import $ from 'jquery';

const OnScroll = () => {
    window.onscroll = function() {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const logo = $('.logo__img');
      const bgSvg = $('.bg-svg');
      const content = $('.section--main .container');

      if (scrolled > 50) {
        logo.css('animation', 'none');
        bgSvg.css('animation', 'none');
        content.css('animation', 'none');
    }
}

}

export default OnScroll;