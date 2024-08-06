const prompt = require ('prompt-sync')();
const listar = require('./listar');
const contatos = require('./contatos')

function editar(callback){
    if (contatos.length == 0){
        console.log('Não a nenhum contato salvo neste monento, adicione um para poder editalos!');
    } else {
        listar();
        let opcaoEditar = prompt('Qual desses você deseja editar')
        const index = contatos.findIndex(contato => contato.id === opcaoEditar );
        let nome = prompt('Digite o nome nome do contato!');
        let telefone = prompt('Agora o novo telefone!');
        let email = prompt ('Agora para finalizar sua edição, o novo email!');
        contatos.push(editar(index, {nome, telefone, email}));
        callback();
    };
};

module.exports = editar