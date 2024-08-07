const prompt = require ('prompt-sync')();
let contatos = require('./contatos')

function cadastrar(callback){
    
    let nome = prompt('Qual seu nome? ')
    let telefones = []
    let telefone
    let email = prompt('Qual seu email? ')
    let jaExiste = contatos.find(cont => cont.email === email);
    if (jaExiste){
        console.log('Ja existe um contato com esse email!')
        callback()
    }else{
    while((telefone = prompt('Qual seus telefones(se não tiver deixe em branco)'))){
        telefones.push(telefone)
        contatos.push({id: contatos.length + 1, nome, email})
    }
};
};
module.exports = cadastrar
