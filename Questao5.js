function inverterString(string){
    let stringInvertida = ''
    for (let x = string.length - 1; x >= 0; x--){
        stringInvertida += string[x]
    }
    return stringInvertida
}

let stringParaInterver = 'sapato'
let stringInvertida = inverterString(stringParaInterver)
console.log(stringInvertida)