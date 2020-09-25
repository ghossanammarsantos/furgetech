const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const nohp = document.getElementById('nohp');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function validasiForm() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const nohpValue = nohp.value.trim();

	
	if(usernameValue === '') {
		setErrorFor(username, 'Username tidak boleh kosong!');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor('Email tidak boleh kosong!');
	} else if (!inputEmail(emailValue)) {
		setErrorFor(email, 'Email tidak valid!');
	} else {
		setSuccessFor(email);
	}
	
	if(nohpValue === '') {
		setErrorFor(nohp, 'NoHP tidak boleh kosong!');
	} else if (!inputNohp(nohpValue)) {
		setSuccessFor(nohp, 'Nohp tidak boleh lebih dr 12');
	}
	
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function inputEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}










