
const FORMULARIOCONTACTOS = document.querySelector('#contacto');

eventListeners();

function eventListeners() {
    // Cuando el formulario de crear o editar se ejecuta
    FORMULARIOCONTACTOS.addEventListener('submit', leerFormulario);
}

function leerFormulario(e) {
    e.preventDefault();

    // Leer los datos de los inputs
    const   NOMBRE = document.querySelector('#nombre').value,
            EMPRESA = document.querySelector('#empresa').value,
            TELEFONO = document.querySelector('#telefono').value;

    if (NOMBRE === '' || EMPRESA === '' || TELEFONO === '') {
        console.log('Al menos un campo esta vacio');
    } else { }

}