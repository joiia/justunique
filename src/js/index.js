
import $ from 'jquery';
import SmoothScroll from 'smooth-scroll';

import Menu from './modules/Menu.js';
import OnScroll from './modules/OnScroll.js';
import Animations from './modules/Animations.js';
import Form from './modules/Form.js';

const menu = new Menu;
const animations = new Animations;
const form = new Form;
const onScroll = new OnScroll;


const scroll = new SmoothScroll('a[href*="#"]');



