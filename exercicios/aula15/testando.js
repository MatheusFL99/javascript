let num=[5,8,2,4,3]
num.push(6) // Adicionando o 6 no ultimo slot do vetor
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos` )
console.log(`Nosso vetor organizado é ${num.sort()}` )
console.log(`O menor valor do vetor é ${num[0]}` )

for (let c = 0; c<num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}` )
}
console.log(`\n`)
for (let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]} `)
}
console.log(`\n\n`)

let pos = num.indexOf(4)
if (pos == -1){
    console.log('Valor não encontrado!')
} else{
    console.log(`O valor 4 está na posição ${pos} `)
}