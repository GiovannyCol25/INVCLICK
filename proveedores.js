let supplierCounter = 1;
const suppliers = {};  // Almacenamos los proveedores por su NIT
let currentSupplierNIT = null; // Variable para rastrear el proveedor en modificación

// Función para crear o modificar proveedores
function saveSupplier() {
    const companyName = document.getElementById('company-name').value;
    const nit = document.getElementById('NIT').value;
    const cellphone = document.getElementById('cellphone').value;
    const address = document.getElementById('Address').value;
    const responsibleSeller = document.getElementById('Responsible-seller').value;

    // Validar si estamos en modo creación o modificación
    if (currentSupplierNIT) {
        // Modificar proveedor existente
        suppliers[currentSupplierNIT] = {
            companyName,
            nit: currentSupplierNIT,
            cellphone,
            address,
            responsibleSeller
        };
        showConfirmationMessage(`Proveedor modificado con éxito: ${companyName}`);
    } else {
        if (suppliers[nit]) {
            alert("El proveedor con este NIT ya existe.");
            return;
        }

        // Crear nuevo proveedor y asignar ID
        const supplierId = `SUP${supplierCounter.toString().padStart(4, '0')}`;
        suppliers[nit] = {
            supplierId,
            companyName,
            nit,
            cellphone,
            address,
            responsibleSeller
        };
        supplierCounter++;

        // Mostrar el mensaje de confirmación con el ID asignado
        showConfirmationMessage(`Proveedor registrado con éxito: <br>
                                <strong>Compañía:</strong> ${companyName} <br>
                                <strong>NIT:</strong> ${nit} <br>
                                <strong>ID Proveedor:</strong> ${supplierId}`);
    }

    // Limpiar el formulario
    resetForm();
}

// Función para mostrar un mensaje de confirmación
function showConfirmationMessage(message) {
    const userInfo = document.getElementById('supplier-info');
    userInfo.innerHTML = message;
    userInfo.style.color = "skyblue";
}

// Función para cargar los datos del proveedor en el formulario para modificación
function loadSupplierData(nit) {
    const supplier = suppliers[nit];
    if (supplier) {
        document.getElementById('company-name').value = supplier.companyName;
        document.getElementById('NIT').value = supplier.nit;
        document.getElementById('cellphone').value = supplier.cellphone;
        document.getElementById('Address').value = supplier.address;
        document.getElementById('Responsible-seller').value = supplier.responsibleSeller;
        currentSupplierNIT = supplier.nit; // Guardamos el NIT del proveedor en modificación
        showConfirmationMessage(`Datos del proveedor cargados para modificación: ${supplier.companyName}`);
    } else {
        alert("Proveedor no encontrado.");
    }
}

// Función para limpiar el formulario y restablecer variables
function resetForm() {
    document.getElementById('company-name').value = '';
    document.getElementById('NIT').value = '';
    document.getElementById('cellphone').value = '';
    document.getElementById('Address').value = '';
    document.getElementById('Responsible-seller').value = '';
    currentSupplierNIT = null;
}

// Evento para el botón "Guardar"
document.getElementById('save-button').addEventListener('click', function(event) {
    event.preventDefault();
    saveSupplier();
});

// Evento para el botón "Modificar"
document.getElementById('modify-button').addEventListener('click', function() {
    const nit = document.getElementById('NIT').value;
    loadSupplierData(nit);
});
