<?php include 'inc/layout/header.php'; ?>

<div class="contenedor-barra">
    <h1>Agenda de contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
    <form action="#" id="contacto">
        <legend>
            Añada un contacto <span>Todos los campos son obligatorios</span>
        </legend>

        <div class="campos">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre del contacto">
            </div>

            <div class="campo">
                <label for="empresa">Empresa:</label>
                <input type="text" name="empresa" id="empresa" placeholder="Nombre de la empresa">
            </div>

            <div class="campo">
                <label for="telefono">Telefono:</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Teléfono del contacto">
            </div>
        </div>
        <!-- .campos -->

        <div class="campo enviar">
            <input type="submit" value="Añadir">
        </div>
    </form>
</div>

<div class="bg-blanco contenedor sombra contactos">
    <div class="contenedor-contactos">
        <h2>Contactos</h2>

        <input type="text" id="buscar" class="buscador" placeholder="Buscar contactos...">

        <p class="total-contactos">
            <span>2</span> contactos
        </p>

        <div class="contenedor-tabla">
            <table id="listado-contactos" class="listado-contactos">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Agustin</td>
                        <td>Telemercado</td>
                        <td>153584417</td>
                        <td>
                            <a href="#" class="btn btn-editar">
                                <i class="fas fa-edit"></i>
                            </a>

                            <button data-id="1" type="button" class="btn btn-borrar">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>Agustin</td>
                        <td>Telemercado</td>
                        <td>153584417</td>
                        <td>
                            <a href="#" class="btn btn-editar">
                                <i class="fas fa-edit"></i>
                            </a>

                            <button data-id="1" type="button" class="btn btn-borrar">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>Agustin</td>
                        <td>Telemercado</td>
                        <td>153584417</td>
                        <td>
                            <a href="#" class="btn btn-editar">
                                <i class="fas fa-edit"></i>
                            </a>

                            <button data-id="1" type="button" class="btn btn-borrar">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<?php include 'inc/layout/footer.php'; ?>