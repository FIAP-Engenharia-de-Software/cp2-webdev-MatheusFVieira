// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
    num = Number(valor)
    if (isNaN(num)) {
        return "Valor inválido"
    }
    return num
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor }; 