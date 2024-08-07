function listar(contatos) {
for(let i = 0; i < contatos.length; i++){
        const contato = contatos[i]
        console.log(`
        ID: ${contato.id},
        Nome: ${contato.nome},
        Email: ${contato.email},`)
      for(let j = 0;j < contato.telefones.length; j++){
        console.log(`   ${j+1}.  ${contatos.telefones[j]}`)
      }
      console.log('')
    }
  }


module.exports = listar;