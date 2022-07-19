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
		delay: 3500,
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
			watchSlidesProgress: true,
		},
		1025: {
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: false,
		},
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
	},
});


