# Aplicativo Todo List

Este é um aplicativo simples de lista de tarefas (todo list) criado com HTML, CSS e JavaScript. Ele permite que você adicione, edite e exclua tarefas, mantendo uma lista organizada das atividades que você precisa realizar.

## Índice

1. [Funcionalidades Principais](#funcionalidades-principais)
2. [Como Usar](#como-usar)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configuração](#configuração)
5. [Melhorias Futuras](#melhorias-futuras)
6. [Contribuindo](#contribuindo)
7. [Licença](#licença)


## Funcionalidades Principais

- **Adicionar Tarefa:** Você pode adicionar novas tarefas à lista, especificando um título e um estado para cada uma.

- **Editar Tarefa:** A funcionalidade de edição permite que você atualize o título, o estado e a descrição de uma tarefa existente.

- **Excluir Tarefa:** Você pode excluir uma tarefa da lista, removendo-a permanentemente.

- **Visualização Detalhada:** Ao clicar em uma tarefa, você pode ver detalhes adicionais e realizar edições específicas.

## Como Usar

### Adição de Tarefa:

1. Preencha o campo "Nova Tarefa" no formulário.
2. Clique em "Adicionar" para incluir a nova tarefa na lista.

### Edição de Tarefa:

1. Clique em uma tarefa existente na lista para abrir a visualização detalhada.
2. Faça as alterações necessárias no formulário.
3. Clique em "Salvar" para aplicar as alterações.

### Exclusão de Tarefa:

- Clique no botão "Excluir" ao visualizar uma tarefa para removê-la da lista.

### Visualização Detalhada:

- Ao clicar em uma tarefa, você verá um modal com informações detalhadas.
- Aqui, você pode editar a tarefa, fechar o modal ou excluí-la.

## Estrutura do Projeto

- **index.html:** Página principal que contém o formulário e a lista de tarefas.
- **style.css:** Arquivo de estilo para personalizar o layout e a aparência.
- **app/controller/AtividadeController.mjs:** Controlador responsável por gerenciar as operações de uma única tarefa.
- **app/controller/FormController.mjs:** Controlador para gerenciar o formulário de adição/editação de tarefas.
- **app/controller/ListaAtividadesController.mjs:** Controlador principal que gerencia a lista de tarefas.
- **app/model/Atividade.mjs:** Classe que representa uma única tarefa.
- **app/model/ListaAtividade.mjs:** Classe que representa a lista de tarefas.
- **app/view/AtividadeView.mjs:** Classe para renderizar a visualização de uma única tarefa.
- **app/view/ListaAtividadeView.mjs:** Classe para renderizar a lista de tarefas.

## Configuração

Não é necessária nenhuma configuração especial para usar este aplicativo. Basta abrir o arquivo index.html em seu navegador e começar a gerenciar suas tarefas.

## Melhorias Futuras

- Adição de funcionalidades de ordenação e filtragem.
- Melhorias na interface do usuário para uma experiência mais amigável.
- Suporte para armazenamento em nuvem para persistência de dados entre sessões.

## Contribuindo

Sinta-se à vontade para contribuir, abrir problemas ou sugerir melhorias para tornar este aplicativo ainda mais útil! O desenvolvimento colaborativo é sempre bem-vindo.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
