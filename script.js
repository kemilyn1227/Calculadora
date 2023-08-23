let tela = document.querySelector('.tela')

let conta = ''

function adicionar(element){
    
    conta +=(element)

    tela.innerHTML=`${conta}` 

}

function apagar(){
    conta = conta.substring(0,conta.length -1)
    tela.innerHTML = conta
}

function limpar(){
    conta = []
    tela.innerHTML=''
}


function resultado(){

    tela.innerHTML=eval(conta)
    

}