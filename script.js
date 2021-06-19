function cadastraCurso() {
    var curso = document.getElementById("curso");
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var duracao = document.getElementById("duracao");

    var dados = JSON.parse(localstorage.getItem("dadosCurso"));

    if (dados == null) {
        localStorage.setItem("dadosCurso", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: curso.value,
        inicio: inicio.value,
        fim: fim.value,
        duracao: duracao.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosCurso", JSON.stringify(dados));

}
