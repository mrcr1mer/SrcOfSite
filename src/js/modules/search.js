const search = document.querySelector('.table__input input');
const alertDiv = document.querySelector('.table__alert');
const checkboxes = document.querySelectorAll('.checkbox__input');

search.addEventListener('input', () => {
	let search__val = search.value;
	let counter = 0;
	for (let index = 0; index < checkboxes.length; index++) {
		const checkbox = checkboxes[index];
		let valNormal = checkbox.getAttribute('value');
		let valLower = valNormal.toLowerCase();
		let valUpper = valNormal.toUpperCase();
		
		if (!valNormal.includes(search__val) && !valLower.includes(search__val) && !valUpper.includes(search__val)) 
		{
			checkbox.closest('.table__checkbox').classList.add('hidden');
			counter++;
		}
		else checkbox.closest('.table__checkbox').classList.remove('hidden')
	}

	if (counter == checkboxes.length) alertDiv.textContent = 'Нет совпадений';
	else alertDiv.textContent = '';
})