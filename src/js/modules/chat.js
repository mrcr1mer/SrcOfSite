// ========================SCROLL-CHAT===============================
let chatContent = document.querySelector(".chat__content");
let chatAsideContent = document.querySelector('.chat-aside__content');

if (chatContent) scrollChat(chatContent);
if (chatAsideContent) scrollChat(chatAsideContent);

function scrollChat(scroll) {
	scroll.scrollTop = scroll.scrollHeight;
}

let scrollButton = document.querySelector('.chat__scroll');
scrollButton.addEventListener("click", () => {
	chatContent.scrollTo({
		top: chatContent.scrollHeight,
		behavior: "smooth"
	})
});



// let scrollHeight = Math.max(
// 	document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
// )
//  window.scrollTo(0, scrollHeight);

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


// ========================BACK===============================
// const goBack = document.querySelector('.chat__header');
// goBack.addEventListener("click", () => {

// })


// ========================100VH===============================
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
 });
