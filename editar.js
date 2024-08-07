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
        let telefones = []
        let telefone
        while((telefone = prompt('Qual seus telefones(se não tiver deixe em branco): '))){
            telefones.push(telefone)
        }
        let email = prompt ('Agora para finalizar sua edição, o novo email!');
        
        let jaExiste = contatos.find(cont => cont.email === contatos.email);
    if (jaExiste){
        throw new Error('Ja existe um contato com esse email!')
    } else {
        contatos.push(editar(index, {nome, telefone, email}));
    }

        callback();
    };
};

module.exports = editar