
//teste 01- Fibonacci
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        return true;
      }
      let temp = b;
      b = a + b;
      a = temp;
    }
  
    return false;
  }
  
 function verificarNumero(){ 
    const verificar = parseInt(document.getElementById("numero").value);
    if (pertenceFibonacci(verificar)) {
        document.getElementById("resultado").innerHTML = "O numero " + verificar + " pertence à sequência de Fibonacci.";
    } else {
        document.getElementById("resultado").innerHTML = "O numero " + verificar + " <strong>não pertence à sequência de Fibonacci.</strong>";
  }
}


//teste 02- Teste Maiusculo/Minusculo
function verificarTexto(texto) {
    const regex = /a/gi; // Expressão regular para 'a' ou 'A' (global e case-insensitive)
    const ocorrencias = texto.match(regex); // Encontra todas as ocorrências
    const quantidade = ocorrencias ? ocorrencias.length : 0; // Conta as ocorrências

    if (quantidade > 0) {
        document.getElementById("resultadoTexto").innerHTML = `A letra 'A/a' aparece ${quantidade} vez(es) na string.`;
    } else {
        document.getElementById("resultadoTexto").innerHTML = `<strong>A letra 'A/a' não foi encontrada na string.</strong>`;
    }
}

function verificarLetraA(){
    const textoExemplo = (document.getElementById("texto").value);
    verificarTexto(textoExemplo);
}