/*-------------------------------------------------------------------------------------------------------------------------*/

function userController() {   // Função sem parâmetros e sem retornos, exemplo base
    console.log("Hello World");
}
userController(); // Chamando a função

/*-------------------------------------------------------------------------------------------------------------------------*/

function somar(firstN, secondN) { // Função com parâmetros, usada como callback; faz o cálculo e retorna o resultado
    return firstN + secondN
}   
function subtrair(x, y) { // Segunda função semelhante a primeira, apenas para exemplo de função callback
    return x - y
} 
const resultado = somar(2, 3); // Chama a função diretamente com dois parâmetros informados e armazena em uma variável

/*-------------------------------------------------------------------------------------------------------------------------*/

const valor = function() { // Função anônima, armazenada em uma variável
    console.log("Informação armazenada na variável valor")
}
valor(); // Chamando a função

/*-------------------------------------------------------------------------------------------------------------------------*/
// Arrow function: forma moderna e mais enxuta de escrever funções

    const saudacao = () => { // Função básica sem parâmetros ou return
        console.log("Essa é uma arrow function simples.")
    } 

    const multiplicar = (firstN, secondN) => firstN * secondN // Pparâmetros informados realizando operações, pode ser usado com chaves ou diretamente

    const resultadoMultiplicacao = multiplicar(4, 5) // Variável chamando a função e armazenado o valor do cálculo

    console.log("Resultado da multiplicação:", resultadoMultiplicacao) // Chamando a arrow function

    saudacao(); // Chamando a arrow function

/*-------------------------------------------------------------------------------------------------------------------------
OBSERVAÇÕES GERAIS:
Sempre nomear corretamente as variáveis instanciadas como parâmetros em uma função



-------------------------------------------------------------------------------------------------------------------------*/

//Conceito CALLBACK: Um callback é uma função que é passada como argumento para outra função
//e chamada depois que alguma operação é concluída. Neste exemplo, a função 'soma' é usada como callback

function operacao(firstN, secondN, somar, subtrair) { // Exemplo com múltiplos callbacks: um para somar e outro para subtrair
    const resultadoSoma = somar(firstN, secondN);       // Executa o callback da soma
    const resultadoSubtrai = subtrair(firstN, secondN) // Executa o callback da subtração
    console.log("Resultado da soma:", resultadoSoma)
    console.log("Resultado da subtração:", resultadoSubtrai)
}
operacao(10, 4, somar, subtrair) // Chamando a função principal informando os 2 parametros com os dois callbacks

/*-------------------------------------------------------------------------------------------------------------------------*/

