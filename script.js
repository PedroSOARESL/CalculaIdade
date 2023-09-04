function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`textano`)
    var res = document.querySelector(`div#res`)
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert(`[ERRO]Verifique os dados inseridos e tente novamente!`)
    } else{
        fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

        if (fsex[0].checked){
            gênero = `Homem`
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute(`src`, `2.jpg`)
            }else if (idade < 21){
                //jovem
                img.setAttribute(`src`, `3.jpg`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`, `1.jpg`)
            }else {
                //idoso
                img.setAttribute(`src`, `4.jpg`)
            }
        } else{
            gênero = `Mulher`
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute(`src`, `7.jpg`)
            }else if (idade < 21){
                //jovem
                img.setAttribute(`src`, `5.jpg`)
            } else if (idade < 50){
                //adulto
                img.setAttribute(`src`, `6.jpg`)
            }else {
                //idoso
                img.setAttribute(`src`, `8.jpg`)
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
 
    }
}