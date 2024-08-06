const { listar } = require('./listar');

function remover(vetor, prompt, callback) {
    if(vetor.length == 0){
        console.log('Não existe nehum contato salvo, tente adicionar um para poder remover ')
        callback()
    }else{
    console.log('Esses são nossos contatos digite o ID dele para remover ');

    listar(vetor);

    let opcaoRemover = parseInt(prompt('Digite o numero do contato que deseja remover'));
    vetor.splice(opcaoRemover-1, 1);
callback()
}};

module.exports = {remover}