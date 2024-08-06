const contatos = require('./contatos');
const  listar  = require('./listar');

function remover(vetor, prompt, callback) {
    if(vetor.length == 0){
        console.log('Não existe nehum contato salvo, tente adicionar um para poder remover ')
        callback()
    }else{
    console.log('Esses são nossos contatos digite o ID dele para remover ');

    listar(vetor);

    let opcaoRemover = parseInt(prompt('Digite o ID do contato que deseja remover'));
    contatos.findIndex(vetor => vetor.splice(opcaoRemover, 1));
    console.log('Removido com sucesso! ')
callback()
}};

module.exports = remover