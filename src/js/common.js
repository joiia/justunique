

class MobileMenu {
    constructor() {
    	this.burger = $('.burger');
    	this.menu = $('.menu');
    	this.wrap = $('.menu__wrapper');
    	this.bg = $('.menu__bg');

    	this.events();
    }

    events() {
    	this.burger.on('click', this.toggleMenu.bind(this));
    	this.bg.on('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
    	this.burger.toggleClass('burger--open');
    	this.menu.toggleClass('menu--open');
    	this.wrap.toggleClass('menu__wrapper--visible');
    	this.bg.toggleClass('menu__bg--visible');
    }
}

var mobileMenu = new MobileMenu();