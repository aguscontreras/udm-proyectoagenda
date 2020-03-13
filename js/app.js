const FORMULARIOCONTACTOS = document.querySelector('#contacto');
const LISTADOCONTACTOS = document.querySelector('#listado-contactos tbody')

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

            // inserta un nuevo elemento a la tabla
            const NUEVO_CONTACTO = document.createElement('tr');

            NUEVO_CONTACTO.innerHTML = `
                <td>${RESPUESTA.datos.nombre}</td>
                <td>${RESPUESTA.datos.empresa}</td>
                <td>${RESPUESTA.datos.telefono}</td>
            `;

            // crear contenedor para botones
            const CONTENEDOR_ACCIONES = document.createElement('td');

            // crear el icono de editar
            const ICONO_EDITAR = document.createElement('i');
            ICONO_EDITAR.classList.add('fas', 'fa-edit');

            // crea el enlace para editar
            const BTN_EDITAR = document.createElement('a');
            BTN_EDITAR.appendChild(ICONO_EDITAR);
            BTN_EDITAR.href = `editar.php?id=${RESPUESTA.datos.id_insertado}`;
            BTN_EDITAR.classList.add('btn', 'btn-editar');

            // agregarlo al padre
            CONTENEDOR_ACCIONES.appendChild(BTN_EDITAR);

            // crear el icono de eliminar
            const ICONO_ELIMINAR = document.createElement('i');
            ICONO_ELIMINAR.classList.add('fas', 'fa-trash-alt');

            // crea el boton de eliminar
            const BTN_ELIMINAR = document.createElement('button');
            BTN_ELIMINAR.appendChild(ICONO_ELIMINAR);
            BTN_ELIMINAR.setAttribute('data-id', RESPUESTA.datos.id_insertado);
            BTN_ELIMINAR.classList.add('btn', 'btn-borrar');

            // agregarlo al padre
            CONTENEDOR_ACCIONES.appendChild(BTN_ELIMINAR);

            // agregarlo al tr
            NUEVO_CONTACTO.appendChild(CONTENEDOR_ACCIONES);

            // agregarlo con los contactos
            LISTADOCONTACTOS.appendChild(NUEVO_CONTACTO);
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