// ========================ICON-CHAT===============================
let iconChat = document.querySelector('.icon-chat');
let timeOut;
if (iconChat) {
	document.addEventListener('scroll', function () {
		iconChat.style.opacity = 1;
		iconChat.style.visibility = "visible";
		iconChat.style.transform = 'translate(' + 0 + ',' + 0 + ')';
		if (timeOut != undefined) clearTimeout(timeOut);
		timeOut = setTimeout(() => {
			iconChat.style.opacity = 0;
			iconChat.style.visibility = "hidden";
			iconChat.style.transform = 'translate(' + 0 + ',' + 100 + '%' + ')';
		}, 2500)
	});
}



// ========================SCROLL-CHAT===============================
const chatContent = document.querySelector(".chat__content");
const chatAsideContent = document.querySelector('.chat-aside__content');

if (chatContent) scrollChat(chatContent);
if (chatAsideContent) scrollChat(chatAsideContent);

function scrollChat(scroll) {
	scroll.scrollTo(0, scroll.scrollHeight);
}


// Основной чат
const scrollButton = document.querySelector('.chat__scroll-button');
if (scrollButton) {
	scrollDown(scrollButton, chatContent);
}

// Чат сайдбара
const scrollButtonAside = document.querySelector('.chat-aside__scroll-button');
if (scrollButtonAside) {
	scrollDown(scrollButtonAside, chatAsideContent);
}

function scrollDown(scrollButton, chatContent) {
	const scrollContent = chatContent.scrollTop - 100;
	chatContent.addEventListener("scroll", () => {
		const currentScrollContent = chatContent.scrollTop;
		if (currentScrollContent <= scrollContent) {
			scrollButton.style.opacity = 1;
			scrollButton.style.visibility = "visible";
			scrollButton.style.transform = 'translate(' + 0 + ',' + 0 + ')';
		} else {
			scrollButton.style.opacity = 0;
			scrollButton.style.visibility = "hidden";
			scrollButton.style.transform = 'translate(' + 0 + ',' + 150 + '%' + ')';
		}
	})
	scrollButton.addEventListener("click", () => {
		chatContent.scrollTo({
			top: chatContent.scrollHeight,
			behavior: "smooth"
		})
	})
}


// ========================BACK===============================
const goBack = document.querySelector('.chat__header');
if (goBack) {
	goBack.addEventListener("click", () => {
		history.back()
	})
}


// ========================AnimationBlocked===============================
const blockedChat = document.querySelector('.chat-aside__body.blocked');
if (blockedChat) {
	let blockedChatTitle = document.createElement('span');
	blockedChatTitle.innerHTML = `Вы не вошли в аккаунт`;
	blockedChat.prepend(blockedChatTitle);

	blockedChat.addEventListener("click", () => {
		blockedChat.classList.add('active');
		setTimeout(() => {
			blockedChat.classList.remove('active');
		}, 1000);
	})
}





// let scrollHeight = Math.max(
// 	document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
// )
//  window.scrollTo(0, scrollHeight);
