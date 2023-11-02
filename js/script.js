function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');

    if (menu.style.width === '200px') {
        menu.style.width = '0';
        menuToggle.style.left = '20px'; // Aqui mueve el botón de hamburguesa a su posición original
        content.style.marginLeft = '0';
    } else {
        menu.style.width = '200px';
        menuToggle.style.left = '220px'; // Aqui mueve el botón de hamburguesa junto al menú
        content.style.marginLeft = '200px';
    }
}

function showWelcomeButton() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');

    welcomeButton.style.display = 'block';
    form.style.display = 'none';
}

function showForm() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');

    welcomeButton.style.display = 'none';
    form.style.display = 'block';
}
function showWelcomeMessage() {
    const welcomeButton = document.getElementById('welcome-button');
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');

    welcomeButton.style.display = 'none';
    welcomeMessage.style.display = 'block';
    saludarButton.style.display = 'none';
    form.style.display = 'none';

    showWelcomeButton();
}

function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');

    welcomeMessage.style.display = 'none';
    saludarButton.style.display = 'block';
    form.style.display = 'none';
}

function saveFormData() {
    const form = document.getElementById('form');
    const saludarButton = document.querySelector('.saludar-button');
    const welcomeButton = document.getElementById('welcome-button');

    form.style.display = 'none';
    saludarButton.style.display = 'block';
    welcomeButton.style.display = 'none';

    showWelcomeButton();

    function isEmailValid(email) {
        // Expresión regular para validar el correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    
    function validateEmail() {
        const emailInput = document.getElementById('email-input');
        const emailError = document.getElementById('email-error');
    
        if (!isEmailValid(emailInput.value)) {
            emailError.textContent = 'Correo inválido';
            emailError.style.color = 'red';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
}

// Aqui esta definido un array para almacenar los datos del formulario
const data = [];

// Aqui esta la función para validar la dirección del correo electrónico
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Aqui esta la función para guardar los datos del formulario
function saveFormData() {
    const nombreInput = document.getElementById('nombre-input').value;
    const apellidoInput = document.getElementById('apellido-input').value;
    const emailInput = document.getElementById('email-input').value;

    if (nombreInput && apellidoInput && validateEmail(emailInput)) {
        // Aqui esta creado un objeto con los datos
        const formData = { nombre: nombreInput, apellido: apellidoInput, correo: emailInput };

        // Aqui es agregar el objeto al array de datos
        data.push(formData);

        // Aqui esta que limpia el formulario
        document.getElementById('nombre-input').value = '';
        document.getElementById('apellido-input').value = '';
        document.getElementById('email-input').value = '';

        // Aqui esta  el que muestrar los datos en la tabla
        displayData();
    }
}

// Esta función es para mostrar los datos en la tabla
function displayData() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Esta limpia la tabla antes de mostrar datos

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.correo}</td>
            <td><button onclick="deleteData(${index})">Borrar</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Esta función es para borrar un registro por índice
function deleteData(index) {
    data.splice(index, 1);
    displayData(); // Aaui actualiza la tabla después de borrar
}

// Esta función es para mostrar la tabla en la vista del formulario
function showTable() {
    const table = document.getElementById('table');
    table.style.display = 'table'; // Aqui cambiamos la propiedad de visualización a 'table'
}

// Esta función es para ocultar la tabla en la vista del formulario
function hideTable() {
    const table = document.getElementById('table');
    table.style.display = 'none'; // Aqui ocultamos la tabla
}
