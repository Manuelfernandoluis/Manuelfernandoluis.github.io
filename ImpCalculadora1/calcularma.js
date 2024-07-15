
//Função para inserir os dados dentro da tabela
function inserir(num){
    var numero=document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML=numero+num
}

//Função apague tudo
function clean(){

    document.getElementById('resultado').innerHTML=''
}

//Função para apagar cada string um por um
function back() {
    var resultado=document.getElementById('resultado').innerHTML

    document.getElementById('resultado').innerHTML=resultado.substring(0,resultado.length-1)
}

function calcular(){
    var resultado=document.getElementById('resultado').innerHTML

    if(resultado){
        document.getElementById('resultado').innerHTML=eval(resultado)
    }else{
        alert('[ERRO] Por favor digite um número')
    }

}