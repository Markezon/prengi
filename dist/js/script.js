const menu = document.querySelector('.nav'),
			burger = document.querySelector('.burger'),
			mobileBack = document.querySelector('.mobile-back'),
			overlay = document.querySelector('.overlay');

const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}

const initialMenu = () => {
	document.querySelector('.nav__list--dropdown').classList.remove('transformation');
	document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
	scrollTop();
}

const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

burger.addEventListener('click', () => {
	menu.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	initialMenu();
});

overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});

menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		e.target.closest('.nav__list').classList.add('transformation');
		e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('mobile-back__link')) {
		e.preventDefault();
		e.target.closest('.nav__list--dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		menu.classList.remove('open');
		overlay.classList.remove('open');
		unlockScroll();
	}
});

//slider

const slider = document.querySelector('.swiper-container');

let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
/*   breakpoints: {
    992: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 50,
    }
  }, */
});

const swiper2 = new Swiper('.swiper2', {
	// Optional parameters 
	slidesPerView: 1,
	loop: true,
	spaceBetween: 50, 
/* 	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	}, */ 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});

document.querySelector('.slide-to1').addEventListener('click', () => {
	swiper2.slideTo(1);
});

document.querySelector('.slide-to2').addEventListener('click', () => {
	swiper2.slideTo(2);
});

document.querySelector('.slide-to3').addEventListener('click', () => {
	swiper2.slideTo(3);
});

document.querySelector('.slide-to4').addEventListener('click', () => {
	swiper2.slideTo(4);
});

document.querySelector('.slide-to5').addEventListener('click', () => {
	swiper2.slideTo(5);
});

document.querySelector('.slide-to6').addEventListener('click', () => {
	swiper2.slideTo(6);
});