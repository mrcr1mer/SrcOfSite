// ========================ISWEBP===============================
export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
		
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
isWebp();


// ========================IBG===============================
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (let i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


// ========================SCROLL-CHAT===============================
let chatContent = document.querySelector(".chat__content");
let chatAsideContent = document.querySelector('.chat-aside__content');

if (chatContent) scrollChat(chatContent);
if (chatAsideContent) scrollChat(chatAsideContent);

function scrollChat (scroll) {
	scroll.scrollTop = scroll.scrollHeight;
}

// let scrollHeight = Math.max(
// 	document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
// )
//  window.scrollTo(0, scrollHeight);


// ========================CHECK-EMAIL===============================
function emailTest(email) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value);
}