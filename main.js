const form = document.getElementById('form-compara');
const numeroMenorInput = document.getElementById('campoNumero1');
const numeroMaiorInput = document.getElementById('campoNumero2');

function comparaCampo(numeroMenor, numeroMaior) {
    const diferencaCampos = Number(numeroMaior) - Number(numeroMenor);
    return diferencaCampos;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const blocoDeuBom = document.querySelector('.deu-bom');
    const blocoDeuRuim = document.querySelector('.deu-ruim'); 

    blocoDeuBom.style.display = 'none';
    blocoDeuRuim.style.display = 'none';


    const numeroMenor = numeroMenorInput.value;
    const numeroMaior= numeroMaiorInput.value;

    if (comparaCampo(numeroMenor, numeroMaior) > 0) {
        blocoDeuBom.style.display = 'block';
        
    } else {
        blocoDeuRuim.style.display = 'block';
    }
})