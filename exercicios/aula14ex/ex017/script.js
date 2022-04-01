var vezes = 0
function gerar(){
    vezes += 1
    let numero = document.getElementById('txt1')
    let res = document.getElementById('res')
    let num = Number(numero.value)
    if (numero.value.length != 0){
        res.innerHTML = ` `
        for (let c = 0; c<=10; c++){
            let resultado = Number(c*num)
            res.innerHTML += `<p>${c} X ${num} = ${resultado}</p> `
        } 
    }else {
        res.innerHTML = `<p>Digite um número acima...</p>`
    }
}