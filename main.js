const formContatos = document.getElementById("form-contatos");
const tabelaContatos = document.getElementById("tabela-contatos");
const contatos = []
const telefones = []

let linhas = '';

formContatos.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    adicionaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já existe`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(parseInt(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
}
    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function adicionaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
