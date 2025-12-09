let opcao = Number(prompt("Digite uma opcão 1, 2, 3"))
if(opcao === 1){
    const peso1 = Number(prompt("Digite o 1º peso: "))
    const peso2 = Number(prompt("Digite o 2º peso: "))
    const peso3 = Number(prompt("Digite o 3º peso: "))
    const peso4 = Number(prompt("Digite o 4º peso: "))
    const peso5 = Number(prompt("Digite o 5º peso: "))
    let soma = (peso1 + peso2 + peso3 + peso4 + peso5) 
    let media = soma / 5

    alert('a média é: ' + media);


}else if (opcao === 2){
    const num1 = Number(prompt("Digite o primeiro número: "))
    const num2 = Number(prompt("Digite o segundo número: "))

    let opcao = (prompt("Escolha a operação matemática: +, -, /, *"))
    let resultado;

    if(opcao === "+"){
        resultado = num1 + num2 
    }else if (opcao === "-"){
        resultado = num1 - num2
    }else if(opcao === "/"){
        resultado = num1 / num2
    }else if(opcao === "*"){
        resultado = num1 + num2
}
   alert("O resultado é: " + resultado);

}else if (opcao === 3){
    let negativos = 0;
    for(i = 1; i <= 10; i++){ 
    let num = Number(prompt("Digite um número: "))
    if(num > 0){
        negativos++
    }
}
     alert("Os números negativos que você digitou foram: " + negativos);


}