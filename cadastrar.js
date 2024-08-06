const prompt = require ('prompt-sync')();
let contatos = require('./contatos')

function cadastrar(callback){
    
    let nome = prompt('Qual seu nome? ')
    let telefone = prompt('Seu telefone por favor! ')
    let email = prompt('Agora para finalizar seu cadastro qual seu email! ')
    console.log('Seu cadastro foi efetuado com sucesso!! ')
    
    contatos.push({id: contatos.length + 1, nome, telefone, email})
    callback()
};

module.exports = cadastrar 
