/*formatea los valores y separa por puntos*/
const separarPorPuntos = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = separarPorPuntos(precio);

let contador = 0;
const cantidad = document.querySelector(".cantidad");
const botonMas = document.querySelector("#mas");
const botonMenos = document.querySelector("#menos");
const valorTotal = document.querySelector("#valor-total");
const stock = document.querySelector(".stock");

const aumentar = () => {

    if (contador < 5) {
        contador++;
        cantidad.innerHTML = contador;
        calcularTotal();
    } else {
        stock.style.display = "block";
        cantidad.style.color = "red";
        valorTotal.style.textDecoration = " line-through red";
    }
};

const disminuir = () => {
    if (contador > 0) {
        stock.style.display = "none";
        stock.style.display = "line";
        cantidad.style.color = "white";
        valorTotal.style.textDecoration = "";
        contador--;
        cantidad.innerHTML = contador;
        calcularTotal();
    }
};

const calcularTotal = () => {
    let valor = contador * precio;
    const numeroFormateado = separarPorPuntos(valor);
    valorTotal.innerHTML = numeroFormateado;
};

botonMas.addEventListener('click', aumentar);
botonMenos.addEventListener('click', disminuir);
