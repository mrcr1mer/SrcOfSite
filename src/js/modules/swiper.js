new Swiper('.about-swiper', {
	loop: true,
	grabCursor: true,
	initialSlide: 3,
	speed: 800,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.about-swiper',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 1.8,
			spaceBetween: 25,
			centeredSlides: true,
		},
		1025: {
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: false,
		},
	},
	//slideToClickedSlide: true,
	//autoHeight: true,
	//freeMode: true,
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },
	// LAZY-LOADING
	// preloadImages: false,
	// lazy: {
	// 	loadOnTransitionStart: false,
	// 	loadPrevNext: false,
	// },
	// watchSlidesProgress: true,
	// watchSlidesVisibility: true,
});