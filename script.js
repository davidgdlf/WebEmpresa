document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de subir y bajar
    var btnSubir = document.querySelectorAll('.btn-subir');
    var btnBajar = document.querySelectorAll('.btn-bajar');
    var btnConfirmar = document.querySelector('.btn-confirmar');

    // Iterar sobre los botones de subir y agregar un listener para cada uno
    btnSubir.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Obtener el precio actual y convertirlo a un número
            var precioText = this.parentNode.querySelector('span').textContent; // Texto del precio con el símbolo del euro
            var precio = parseInt(precioText.replace('€', '').replace(',', ''), 10); // Convertir el texto a número
            
            // Aumentar el precio en 50 unidades
            precio += 50;
            
            // Actualizar el precio en la interfaz
            this.parentNode.querySelector('span').textContent = precio + '€';
        });
    });

    // Iterar sobre los botones de bajar y agregar un listener para cada uno
    btnBajar.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Obtener el precio actual y convertirlo a un número
            var precioText = this.parentNode.querySelector('span').textContent; // Texto del precio con el símbolo del euro
            var precio = parseInt(precioText.replace('€', '').replace(',', ''), 10); // Convertir el texto a número
            
            // Verificar que el precio no sea menor a 0
            if (precio >= 50) { // Cambiado a 50 para asegurar que el precio no se vuelva negativo
                // Disminuir el precio en 50 unidades
                precio -= 50;
                
                // Actualizar el precio en la interfaz
                this.parentNode.querySelector('span').textContent = precio + '€';
            }
        });
    });

    // Agregar evento al botón de confirmar precio
    btnConfirmar.addEventListener('click', function() {
        alert("¡Su precio se ha actualizado!");
    });
});
