function listar(contatos) {
    if (contatos.length == 0){
        console.log('Não a nenhum contato salvo neste monento, adicione um para poder listalos!')
    }else{
    contatos.forEach((contato, ) => {
      console.log(`ID: ${contato.id} Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    })};
  };

module.exports = listar;