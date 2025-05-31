document.addEventListener('DOMContentLoaded', function() {
    /*----------------------*/
    /* Clase del formulario */
    /*----------------------*/

    class FormularioContacto {
        constructor(nombre, email, tema, mensaje) {
            this.nombre = nombre;
            this.email = email;
            this.tema = tema;
            this.mensaje = mensaje;
        }

        mostrarDatos() {
            console.log('Datos del formulario:');
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Email: ${this.email}`);
            console.log(`Tema: ${this.tema}`);
            console.log(`Mensaje: ${this.mensaje}`);
        }
    }

    /*----------------------*/
    /*Eventos del formulario*/
    /*----------------------*/

    const formulario = document.querySelector('form');
    const inputName = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('mensajes');
    
    if(formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const temaSeleccionado = document.querySelector('input[name="tema"]:checked').value;
            
            const formData = new FormularioContacto(
                inputName.value,
                inputEmail.value,
                temaSeleccionado,
                inputMessage.value
            );
            
            formData.mostrarDatos();
        });

        formulario.addEventListener('reset', (e) => {
            e.preventDefault();
            inputName.value = '';
            inputEmail.value = '';
            inputMessage.value = '';
            console.log('Formulario reiniciado');
        });
    }
});