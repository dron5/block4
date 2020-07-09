/*****************************----Media-query`s----*******************************/

let handleMatchMedia = function (mediaQuery) {
  let paginator = document.querySelector('.swiper-container');
  let logo = document.querySelector('.logo-container');
  if (mediaQuery.matches) {
    paginator.classList.add('visible');
    logo.classList.remove('visible');
  } else {
    paginator.classList.remove('visible');
    logo.classList.add('visible');
  }
},
check = window.matchMedia('(min-width: 768px)');

handleMatchMedia(check);
check.addListener(handleMatchMedia);

/*****************************----Read more----**********************************/

let read_button = document.querySelector('.logo__show');
read_button.addEventListener('click', function () { 
  let block = document.querySelector('.logo-wrapper--closed');
  if (block) {
    block.classList.remove('logo-wrapper--closed')
    block.classList.add('logo-wrapper--opend');
    read_button.textContent = 'Скрыть';
    read_button.classList.remove('logo__show--more');
    read_button.classList.add('logo__show--less');
  } else {
    block = document.querySelector('.logo-wrapper--opend');
    block.classList.remove('logo-wrapper--opend')
    block.classList.add('logo-wrapper--closed');
    read_button.textContent = 'Показать всё';
    read_button.classList.remove('logo__show--less');
    read_button.classList.add('logo__show--more');
  }
});

/*****************************----Swiper----*************************************/

const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
}); 
