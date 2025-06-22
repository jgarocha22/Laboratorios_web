document.addEventListener('DOMContentLoaded', function() {
    /*----------------------*/
    /* Clase del formulario */
    /*----------------------*/

    class FormularioContacto {
        constructor(nombre, email, tema, msg) {
            this.nombre = nombre;
            this.email = email;
            this.tema = tema;
            this.msg = msg;
        }

        mostrarDatos() {
            console.log('Datos del formulario:');
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Email: ${this.email}`);
            console.log(`Tema: ${this.tema}`);
            console.log(`Mensaje: ${this.msg}`);
        }
    }

    /*----------------------*/
    /*Eventos del formulario*/
    /*----------------------*/

    const formulario = document.querySelector('form');
    const inputName = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputMsg = document.getElementById('mensajes');
    const alertDiv = document.getElementById('contact-alert');
    
    if(formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const temaSeleccionado = document.querySelector('input[name="tema"]:checked').value;

            if(typeof inputName.value === 'string' && inputName.value.trim() === '') {
                mostrarAlerta('Por favor, ingrese un nombre válido.', 'danger');
                return;
            }

            if(typeof inputEmail.value === 'string' && inputEmail.value.trim() === '') {
                mostrarAlerta('Por favor, ingrese un email válido.', 'danger');
                return;
            }

            if(typeof inputMsg.value === 'string' && inputMsg.value.trim() === '') {
                mostrarAlerta('Por favor, ingrese un mensaje válido.', 'danger');
                return;
            }

            const formData = new FormularioContacto(
                inputName.value,
                inputEmail.value,
                temaSeleccionado,
                inputMsg.value
            );
            
            formData.mostrarDatos();

            formulario.reset();
            mostrarMensaje('¡Enviado Exitosamente!');
            if(alertDiv) alertDiv.innerHTML = '';
        });

        formulario.addEventListener('reset', () => {
            if(alertDiv) alertDiv.innerHTML = '';
        });
    }



/*------------------------------------*/
/* Mensaje cuando se envia formulario */
/*------------------------------------*/
    function mostrarMensaje(mensaje) {
        const mensajeDiv = document.getElementById('custom-mensaje');
        if (mensajeDiv) {
            mensajeDiv.textContent = mensaje;
            mensajeDiv.classList.remove('hide'); // Limpiar clase anterior
            mensajeDiv.classList.add('show');
            
            setTimeout(() => {
                mensajeDiv.classList.remove('show');
                mensajeDiv.classList.add('hide');
                
                // Ocultar el elemento después de que termine la animación de salida
                setTimeout(() => {
                    mensajeDiv.classList.remove('hide');
                    mensajeDiv.style.display = 'none';
                }, 600); // Tiempo igual a la duración de la animación
            }, 3000); // Tiempo que permanece visible
        }
    }
});

/*-----------------------------------*/
/*  Tema del sitio web (Modo oscuro) */
/*-----------------------------------*/

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    if (theme === 'dark') {
        themeToggle.checked = true;
        document.body.classList.add('dark-mode');
    } else {
        themeToggle.checked = false;
        document.body.classList.remove('dark-mode');
    }
});