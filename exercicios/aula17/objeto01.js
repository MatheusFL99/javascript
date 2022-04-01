let eu = {nome: `Matheus`, sexo: `M`, idade: 21, peso: 59.5, engordar(p) {
    this.peso += p
}}
console.log(`${eu.nome} tem ${eu.idade} anos e pesa ${eu.peso}kg`)
eu.engordar(5)
console.log(`${eu.nome} pesa ${eu.peso}`)