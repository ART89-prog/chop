$(() => {

	// Основной слайдер на главной
	if ($('.first_section .swiper').length) {
		new Swiper('.first_section .swiper', {
			loop: true,
			speed: 750,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
				clickable: true
			}
		})
	}


	if ($('.advantages .swiper').length) {
		new Swiper('.advantages .swiper', {
			loop: true,
			speed: 750,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
			crossFade: true
			},
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		})
	}

	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .close_btn, header .menu .item a, .overlay').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})



	$('#top .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('#top .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('#top .menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('#top .close_btn, #top .menu .item a, .overlay').click((e) => {
		e.preventDefault()

		$('#top .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('#top .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})



	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<img src=images/close.svg>',
		// spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		// main: null
	}


	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(400)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(400)

			$item.addClass('active').find('.data').slideDown(400)
		}
	})




	$(window).scroll(function(){
		if($(window).scrollTop()>180){
			$('#top').fadeIn(400)
		}else{
			$('#top').fadeOut(300)
		}
	});
	

	// Скрол к пунктам меню
	$(".scroll").on("click", function (e) {
		e.preventDefault();
		let id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(id).offset().top - 82
		}, {
			duration: 400,
			easing: "swing"
		});
	});



	
    var swiper = new Swiper(".about .swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
    });


		// Показать контент 
		$(".link-more").click(function (e) {
			e.preventDefault();
			$(".works_item").removeClass("hide");
			$(".link-more").addClass("active");
		});
  



    var swiper = new Swiper(".slider__thumbs .swiper", {
      spaceBetween: 20,
	  slidesPerView: 8,
      freeMode: true,
      watchSlidesProgress: true,
	  breakpoints: {
		0: {
			spaceBetween: 15,
			slidesPerView: 2
		},
		767: {
			spaceBetween: 15,
			slidesPerView: 3
		},
		1023: {
			spaceBetween: 15,
			slidesPerView: 5
		}
	}
    });
    var swiper2 = new Swiper(".slider__images .swiper", {
      spaceBetween: 0,
	  slidesPerView: 1,
	  navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	  grabCursor: true,
      thumbs: {
        swiper: swiper,
      },
    });



	window.addEventListener('resize', function () {
		WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

		let windowW = window.outerWidth

		if (typeof WW !== 'undefined' && WW != windowW) {


			// Перезапись ширины окна
			WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


			// Моб. версия
			if (!fakeResize) {
				fakeResize = true
				fakeResize2 = false

				document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
			}

			if (!fakeResize2) {
				fakeResize2 = true

				if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
			} else {
				fakeResize = false
				fakeResize2 = true
			}
		}
	})



})