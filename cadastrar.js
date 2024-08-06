const prompt = require ('prompt-sync')();
var contatos = require('./contatos')

function cadastrar(vetor, callback){
    contato.id = contatos.length + 1;
    let nome = prompt('Qual seu nome? ')
    let telefone = prompt('Seu telefone por favor! ')
    let email = prompt('Agora para finalizar seu cadastro qual seu email! ')
    console.log('Seu cadastro foi efetuado com sucesso!! ')
    
    vetor.push(nome, telefone, email)
    callback()
};

module.exports = cadastrar 
