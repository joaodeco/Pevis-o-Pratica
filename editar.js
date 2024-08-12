const prompt = require ('prompt-sync')();
const listar = require('./listar');
const contatos = require('./contatos')

function editar(contatos, callback){
    listar();
    let opcaoEditar = prompt('Qual desses você deseja editar: ')
    const index = contatos.findIndex(contato => contato.id === opcaoEditar );
    let nome = prompt('Digite o nome nome do contato! ');
    let telefones = []
    let telefone
    let email = prompt ('Agora para finalizar sua edição, o novo email! ');
    let jaExiste = contatos.find(cont => cont.email === email);
    if (jaExiste){
    console.log('Ja existe um contato com esse email!')
} else {
    while((telefone = prompt('Qual seus telefones(se não tiver deixe em branco): '))){
    telefones.push(telefone)
        contatos.push(editar({nome, telefone, email}));
}

}
callback();
};

module.exports = editar