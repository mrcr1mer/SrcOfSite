// ========================MENU-BURGER===============================
const iconBurger = document.querySelector('.icon-header');
const menu = document.querySelector('.menu');
const logoHeader = document.querySelector('.header__top');
//const chatMenu = document.createElement('li');
if (iconBurger) {
	iconBurger.addEventListener("click", () => {
		if (iconBurger.classList.contains('active')) iconBurger.classList.add('reverse');
		else iconBurger.classList.remove('reverse');

		iconBurger.classList.toggle('active');
		document.body.classList.toggle('burger-lock');
		logoHeader.classList.toggle('active');
		menu.classList.toggle('active');

		// if (iconBurger.classList.contains('active')) {
		// 	chatMenu.innerHTML = `<a href="chat.html" class="menu__link">Чат</a>`;
		// 	document.querySelector('.menu__list').append(chatMenu);
		// } else {
		// 	chatMenu.remove();
		// }

		// const mediaQuery = window.matchMedia('(max-width: 1024px)')
		// function tabletChange(e) {
		// 	if (e.matches) {
		// 		chatMenu.innerHTML = `<a href="chat.html" class="menu__link">Чат</a>`;
		// 		document.querySelector('.menu__list').append(chatMenu);
		// 	}
		// }
		// mediaQuery.addEventListener("change", tabletChange);
		// tabletChange(mediaQuery);

		// if (window.matchMedia("(max-width: 1024px)").matches) {
		// 	chatMenu.innerHTML = `<a href="chat.html" class="menu__link">Чат</a>`;
		// 	document.querySelector('.menu__list').append(chatMenu);
		// } else {
		// 	chatMenu.remove();
		// }		
	})
}


// ========================MENU-ACTIVE===============================
const menuItems = document.querySelectorAll('.menu__link');
const local = window.location.href;

menuItems.forEach(element => {
	if (element.href === local) {
		element.classList.add('active');
	} else {
		element.classList.remove('active');
	}
});


// ========================ASIDE-SPOILER===============================
const aside = document.querySelector('.aside');
const asideButton = document.querySelector('.aside__arrows');
// Блок новостей
const articles = document.querySelectorAll('.articles');
// Блок отдельной новости 
const article = document.querySelector('.current-news');
// Блок редактировать команду
const editTeam = document.querySelector('.players__items');
if (asideButton) {
	asideButton.addEventListener('click', change);
	function change() {
		aside.classList.toggle('active');
		// Вешает на блоки новостей и турниров active
		if (articles.length > 0) {
			for (let index = 0; index < articles.length; index++) {
				const article = articles[index];
				article.classList.toggle('active');
			}
		}
		// Вешает на блоки отдельной новости active
		if (article) {
			article.classList.toggle('active');
		}
		// Вешает на блок players__items active
		if (editTeam) {
			editTeam.classList.toggle('active');
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
	removePlaceholder(inputs);
}

const textareas = document.getElementsByTagName('textarea');
if (textareas.length > 0) {
	removePlaceholder(textareas);
}

function removePlaceholder(items) {
	for (let index = 0; index < items.length; index++) {
		const item = items[index];
		const itemPlaceholder = item.placeholder;
		item.addEventListener("focus", function (e) {
			item.placeholder = "";
		})
		item.addEventListener("blur", function (e) {
			item.placeholder = itemPlaceholder;
		})
	}
}
