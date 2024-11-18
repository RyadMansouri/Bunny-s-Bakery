document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('signinBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.querySelector('#register input[name="password"]').value;
    var confirmPassword = document.querySelector('#register input[name="confirmPassword"]').value;
    if (password!== confirmPassword) {
        alert('Passwords do not match.');
    }  else {
        alert('Registration successful!');
        document.getElementById('registerForm').style.display = 'none';
    }
});

document.getElementById('loginExitBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
});
document.getElementById('registerExitBtn').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
});