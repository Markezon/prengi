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

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters 
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  slideClass: 'swiper-slide1',
  wrapperClass: 'swiper-wrapper1',
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',    
    clickable: true,    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

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

////////////////////////////////////////

/////////////////////////////////////////////

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'minimum of 2 characters'
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.input-policy', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Please agree'
    }
	])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });


  
  
$(document).ready(function(){


  //Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay2, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay2, #consultation, #thanks').fadeOut('slow');
	});



  //scroll

  $(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	
	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

});
  
  
  
  
  
