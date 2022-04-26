const btn = document.getElementById('button');

function createAcc() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "") {
        alert('fill in your email')
        return false;   
     } else if (password === ""){
        alert('put in your password');
        return false;
     }else if (password.length < 8) {
         alert('Password is less tha 8 characters')
         return false;
     } else {
         alert ('your form has been submitted successfully');
     }

}


function Subscribe() {
    alert('Congratulations, Youll get notified of our rercent template');
}

