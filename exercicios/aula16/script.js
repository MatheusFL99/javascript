
let num = document.querySelector('input#numero')
let lista = document.getElementById('lista')
let res = document.querySelector('div#res')
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
    return true
} else {
    return false
}
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, vetor)) {
        vetor.push(Number(num.value))        
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert('Valor inválido ou já encontado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    vetor.sort()
    let soma = 0
    for (let cont in vetor) {
        soma += vetor[cont]
    }
    let media = soma/vetor.length
    if (vetor.length > 0) {
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${vetor[vetor.length-1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${vetor[0]}</p>`
        res.innerHTML += `<p>Somando todos os valores o resultado é ${soma}`
        res.innerHTML += `<p>A média dos valores digitados é ${media}`
    } else {
        res.innerHTML = ``
    }

}