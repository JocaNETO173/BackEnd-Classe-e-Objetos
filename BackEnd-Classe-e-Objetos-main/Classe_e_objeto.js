class heroi {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
}



function criarHeroi() {
    // capturando o que o usuário digitou/selecionou na tela
    const nomeHeroi = document.getElementById('nomeInput').value;
    const classeHeroi = document.getElementById('classeSelect').value;
    // criando o objeto dinamicamente com os valores dos campos
    const novoHeroi = new heroi(nomeHeroi, classeHeroi);

    // Exibindo na tela através das propriedades

    if (nomeHeroi != "") {
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('dadosHeroi').innerHTML = `
        <strong>Nome:</strong> ${novoHeroi.nome}<br>
        <strong>Classe:</strong> ${novoHeroi.classe}
        `;
    }
}
