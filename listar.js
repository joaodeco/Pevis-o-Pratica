function listar(contatos) {
for(let i = 0; i < contatos.length; i++){
        let contato = contatos[i]
        console.log(`
        ID: ${contato.id},
        Nome: ${contato.nome},
        Email: ${contato.email},`)
      for(let j = 0;j < contato.telefone.length; j++){
        console.log(`   ${j+1}  ${contato.telefone[j]}`)
      }
      console.log('')
    }
  }


module.exports = listar;