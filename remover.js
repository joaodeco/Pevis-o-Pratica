const { listar } = require('./listar');

function remover(vetor, prompt, callback) {
    if(vetor.length == 0){
        console.log('Não existe nehum contato salvo, tente adicionar um para poder remover')
    }else{
    console.log('Esses são nossos contatos escolha um deles para remover');

    listar(vetor);

    let opcaoRemover = parseInt(prompt('Digite o numero do contato que deseja remover'));
    vetor.splice(opcaoRemover-1, 1);
callback()
}};

module.exports = {remover}