'use strict'



function removerClasses(){

    const resultado = document.getElementById('resultado')
    resultado.classList.remove("abaixo-cinco", "cinco-dez", "acima-dez")

}

function limparCampos(){

    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    preco.value = ''
    desconto.value = ''
    resultado.textContent = ''

    removerClasses()
}

function calcularDesconto(){
    // Calculo Porcentagem: resultado <- (valor * percentual) / 100
    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    // Converte para número
    const valor = Number(preco.value)
    const porcentagem = Number(desconto.value)

    // Calculo do novo preço
    const precoDesconto = (valor * porcentagem) / 100
    const novoPreco = valor - precoDesconto
    resultado.textContent = novoPreco


    if (porcentagem < 5){
        removerClasses()
        resultado.classList.add("abaixo-cinco")
        

    }else if(porcentagem >=5 && porcentagem <= 10) {
        removerClasses()
        resultado.classList.add("cinco-dez")

    }else{
        
        removerClasses()
        resultado.classList.add("acima-dez")
       
    }
   
    
    //   - Até 5% → `#14532d` resultado.abaixo-cinco
//   - Entre 5% e 10% → `#713f12` resultado.cinco-dez
//   - Acima de 10% → `#7f1d1d` resultado.acima-dez
// 
}

