const prompt = require ('prompt-sync')();
const { listar } = require('./listar');

function editar(vetor, callback){
    if (contatos.length == 0){
        console.log('Não a nenhum contato salvo neste monento, adicione um para poder editalos!')
        editar()
    }
    else{
        listar()
        let opcaoEditar = prompt('Digite o númelogro do contato que deseja editar!')
        
        let nome = prompt('Digite o nome nome do contato!')
        let telefone = prompt('Agora o novo telefone!')
        email = prompt ('Agora para finalizar sua edição, o novo email!')

        vetor.push(cadastrar(nome, telefone, email))
        callback()
    }
}