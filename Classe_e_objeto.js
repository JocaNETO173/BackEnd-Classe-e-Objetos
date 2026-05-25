let pessoa = {
    nome: "Pablo",
    idade: 20,
    profissao: "Pedreiro"
};

console.log(pessoa.nome);





function criarHeroi(){
    const nome = document.getElementById('nomeInput').value;
    const resultado = document.getElementById('resultado');
    const dadosHeroi = document.getElementById('dadosHeroi');
    if(nome != ""){
        resultado.style.display = '';
    }
    dadosHeroi.innerHTML = '<br> aaaaaaaaaaaaa';
}