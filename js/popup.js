var link = document.querySelector('.feedback-btn');
var overlay = document.querySelector('.overlay');
var popup = document.querySelector('.feedback-form');
var close = popup.querySelector('.close-form');
var Yname = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=e-mail]');
var text = popup.querySelector('textarea');
var form = popup.querySelector('form');
var storage1 = localStorage.getItem('Yname');
var storage2 = localStorage.getItem('email');

link.addEventListener('click', function(event) {
	event.preventDefault();
	overlay.classList.add('overlay-show');
	popup.classList.add('feedback-form-show');
	popup.classList.add('modal-show');
	setTimeout(function() {
		popup.classList.remove('modal-show')
	}, 700);
	if (storage1 && storage2) {
		Yname.value = storage1;
		email.value = storage2;
		text.focus();
	} else {
		Yname.focus();
	}
});

close.addEventListener('click', function(event) {
	event.preventDefault();
	overlay.classList.remove('overlay-show');
	popup.classList.remove('feedback-form-show');
	popup.classList.remove('modal-error');
	Yname.classList.remove('input-error');
	email.classList.remove('input-error');
	text.classList.remove('input-error');
});

overlay.addEventListener('click', function(event) {
	overlay.classList.remove('overlay-show');
	popup.classList.remove('feedback-form-show');
	popup.classList.remove('modal-error');
	Yname.classList.remove('input-error');
	email.classList.remove('input-error');
	text.classList.remove('input-error');
})

window.addEventListener('keydown', function(event) {
	if (event.keyCode == 27) {
		overlay.classList.remove('overlay-show');
		popup.classList.remove('feedback-form-show');
		popup.classList.remove('modal-error');
		Yname.classList.remove('input-error');
		email.classList.remove('input-error');
		text.classList.remove('input-error');
	}
});

form.addEventListener('submit', function(event) {
	if (!Yname.value || !email.value || !text.value) {
		event.preventDefault();
		popup.classList.add('modal-error');
		if (!text.value) {
			text.classList.add('input-error');
			text.focus();
		}
		if (!email.value) {
			email.classList.add('input-error');
			email.focus();
		}
		if (!Yname.value) {
			Yname.classList.add('input-error');
			Yname.focus();
		}
	} else {
		localStorage.setItem('Yname', Yname.value);
		localStorage.setItem('email', email.value);
	}
	setTimeout (function() {
			popup.classList.remove('modal-error');
		}, 300);
});

Yname.addEventListener('click', function(event) {
	Yname.classList.remove('input-error');
});

email.addEventListener('click', function(event) {
	email.classList.remove('input-error');
});

text.addEventListener('click', function(event) {
	text.classList.remove('input-error');
});