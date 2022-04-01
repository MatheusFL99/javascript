function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade>=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'bebem.png')
            }
            else if (idade <21){
                //Jovem
                img.setAttribute('src', 'jovemm.png')
            }
            else if (idade <50){
                //Adulto
                img.setAttribute('src', 'adultom.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade>=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'bebef.png')
            }
            else if (idade <21){
                img.setAttribute('src', 'jovemf.png')
                //Jovem
            }
            else if (idade <50){
                img.setAttribute('src', 'adultof.png')
                //Adulto
            }
            else{
                img.setAttribute('src', 'adultof.png')
                //Idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}