// ===== EJEMPLOS DE EVENTOS =====

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const areaEventos = document.getElementById('areaEventos');
    const infoEvento = document.getElementById('infoEvento');

    // ===== Eventos del Mouse =====
    
    // Evento mouseover (cuando el mouse entra en el elemento)
    areaEventos.addEventListener('mouseover', function() {
        infoEvento.textContent = 'Mouse sobre el área';
        this.style.backgroundColor = '#e3f2fd';
    });

    // Evento mouseout (cuando el mouse sale del elemento)
    areaEventos.addEventListener('mouseout', function() {
        infoEvento.textContent = 'Mouse fuera del área';
        this.style.backgroundColor = '#f8f9fa';
    });

    // Evento click (cuando se hace clic en el elemento)
    areaEventos.addEventListener('click', function() {
        infoEvento.textContent = '¡Has hecho clic en el área!';
        this.style.borderColor = '#ff4081';
    });

    // Evento dblclick (doble clic)
    areaEventos.addEventListener('dblclick', function() {
        infoEvento.textContent = '¡Has hecho doble clic!';
        this.style.borderColor = '#4caf50';
    });

    // ===== Eventos del Teclado =====
    
    // Crear un campo de texto para demostrar eventos del teclado
    const inputTeclado = document.createElement('input');
    inputTeclado.type = 'text';
    inputTeclado.placeholder = 'Escribe algo aquí...';
    areaEventos.parentNode.insertBefore(inputTeclado, infoEvento);

    // Evento keydown (cuando se presiona una tecla)
    inputTeclado.addEventListener('keydown', function(e) {
        console.log('Tecla presionada:', e.key);
    });

    // Evento keyup (cuando se suelta una tecla)
    inputTeclado.addEventListener('keyup', function(e) {
        console.log('Tecla liberada:', e.key);
    });

    // ===== Eventos de Formulario =====
    
    // Crear un formulario simple
    const formulario = document.createElement('form');
    formulario.innerHTML = `
        <input type="text" placeholder="Nombre">
        <button type="submit">Enviar</button>
    `;
    areaEventos.parentNode.insertBefore(formulario, infoEvento);

    // Evento submit del formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío del formulario
        infoEvento.textContent = 'Formulario enviado';
    });

    // ===== Eventos de Carga =====
    
    // Evento load (cuando la página ha terminado de cargar)
    window.addEventListener('load', function() {
        console.log('La página ha terminado de cargar');
    });

    // Evento resize (cuando se redimensiona la ventana)
    window.addEventListener('resize', function() {
        console.log('Ventana redimensionada');
    });
}); 