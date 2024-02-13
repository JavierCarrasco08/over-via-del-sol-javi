const $button__hamburger = document.getElementById('hamburger');
const $intro__nav = document.querySelector('.intro__nav');
const $intro__hero = document.querySelector('.intro__hero');

$intro__hero.addEventListener('pointerdown', (e) => {
  if (e.target.matches('#hamburger') || e.target.matches('span')) {
    $button__hamburger.classList.toggle('active');
    $intro__nav.classList.toggle('active__nav');
  }

  if (e.target.matches('.intro__a')) {
    setTimeout(() => {
      $button__hamburger.classList.toggle('active');
      $intro__nav.classList.toggle('active__nav');
    }, 250);
  }
});
