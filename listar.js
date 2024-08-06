function listar(vetor) {
    if (vetor.length == 0){
        console.log('Não a nenhum contato salvo neste monento, adicione um para poder listalos!')
    }else{
    vetor.forEach((contato, ) => {
      console.log(`ID: ${contato.id} Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    })};
  };

module.exports = listar;