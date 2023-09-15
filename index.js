javascriptCopy code
const pessoa = {
nome: "Alice",
idade: 25,
temCarteiraDeMotorista: true
}
if (pessoa.idade >= 18 && pessoa.temCarteiraDeMotorista) {
console.log(`${pessoa.nome} pode dirigir!`)
} else {
console.log(`${pessoa.nome} não pode dirigir.`)
}

// O código define um objeto pessoa com 3 atributos e cria uma condicional que se a pessoa tem amis de 18 (que nesse caso é verdade) e imprime que ela pode dirigir, neste caso sendo ''Alice pode dirigir!'', caso ela fosse menor iria imprimir ''Alice não pode dirigir''

const animal = {
    nome: "Leão",
    carnivoro: true
    }
    if (animal.carnivoro) {
    console.log(`${animal.nome} é um animal carnívoro.`)
    } else {
    console.log(`${animal.nome} não é um animal carnívoro.`)
    }

//esse código cria um objeto com atributo nome, sendo Leão e se ele é ou não carnívoro por um booleano, nesse caso true. O comando imprime que o Leão é um animal carnívoro.

const numero = 10;
if (numero > 5) {
console.log("O número é maior do que 5.");
} else {
console.log("O número é menor ou igual a 5.");
}
if (numero % 2 === 0) {
console.log("O número é par.");
} else {
console.log("O número é ímpar.");
}


Este código definiuy a variável número como 10, e criou condicionais para se o número for maior que 5 imprime "O número é maior do que 5." e se não for, "O número é menor ou igual do que 5." e também verifica o resto da divisão por 2 para dizer se o número é par ou não
nesse caso, diria que o "O número é maior do que 5." e que ''O número é par''


let idade = prompt('Qual a sua idade?')
if (idade >= 18){
    console.log('Você é maior de idade')

    }else{
        console.log('Você é menor de idade')
    }

let turno = prompt('Qual turno você estuda? Responda com M, T ou N')
if (turno==='M'){
    console.log('Bom dia!')
}else if (turno==='T'){
    console.log('Boa Tarde!')
}else if(turno==='N'){
    console.log('Boa Noite')
}else{
    console.log('Turno inválido')
    
}

let turno = prompt('Qual turno você estuda? Responda com M, T ou N')
switch (turno){
    case 'M':
        console.log('Bom Dia!')
        break;
    case 'T':
        console.log('Boa tarde')
        break;
    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('Turno inválido')
        break;

}

//Crie um objeto chamado aluno com as seguintes propriedades: nome ,
idade , tipoDeCurso e temBolsa . Em seguida, escreva um programa que
verifica se o aluno pode se candidatar a uma bolsa de estudos. Para ser
elegível, o aluno deve ter menos de 30 anos, estar matriculado em um
curso de graduação e não ter bolsa. Se o aluno atender a todos esses
critérios, imprima "Você pode se candidatar a uma bolsa de estudos!".
Caso contrário, imprima "Desculpe, você não atende aos requisitos para
a bolsa."

const aluno = {
    nome: 'Yago',
    idade: 19,
    tipoDeCurso: 'Graduação',
    temBolsa: true,

}

if (aluno.idade < 30 && aluno.tipoDeCurso === 'Graduação' && aluno.temBolsa === false){
    console.log('Você pode se candidatar a uma bolsa de estudos!')
}else{
    console.log('Você não pode se candidatar a uma bolsa de estudos!')
}


Crie um objeto chamado produto com as propriedades nome , preco ,
desconto e freteGratis . Em seguida, escreva um programa que calcule
o preço final do produto levando em consideração o desconto e a
possibilidade de frete grátis. 
Se o produto tiver desconto e frete grátis,
imprima "Preço final: [preço com desconto] (Frete Grátis)". 
Se tiver apenas desconto, imprima "Preço final: [preço com desconto]". 
Se tiver apenas frete grátis, imprima "Preço final: [preço] (Frete Grátis)". 
Se não tiver nenhum dos dois, imprima "Preço final: [preço]". 
Certifique-se de
que o programa funcione corretamente mesmo se o objeto produto for
alterado com diferentes valores.


let produto ={
    nome: 'Bola',
    preco: 20,
    desconto: 3.4,
    freteGratis: true,

}

produto.precoComDesconto = produto.preco-produto.desconto


if (produto.freteGratis=== true && produto.desconto > 0){
    console.log('Preço final: '+produto.precoComDesconto+' (Frete grátis)')

}else if (produto.freteGratis === false && produto.desconto > 0 ){
    console.log('Preço final: '+produto.precoComDesconto)
}else if (produto.freteGratis === true && produto.desconto === 0){
    console.log('Preço final: '+produto.preco+' (Frete Grátis)')
}else if (produto.freteGratis === false && produto.desconto === 0){
    console.log('Preço final: '+produto.preco)
}