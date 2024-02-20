const divmenu = document.querySelector('.menu');
const height = divmenu.clientHeight;

const divSlide = document.querySelector('.slide');
divSlide.computedStyleMap.height = document.body.clientHeight - height + 'px'

const divback = document.querySelector('.back');
divback.computedStyleMap.height = document.body.clientHeight - height + 'px'
