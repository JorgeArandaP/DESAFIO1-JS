precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var total = document.querySelector('.valor-total');
cantidadSpan = document.querySelector('.cantidad');
suma = Number(cantidadSpan.innerHTML)+precio
total.innerHTML = suma
