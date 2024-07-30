const prompt = require ('prompt-sync')();
const { listar } = require('./listar');
const { cadastrar } = require ('./cadastrar');
const { editar } = require ('./editar')
const { remover } = require ('./remover')

let contatos = [
    { nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
  ];


  function executar(){
    console.log(`
    Olá, seja bem-vindo a minha lista telefônica.
    Essas são nossas opções, digite o número referente a sua escolha.

        Menu de Opções

    1.Cadastrar novo número.
    2.Remover número existente.
    3.Listar todos os contatos.
    4.Editar.
    5.Sair.

    `)

    let opcao = prompt('Digite sua opção: ');
  

    switch(opcao){
        case'1':
            cadastrar(contatos, executar);
            break
        case'2':
            remover(contatos, prompt, executar);
            break
        case'3':
            listar(contatos);
            executar()
            break
        case'4':
            editar(contatos, executar);   
            break
        case'5':
            console.log('Obrigado por usar nossos serviços🤠')
            break;
        default:
            console.log('Opção inválida por favor tente novamente!');
            executar()
            break;
    }
  }

executar()