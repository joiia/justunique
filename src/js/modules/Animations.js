
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

const Animations = () => {

	const controller = new ScrollMagic.Controller();

	const item = $('.bg-svg');
	const bg = $('.section--img');
	const logo = $('.section--img .logo__img');
	const about = $('.about');
	const slogan = $('.logo__slogan');
	const features = $('#features')
	const featuresTitles = $('.features .col');
	const featuresIcons = $('.features .col-4');
	const title = $('.title, .list li, .text, #contact div, .fade-in');
	const price = $('#price');
	const priceItems = $('#price .item');
	const priceDesc = $('#price .block');
	const priceDescList = $('#price .block li');

	const BGAnimation = (() => {
		const tl = new TimelineMax()
		.fromTo(item, 1, {scale:'1',opacity:'1'}, {scale:'2', opacity:'0.3'}, 0)
		.to(bg, 1, {background: '#f0f0f0'}, 0)
		.fromTo(logo, 1, {scale:'1', top: '0'}, {scale:'3', top: '100px'}, 0.1)
		.fromTo(about, 0.1, {scale: 1, right: '0', opacity:'1'}, {scale: 1.2, right: '-250px', opacity:'0'}, 0)
		.to(slogan, 0.1, {scale: 1.2, opacity:'0'}, 0)

		const scroll = new ScrollMagic.Scene({
			triggerElement: bg, 
			triggerHook: 0,
			duration: '100%'
		})
		// .addIndicators({
		// 	name: 'mainscreen',
		// 	colorTrigger: 'green'
		// })
		.setTween(tl)
		.addTo(controller);
	})();

	const FeaturesAnimation = (() => {
		const tl = new TimelineMax()
		.staggerFrom(featuresTitles, 1, {top: '-50px', opacity: '0'}, 0.3)
		
		const scroll = new ScrollMagic.Scene({
			triggerElement: features, 
			triggerHook: 0.5,
			duration: '0',
			reverse: false
		})
		.setTween(tl)
		.addTo(controller);
	})();

	const TitleAnimation = (() => {
		title.each(function(){
			const item = $(this);
			const scrollDesc = new ScrollMagic.Scene({
				triggerElement: item, 
				triggerHook: 1,
				duration: '0',
				reverse: false
			})
			.setClassToggle(item, 'visible')
			.addTo(controller);
		});
	})();

	const PriceAnimation = (() => {
		priceItems.each(function(){
			const item = $(this);
			const scrollDesc = new ScrollMagic.Scene({
				triggerElement: item, 
				triggerHook: 1,
				duration: '0',
				reverse: false,
			})
			.setClassToggle(item, 'visible')
			.addTo(controller);
		});
	})();



}

export default Animations;