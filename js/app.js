const FORMULARIOCONTACTOS = document.querySelector('#contacto');

eventListeners();

function eventListeners() {
    // Cuando el formulario de crear o editar se ejecuta
    FORMULARIOCONTACTOS.addEventListener('submit', leerFormulario);
}

function leerFormulario(e) {
    e.preventDefault();

    // Leer los datos de los inputs
    const NOMBRE = document.querySelector('#nombre').value,
        EMPRESA = document.querySelector('#empresa').value,
        TELEFONO = document.querySelector('#telefono').value,
        ACCION = document.querySelector('#accion').value;

    if (NOMBRE === '' || EMPRESA === '' || TELEFONO === '') {
        // Dos parametros: texto y clase
        mostrarNotificacion('Todos los campos son obligatorios', 'error');
    } else {
        // Pasa la validacion, crear llamada a Ajax
        const INFOCONTACTO = new FormData();
        INFOCONTACTO.append('nombre', NOMBRE);
        INFOCONTACTO.append('empresa', EMPRESA);
        INFOCONTACTO.append('telefono', TELEFONO);
        INFOCONTACTO.append('accion', ACCION);

        // console.log(...INFOCONTACTO);

        if (ACCION === 'crear') {
            // Tenemos un nuevo contacto
            insertarBD(INFOCONTACTO);
        } else {
            // Editar el contacto
        }
        mostrarNotificacion('Contacto creado exitosamente', 'exito');
    }
}

/** Inserta en la BBDD via AJAX **/

function insertarBD(datos) {
    // Llamado a Ajax

    // Crear el objeto
    const XHR = new XMLHttpRequest();

    // Abrir la conexion
    XHR.open('POST', 'inc/modelos/modelo-contactos.php', true);

    // Pasar los datos
    XHR.onload = function() {
        if (this.status === 200) {
            // console.log(JSON.parse(XHR.responseText));
            const RESPUESTA = JSON.parse(XHR.responseText);

            console.log(RESPUESTA);
        }
    }

    // Enviar los datos
    XHR.send(datos);

    // Leer errores: opcional
}

// Notificacion en pantalla

function mostrarNotificacion(mensaje, clase) {
    const NOTIFICACION = document.createElement('div');
    NOTIFICACION.classList.add(clase, 'notificacion', 'sombra');
    NOTIFICACION.textContent = mensaje;

    // Formulario
    FORMULARIOCONTACTOS.insertBefore(NOTIFICACION, document.querySelector('form legend'));

    // Ocultar y mostrar notificacion
    setTimeout(() => {
        NOTIFICACION.classList.add('visible');

        setTimeout(() => {
            NOTIFICACION.classList.remove('visible');

            setTimeout(() => {
                NOTIFICACION.remove();
            }, 500);
        }, 3000);
    }, 100);
}