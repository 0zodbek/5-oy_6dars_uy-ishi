const form = document.querySelector('.form');
const vj = document.getElementById('vj');
const rathod = document.getElementById('rathod');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirmpassword');
const check = document.getElementById('check');
const sign = document.getElementById('sign');
const Email = document.getElementById('Email');
const phonenumber = document.getElementById('phonenumber');
const surname = document.getElementById('surname');
const name1 = document.getElementById('name1');
const tr2 = document.getElementById('tr2')

form.addEventListener('submit',function(event){


    event.preventDefault();
    if(password.value == password2.value) {
        name1.innerHTML = vj.value;
        surname.innerHTML = rathod.value;
        phonenumber.innerHTML = number.value;
        Email.innerHTML = email.value;
        vj.value = '';
        rathod.value = '';
        number.value = '';
        email.value = ''; 
        password.value = '';
        password2.value = '';
    }
})
