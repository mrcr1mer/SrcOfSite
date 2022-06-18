// ========================MENU-BURGER===============================
const iconBurger = document.querySelector('.icon-header');
const menu = document.querySelector('.menu');
const logoHeader = document.querySelector('.header__top');
if (iconBurger) {
	iconBurger.addEventListener("click", () => {
		document.body.classList.toggle('burger-lock');

		if (iconBurger.classList.contains('active')) iconBurger.classList.add('reverse');
		else iconBurger.classList.remove('reverse');

		logoHeader.classList.toggle('active');
		iconBurger.classList.toggle('active');
		menu.classList.toggle('active');
	})
}


// ========================ASIDE-SPOILER===============================
const aside = document.querySelector('.aside');
const asideButton = document.querySelector('.aside__arrows');
// Блок новостей
const newsItems = document.querySelectorAll('.news__items');
if (asideButton) {
	asideButton.addEventListener('click', change);
	function change() {
		aside.classList.toggle('active');
		// Вешает на блоки новостей active
		if (newsItems.length > 0) {
			for (let index = 0; index < newsItems.length; index++) {
				const newsItem = newsItems[index];
				newsItem.classList.toggle('active');
			}
		}
	}
}


// ========================TABS===============================
const popupTitles = document.querySelectorAll('.popup__tabs-tab');
const popupForms = document.querySelectorAll(".popup__form");

if (popupTitles.length > 0) {
	for (let i = 0; i < popupTitles.length; i++) {
		popupTitles[i].addEventListener("click", function () {
			let activeTabAttr = popupTitles[i].getAttribute("data-tab");
			for (let j = 0; j < popupTitles.length; j++) {
				let contentAttr = popupForms[j].getAttribute("data-tab-content");
				if (activeTabAttr === contentAttr) {
					popupTitles[j].classList.add("active");
					popupForms[j].classList.add("active");
				} else {
					popupTitles[j].classList.remove("active");
					popupForms[j].classList.remove("active");
				}
			};
		});
	}
}


// ========================PLACEHOLDER===============================
const inputs = document.getElementsByTagName('input');
if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const input = inputs[index];
		const inputPlaceholder = input.placeholder;
		input.addEventListener("focus", function (e) {
			input.placeholder = "";
		})
		input.addEventListener("blur", function (e) {
			input.placeholder = inputPlaceholder;
		})
	}
}


// ========================ICON-CHAT===============================
let iconChat = document.querySelector('.icon-chat');
let timeOut;
if (iconChat) {
	document.addEventListener('scroll', function () {
		iconChat.style.opacity = 1;
		iconChat.style.visibility = "visible";
		if (timeOut != undefined) clearTimeout(timeOut)
		timeOut = setTimeout(() => {
			iconChat.style.opacity = 0;
			iconChat.style.visibility = "hidden";
		}, 2500)
	});
	
}

