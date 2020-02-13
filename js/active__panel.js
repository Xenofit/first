let panelAbout = document.getElementById('active-panel');
let color = document.getElementById('main-menu__item');
let input = document.getElementsByClassName('active-panel__input');

function showAndHidePanel() {
	panelAbout.classList.toggle('tumbler');
	color.classList.toggle('red-active');
}

function clearInputField() {
	for (var i = 0; i < input.length; i++) {
		input[i].value = '';
	}
}

