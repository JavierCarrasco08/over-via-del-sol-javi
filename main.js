const $button__hamburger = document.getElementById('hamburger');
const $intro__nav = document.querySelector('.intro__nav');

$button__hamburger.addEventListener('pointerdown', () => {
  $button__hamburger.classList.toggle('active');
  $intro__nav.classList.toggle('active__nav');
});
