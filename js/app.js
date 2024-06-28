const vj = document.getElementById('vj').value;
const rathod = document.getElementById('rathod').value;
const number = document.getElementById('number').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password');
const password2 = document.getElementById('confrimassword');
const check = document.getElementById('check');
const sign = document.getElementById('sign');
const Email = document.getElementById('Email');
const phonenumber = document.getElementById('phonenumber');
const surname = document.getElementById('surname');
const name1 = document.getElementById('name1');
const form = document.querySelector('form');
const tr2 = document.getElementById('tr2')
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(password.value == password2.value) {
        name1.texContent = vj;
        surname.texContent = rathod;
        phonenumber.texContent = number;
        Email.texContent = email;
    }

})