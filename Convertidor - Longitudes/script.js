function actualizarOpciones() {
    // Obtener el valor seleccionado en el menú 'De'
    var fromUnit = document.getElementById('fromUnit').value;

    // Obtener el menú 'A'
    var toUnitSelect = document.getElementById('toUnit');

    // Limpiar las opciones existentes
    toUnitSelect.innerHTML = '';

    // Agregar opciones según la unidad seleccionada en 'De'
    switch (fromUnit) {
        case 'metros':
            toUnitSelect.options.add(new Option('Centímetros', 'centimetros'));
            toUnitSelect.options.add(new Option('Pulgadas', 'pulgadas'));
            toUnitSelect.options.add(new Option('Pies', 'pies'));
            break;
        case 'centimetros':
            toUnitSelect.options.add(new Option('Metros', 'metros'));
            toUnitSelect.options.add(new Option('Pulgadas', 'pulgadas'));
            toUnitSelect.options.add(new Option('Pies', 'pies'));
            break;
        case 'pulgadas':
            toUnitSelect.options.add(new Option('Metros', 'metros'));
            toUnitSelect.options.add(new Option('Centímetros', 'centimetros'));
            toUnitSelect.options.add(new Option('Pies', 'pies'));
            break;
        case 'pies':
            toUnitSelect.options.add(new Option('Metros', 'metros'));
            toUnitSelect.options.add(new Option('Centímetros', 'centimetros'));
            toUnitSelect.options.add(new Option('Pulgadas', 'pulgadas'));
            break;
    }
}

function calcular() {
    // Obtener los valores del usuario
    var longitud = parseFloat(document.getElementById('length').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    // Realizar la conversión
    var resultado;
    switch (fromUnit) {
        case 'metros':
            resultado = convertirDesdeMetros(longitud, toUnit);
            break;
        case 'centimetros':
            resultado = convertirDesdeCentimetros(longitud, toUnit);
            break;
        case 'pulgadas':
            resultado = convertirDesdePulgadas(longitud, toUnit);
            break;
        case 'pies':
            resultado = convertirDesdePies(longitud, toUnit);
            break;
        default:
            resultado = 'Error en la selección de la unidad';
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = resultado;
}

function convertirDesdeMetros(valor, toUnit) {
    switch (toUnit) {
        case 'centimetros':
            return (valor * 100) + ' centímetros';
        case 'pulgadas':
            return (valor * 39.37) + ' pulgadas';
        case 'pies':
            return (valor * 3.281) + ' pies';
        default:
            return valor + ' metros';
    }
}

function convertirDesdeCentimetros(valor, toUnit) {
    switch (toUnit) {
        case 'metros':
            return (valor / 100) + ' metros';
        case 'pulgadas':
            return (valor / 2.54) + ' pulgadas';
        case 'pies':
            return (valor / 30.48) + ' pies';
        default:
            return valor + ' centímetros';
    }
}

function convertirDesdePulgadas(valor, toUnit) {
    switch (toUnit) {
        case 'metros':
            return (valor / 39.37) + ' metros';
        case 'centimetros':
            return (valor * 2.54) + ' centímetros';
        case 'pies':
            return (valor / 12) + ' pies';
        default:
            return valor + ' pulgadas';
    }
}

function convertirDesdePies(valor, toUnit) {
    switch (toUnit) {
        case 'metros':
            return (valor / 3.281) + ' metros';
        case 'centimetros':
            return (valor * 30.48) + ' centímetros';
        case 'pulgadas':
            return (valor * 12) + ' pulgadas';
        default:
            return valor + ' pies';
    }
}

// Inicializar las opciones del menú 'A' al cargar la página
actualizarOpciones();