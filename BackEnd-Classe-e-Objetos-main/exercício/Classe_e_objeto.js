/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
 No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
 no painel de resultado acessando a propriedade do objeto."
*/ 

class heroi {
    constructor(nome, classe, nivel) {
        this.nome = nome;
        this.classe = classe;
        this.nivel = nivel
    }
}

function criarHeroi() {
    // capturando o que o usuário digitou/selecionou na tela
    const nomeHeroi = document.getElementById('nomeInput').value;
    const classeHeroi = document.getElementById('classeSelect').value;
    const nivelHeroi = document.getElementById('nivelInput').value;
    // criando o objeto dinamicamente com os valores dos campos
    const novoHeroi = new heroi(nomeHeroi, classeHeroi, nivelHeroi);

    // Exibindo na tela através das propriedades

    if (nomeHeroi != "") {
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('dadosHeroi').innerHTML = `
        <strong>Nome:</strong> ${novoHeroi.nome}<br>
        <strong>Classe:</strong> ${novoHeroi.classe}<br>
        <strong>Nível:</strong> ${novoHeroi.nivel}
        `;
    }
}