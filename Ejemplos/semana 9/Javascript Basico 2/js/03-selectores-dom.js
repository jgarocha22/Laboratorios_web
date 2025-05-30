// ===== EJEMPLOS DE SELECTORES Y MANIPULACIÓN DEL DOM =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== SELECTORES =====
    
    // 1. getElementById
    const elementoPorId = document.getElementById('elementoId');
    
    // 2. getElementsByClassName
    const elementosPorClase = document.getElementsByClassName('elementoClase');
    
    // 3. getElementsByTagName
    const elementosPorTag = document.getElementsByTagName('p');
    
    // 4. querySelector (retorna el primer elemento que coincide)
    const primerElemento = document.querySelector('.elementoClase');
    
    // 5. querySelectorAll (retorna todos los elementos que coinciden)
    const todosLosElementos = document.querySelectorAll('.elementoClase');

    // Función para demostrar los selectores
    function demostrarSelectores() {
        // Ejemplo con getElementById
        elementoPorId.style.color = 'blue';
        elementoPorId.textContent = 'Modificado por ID';

        // Ejemplo con getElementsByClassName
        Array.from(elementosPorClase).forEach((elemento, index) => {
            elemento.style.backgroundColor = '#e3f2fd';
            elemento.textContent = `Elemento por Clase ${index + 1} modificado`;
        });

        // Ejemplo con getElementsByTagName
        Array.from(elementosPorTag).forEach(elemento => {
            elemento.style.fontStyle = 'italic';
        });

        // Ejemplo con querySelector
        primerElemento.style.border = '2px solid green';

        // Ejemplo con querySelectorAll
        todosLosElementos.forEach(elemento => {
            elemento.style.padding = '10px';
        });
    }

    // ===== MANIPULACIÓN DEL DOM =====
    
    // 1. Crear elementos
    function crearElemento() {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'elemento-nuevo';
        nuevoElemento.textContent = 'Nuevo elemento creado';
        return nuevoElemento;
    }

    // 2. Modificar contenido
    function modificarContenido() {
        const contenedor = document.getElementById('contenedorManipulacion');
        const elementos = contenedor.getElementsByClassName('elemento-manipulable');

        // Modificar HTML
        elementos[0].innerHTML = '<strong>Contenido modificado con HTML</strong>';

        // Modificar texto
        elementos[1].textContent = 'Contenido modificado con textContent';

        // Modificar atributos
        elementos[0].setAttribute('data-ejemplo', 'valor-ejemplo');
        elementos[1].setAttribute('title', 'Este es un título');

        // Modificar clases
        elementos[0].classList.add('destacado');
        elementos[1].classList.add('importante');

        // Modificar estilos
        elementos[0].style.backgroundColor = '#ffeb3b';
        elementos[1].style.backgroundColor = '#4caf50';
    }

    // 3. Eliminar elementos
    function eliminarElemento() {
        const contenedor = document.getElementById('contenedorManipulacion');
        const elementos = contenedor.getElementsByClassName('elemento-manipulable');
        if (elementos.length > 0) {
            contenedor.removeChild(elementos[0]);
        }
    }

    // 4. Clonar elementos
    function clonarElemento() {
        const contenedor = document.getElementById('contenedorManipulacion');
        const elementos = contenedor.getElementsByClassName('elemento-manipulable');
        if (elementos.length > 0) {
            const clon = elementos[0].cloneNode(true);
            clon.textContent = 'Elemento clonado';
            contenedor.appendChild(clon);
        }
    }

    // Asignar eventos a los botones
    document.getElementById('btnProbarSelectores').addEventListener('click', demostrarSelectores);
    document.getElementById('btnManipular').addEventListener('click', function() {
        modificarContenido();
        // Agregar un pequeño retraso para ver los cambios
        setTimeout(() => {
            eliminarElemento();
            setTimeout(() => {
                clonarElemento();
            }, 1000);
        }, 1000);
    });
}); 