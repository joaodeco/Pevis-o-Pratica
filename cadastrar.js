const prompt = require ('prompt-sync')();
let contatos = require('./contatos')

function cadastrar(contato, callback){
    
    let nome = prompt('Qual seu nome? ')
    let telefones = []
    let telefone
    while((telefone = prompt('Qual seus telefones(se não tiver deixe em branco)'))){
        telefones.push(telefone)
    }
    let email = prompt('Qual seu email? ')
    console.log('Seu cadastro foi efetuado com sucesso!! ')

    let jaExiste = contatos.find(cont => cont.email === contato.email);
    if (jaExiste){
        throw new Error('Ja existe um contato com esse email!')
    } else {
        contatos.push({id: contatos.length + 1, nome, telefone, email})
    }
    callback()
};

module.exports = cadastrar 
