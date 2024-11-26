
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('error-msg');

    // Limpiar el mensaje de error previo
    errorMsg.textContent = '';

    // Para propósitos de demostración, asumimos que el usuario y la contraseña correctos son "user" y "password"
    if(username === "user" && password === "password") {
        // Guardar el nombre de usuario en el almacenamiento local
        localStorage.setItem('username', username);
        // Redirigir a la página de bienvenida
        window.location.href = 'main2.html';
    } else {
        errorMsg.textContent = 'Invalid username or password';
        errorMsg.style.color = 'red';
    }
});
