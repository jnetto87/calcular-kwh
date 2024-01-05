function CalcularKwh() {


    let valorWatts = parseFloat(document.getElementById('valorWatts').value);
    let valorHoras = parseFloat(document.getElementById('valorHoras').value);
    let valorDias = parseFloat(document.getElementById('valorDias').value);

    if (isNaN(valorWatts) || isNaN(valorHoras) || isNaN(valorDias)) {
        alert('Insira um numero'); return;
    }

    let multiplicarResultado = valorWatts * valorHoras * valorDias;



    let resultadoMil = multiplicarResultado / 1000;



    let valorPreco = parseFloat(document.getElementById('valorPreco').value);

    if (isNaN(valorPreco)) {
        alert('Insira um numero'); return;
    }

    let multiplicarPreco = resultadoMil * valorPreco;

    document.getElementById('resultado').innerText = `Total R$ ${multiplicarPreco.toFixed(2)}`;

} 