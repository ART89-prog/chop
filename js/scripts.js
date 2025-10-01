$(() => {

	const servicesSliders = [],
	services = document.querySelectorAll('.services .swiper')
    services.forEach(function(el, i) {
        el.classList.add('services_s' + i)
        let options = {
            loop: true,
            speed: 500,
            watchSlidesProgress: true,
            slideActiveClass: 'active',
            slideVisibleClass: 'visible',
            preloadImages: false,
            lazy: true,
            breakpoints: {
                0: {
                    spaceBetween: 20,
                    slidesPerView: 1.3
                },
                610: {
                    spaceBetween: 20,
                    slidesPerView: 1.3
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2.5
                },
                1023: {
                    spaceBetween: 20,
                    slidesPerView: 2.5
                }
            },
            pagination: {
                el: '.services .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.services .swiper-button-next',
                prevEl: '.services .swiper-button-prev'
            }
        }
        servicesSliders.push(new Swiper('.services_s' + i, options))
    })

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



	// Скрол к пунктам меню
	$(".scroll").on("click", function (e) {
		e.preventDefault();
		let id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(id).offset().top
		}, {
			duration: 400,
			easing: "swing"
		});
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