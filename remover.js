const contatos = require('./contatos');
const  listar  = require('./listar');

function remover(vetor, prompt, callback) {
    if(vetor.length == 0){
        console.log('Não existe nehum contato salvo, tente adicionar um para poder remover ')
        callback()
    }else{
    console.log('Esses são nossos contatos digite o ID dele para remover: ');

    listar(vetor);

    let opcaoRemover  = parseInt(prompt('Digite o ID do contato que deseja remover: '));
    let posi = vetor.findIndex(contato => contato.id == opcaoRemover)
    if(posi !== -1){
    let confirmacaoRemover = prompt('Tem certeza que deseja remover esse contato (Essa ação não poderá ser desfeita): ').toLowerCase()
    
    if(confirmacaoRemover == 'sim'){

        vetor.splice(posi, 1)
        console.log('Removido com sucesso! ')
        callback()

    } else {
        console.log('A operação foi cancelada, voltando ao menu')
        callback()
    }
}else{
    console.log('Numero não existente, retornando...')
    callback()
}
}};

module.exports = remover