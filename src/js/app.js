import burger from './modules/burger.js';
import animationScroll from './modules/anim-scroll.js';
import isWebp from './modules/webp.js';

window.addEventListener('DOMContentLoaded', () => {
  burger();
  isWebp();
  animationScroll();
});
