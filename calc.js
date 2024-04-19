const calc = document.getElementById('bnt')

//evento
calc.addEventListener('click', IMC)

//função
function IMC() {
    let nome = document.getElementById('nome').value
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resu = document.getElementById('resultado')

    if (nome !== '' && peso !== '' && altura !== '') {
        var calcuIMC = (peso / (altura * altura)).toFixed(2);

        let condicao = '';

        if (calcuIMC < 16) {
            condicao = 'Magreza grave'
        } else if (calcuIMC >= 16 && calcuIMC <= 16.9) {
            condicao = 'Magreza Moderada'
        } else if (calcuIMC >= 17 && calcuIMC <= 18.5) {
            condicao = 'Magreza leve'
        } else if (calcuIMC >= 18.6 && calcuIMC <= 24.9) {
            condicao = 'Peso Ideal'
        } else if (calcuIMC >= 25 && calcuIMC <= 29.9) {
            condicao = 'sobrepeso'
        } else if (calcuIMC >= 30 && calcuIMC <= 34.9) {
            condicao = 'Obesidade Grau I'
        } else if (calcuIMC >= 35 && calcuIMC <= 39.9) {
            condicao = 'Obesidade Grau II ou severa'
        } else if (calcuIMC > 40) {
            condicao = 'Obesidade Grau III ou mórbida'
        }
        resu.textContent = `Seu IMC é ${calcuIMC} e você está com ${condicao}`


    } else {
        resu.textContent = 'preencha todos os campos'
    }
}