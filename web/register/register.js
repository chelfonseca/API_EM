const tn = document.querySelector('#token');
const dy = document.querySelector('#display');

function registerUser(name, email, password){

    const dt = {"name": name,
                "email": email,
                "password": password };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(dt)

    };    
    
    return fetch('http://127.0.0.1:3000/auth/register', options );

}

const form = document.querySelector('#form-input');
form.addEventListener('submit', e => {
    e.preventDefault();
    doSubmit();
})

function doSubmit(){
    const name = document.querySelector('#name-input');
    const email = document.querySelector('#email-input');
    const password = document.querySelector('#input-password');
    

    registerUser(name.value, email.value, password.value)
       //   .then(response => alert(response.json()));
       .then(response => response.json())
       .then( data => {
           if(data.email){
               tn.innerHTML = data.token;
               dy.innerHTML = data.email;                     
            }else{
               dy.innerHTML = data.error 
           }
       })
       .catch( err => {
           dy.innerHTML = `Opps! ${err}`;
       })



}