function fibonacci(numProcurado){
    let num1 = 0;
    let num2 = 1;
    let num3;

    while(num1 <= numProcurado){
        if(num1 === numProcurado){
            return console.log(`O número ${numProcurado} pertence à sequancia de Fibonacci`)
        }else{
            num3 = num1 + num2
            num1 = num2
            num2 = num3
        }
    }
    return console.log(`O número ${numProcurado} NÃO pertence à sequancia de Fibonacci`)
}

const numeroProcudado = 21;
const sequencia = fibonacci(numeroProcudado);