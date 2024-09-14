document.getElementById('create-user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const documentId = document.getElementById('document-id').value;
    const cellphone = document.getElementById('cellphone').value;
    const cargo = document.getElementById('cargo').value;
    const username = document.getElementById('username').value; // Usuario manual
    const password = document.getElementById('password').value; // Contraseña manual

    // Validar que todos los campos están llenos
    if (!firstname || !lastname || !email || !documentId || !cellphone || !username || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Asignar permisos según el cargo
    let permisos = '';
    if (cargo === 'vendedor') {
        permisos = 'Acceso al módulo de ventas';
    } else if (cargo === 'almacenista') {
        permisos = 'Acceso al módulo de inventarios';
    }

    // Crear un objeto de usuario
    const newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        documentId: documentId,
        cellphone: cellphone,
        username: username,
        password: password, // Contraseña asignada manualmente
        cargo: cargo,
        permisos: permisos // Asignar permisos basados en el cargo
    };

    // Mostrar la información en el campo de confirmación
    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML = 
        "<p>Usuario creado exitosamente:</p>" +
        "<p><strong>Username:</strong> " + newUser.username + "</p>" +
        "<p><strong>Password:</strong> " + newUser.password + " (deberá ser cambiada después del primer ingreso)</p>" +
        "<p><strong>Cargo:</strong> " + newUser.cargo + "</p>" +
        "<p><strong>Permisos:</strong> " + newUser.permisos + "</p>";

    userInfo.style.color = "skyblue";

    // Aquí podrías enviar `newUser` a un servidor o almacenarlo localmente si lo necesitas
    console.log(newUser);
});
