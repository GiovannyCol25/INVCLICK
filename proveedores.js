let supplierCounter = 1;
const suppliers = {};
let currentSupplierNIT = null;

function saveSupplier() {
    const companyName = document.getElementById('company-name').value;
    const nit = document.getElementById('nit').value;
    const cellphone = document.getElementById('cellphone').value;
    const address = document.getElementById('Address').value;
    const responsibleSeller = document.getElementById('Responsible-seller').value;

    if (currentSupplierNIT) {
        suppliers[currentSupplierNIT] = { companyName, nit: currentSupplierNIT, cellphone, address, responsibleSeller };
        showConfirmationMessage(`Proveedor modificado: ${companyName}`);
    } else {
        if (suppliers[nit]) {
            alert("Proveedor con este NIT ya existe.");
            return;
        }
        const supplierId = `SUP${supplierCounter.toString().padStart(4, '0')}`;
        suppliers[nit] = { supplierId, companyName, nit, cellphone, address, responsibleSeller };
        supplierCounter++;
        showConfirmationMessage(`Proveedor registrado con éxito: ${supplierId}`);
    }
    resetForm();
}

function showConfirmationMessage(message) {
    const userInfo = document.getElementById('supplier-info');
    userInfo.innerHTML = message;
    userInfo.style.color = "black";
}

function loadSupplierData(nit) {
    const supplier = suppliers[nit];
    if (supplier) {
        document.getElementById('company-name').value = supplier.companyName;
        document.getElementById('nit').value = supplier.nit;
        document.getElementById('cellphone').value = supplier.cellphone;
        document.getElementById('Address').value = supplier.address;
        document.getElementById('Responsible-seller').value = supplier.responsibleSeller;
        currentSupplierNIT = supplier.nit;
    } else {
        alert("Proveedor no encontrado.");
    }
}

function resetForm() {
    document.getElementById('company-name').value = '';
    document.getElementById('nit').value = '';
    document.getElementById('cellphone').value = '';
    document.getElementById('Address').value = '';
    document.getElementById('Responsible-seller').value = '';
    currentSupplierNIT = null;
}

document.getElementById('save-button').addEventListener('click', function (event) {
    event.preventDefault();
    saveSupplier();
});

document.getElementById('modify-button').addEventListener('click', function () {
    const nit = document.getElementById('nit').value;
    loadSupplierData(nit);
});
