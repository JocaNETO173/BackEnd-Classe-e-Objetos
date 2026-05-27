class heroi{
    constructor(nome, classe){
        this.nome = nome;
        this.classe = classe;
    }
}



function criarHeroi(){
    // capturando o que o usuário digitou/selecionou na tela
    const nomeHeroi = document.getElementById('nomeInput').value;
    const classeHeroi = document.getElementById('classeSelect').value;
    // criando o objeto dianmicamente com os valores dos campos
    const novoHeroi = new heroi(nomeHeroi, classeHeroi);

    const resultado = document.getElementById('resultado');
    const dadosHeroi = document.getElementById('dadosHeroi');
    if(nome != ""){
        resultado.style.display = '';
    }
}
