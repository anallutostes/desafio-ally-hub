var form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", function (event) {
    if (form.checkValidity()) {
        console.info("Cadastro realizado com sucesso!");
    } else {
        console.error("Existem erros no cadastro!");
    }
}, false);

var iniDb = function (type) {

    if (type == "localStorage") {
        if (!localStorage.getItem("cursos"))
            localStorage.setItem("cursos", JSON.stringify([]));
    }

};

var cleanDb = function () {
    if (localStorage.getItem("cursos"))
        localStorage.removeItem("cursos");

};

var save = function (type, curso) {
    iniDb(type);
    if (type = "localStorage") {
        var cursos = JSON.parse(localStorage.getItem("cursos"));
        cursos.push(curso);
        localStorage.setItem("cursos", JSON.stringify(cursos));

        var item = [];
        item.push(curso);

        renderLine(item);
    }

};

var getAll = function (type) {
    iniDb(type);

    if (type == "localStorage") {
        var cursos = JSON.parse(localStorage.getItem("cursos"));
        renderAll(cursos);
    }




};

var search = function (type, term) {
    iniDb(type);

    if (type == "localStorage") {
        var cursos = JSON.parse(localStorage["cursos"]);
        var cursosFound = [];

        cursos.forEach(function (curso) {
            if (curso.nome == term) {
                cursosFound.push(curso);
            }
        });

        renderAll(cursosFound);
    }

}

var searchEvt = document.getElementById('search');

searchEvt.addEventListener("click", function (event) {
    var term = document.getElementById("filtro").value;
    search(storageSetup(), term);
}

function renderLine(cursos) {
        var table = document.getElementById("cursos").getElementsByTagName('tbody')[0];

        cursos.forEach(function (item) {
            var newRow = table.insertRow(table.rows.length);

            var newCell_1 = newRow.insertCell(0);
            var newCell_2 = newRow.insertCell(1);
            var newCell_3 = newRow.insertCell(2);
            var newCell_4 = newRow.insertCell(3);

            var nome = document.createTextNode(item["nome"]);
            var inicio = document.createTextNode(item["inicio"]);
            var termino = document.createTextNode(item["termino"]);
            var duracao = document.createTextNode(item["duracao"]);

            newCell_1.appendChild(nome);
            newCell_2.appendChild(inicio);
            newCell_3.appendChild(termino);
            newCell_4.appendChild(duracao);

            newCell_5.innerHTML = "<button type='button' onclick='removeCurso(this)' class='btn btn-danger btn-xs'><span class='glyphi"

            console.log(item["nome"], item["inicio"], item["fim"], item["duracao"]);
        }
        
    });

}

function renderAll(cursos) {
    var table = document.getElementById("cursos").getElementsByTagName('tbody')[0];
    var tbodyNew = document.createElement('tbody');
    table.parentNode.replaceChild(tbodyNew, table);

    var table = document.getElementById("cursos").getElementsByTagName('tbody')[0];

    cursos.forEach(function (item) {
        var newRow = table.insertRow(table.rows.length);

        var newCell_1 = newRow.insertCell(0);
        var newCell_2 = newRow.insertCell(1);
        var newCell_3 = newRow.insertCell(2);
        var newCell_4 = newRow.insertCell(3);

        var nome = document.createTextNode(item["nome"]);
        var inicio = document.createTextNode(item["inicio"]);
        var termino = document.createTextNode(item["termino"]);
        var duracao = document.createTextNode(item["duracao"]);

        newCell_1.appendChild(nome);
        newCell_2.appendChild(inicio);
        newCell_3.appendChild(termino);
        newCell_4.appendChild(duracao);

        newCell_5.innerHTML = "<button type='button' onclick='removeCurso(this)' class='btn btn-danger btn-xs'><span class='glyphic

        console.log(item["nome"], item["inicio"], item["fim"], item["duracao"]);
    }

}

function removeCurso(row) {
    var i = row.parentNode.parentNode.rowIndex;
    console.log("Linha Removida => ", i);
    document.getElementById("cursos").deleteRow(i);
}
