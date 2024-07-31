# Lista Telefônica em JavaScript

Este projeto é uma lista telefônica simples desenvolvida em JavaScript, com funcionalidades para adicionar, remover, editar e listar contatos. A aplicação é modularizada para garantir organização e clareza do código. A seguir, explicamos detalhadamente como cada função do projeto funciona.

## Funcionalidades

### 1. Executar
A função executar() é responsável por exibir o menu de opções para o usuário e capturar a escolha feita. Ela realiza os seguintes passos:
- Exibe o menu com as opções disponíveis.
- Captura a opção digitada pelo usuário e armazena na variável opção.
- Utiliza um switch case para determinar qual função será executada com base na opção escolhida pelo usuário.

### 2. Cadastrar
A função cadastrar() adiciona um novo contato à lista telefônica. O funcionamento é o seguinte:
- Verifica se a opção escolhida pelo usuário é válida.
- Caso a opção seja válida, solicita ao usuário o nome, telefone e email do novo contato.
- Armazena essas informações em variáveis respectivas.
- Utiliza o método .push() para adicionar o novo contato ao vetor contatos.
- Exibe uma mensagem confirmando que o cadastro foi realizado com sucesso.

### 3. Listar
A função listar() exibe todos os contatos presentes na lista telefônica. Os passos são:
- Verifica se a opção escolhida pelo usuário é válida.
- Caso a opção seja válida, utiliza um forEach para percorrer o vetor contatos.
- Exibe cada propriedade dos objetos de contato.

### 4. Editar
A função editar() permite editar um contato existente na lista telefônica. Ela funciona da seguinte maneira:
- Verifica se há algum contato no array.
- Se houver contatos, lista todos os contatos enumerados.
- Solicita ao usuário o novo nome, telefone e email para o contato que será editado.
- Atualiza o vetor contatos com as novas informações fornecidas.

## Conclusão

Este projeto oferece uma maneira simples e eficiente de gerenciar contatos utilizando JavaScript. A modularização das funções facilita a manutenção e a expansão futura do código. Se precisar de mais funcionalidades, novas funções podem ser adicionadas de forma semelhante às descritas acima.