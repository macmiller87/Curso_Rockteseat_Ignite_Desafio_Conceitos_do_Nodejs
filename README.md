# Projeto API TODO 

- Nessa aplicação foi feita uma API, que é uma gerador de tarefas TODOS, onde o usúario pode cadastrar um name e um username, e a aplicação gera um ID para esse usúario, pegando também o horário automáticamente no sistema.
- O usúario também pode craiar a sua lista de tarefas TODO, também é possível alterar o title, deadline e o status da tarefa para true.
- o usúario também pode deletar o TODO, criar mais TODOS e etc.

## [Desafio 1 Módulo Chapter 1: Conceitos do Nodejs](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8)
## Ferramentas 

- Foi utilizado o Nodejs/javascript como linguagem para desenvolver o Backend.
- framework/biblioteca Express, UUID, Cors e Nodemon.
- Foi utilizado a ferramenta/software Insomnia para trabalhar com as requisições HTTP.

## Requisitos

- [x] Deve ser possível cadastrar um name e um username.
- [x] Deve ser possível listar todas as tarefas do usúario.
- [x] Deve ser possível criar uma lista de tarefas (TODO).
- [x] Deve ser possível Atualizar os dados da lista de tarefas criada, (name) e (username) que possua o mesmo ID. 
- [x] Deve ser possível Atualizar os dados da lista de tarefas criada, o status (done) que possuir o mesmo ID. 
- [x] Deve ser possível deletar a lista de tarefas que possua o mesmo ID.
## Regras de negócio

- [x] Não deve ser possível cadastrar um name e um username já existente.
- [x] Não deve ser possível listar as tarefas de um usúario que não existe.
- [x] Não deve ser possível Atualizar os dados da lista de tarefas criada, (name) e (username) que possua um ID diferente . 
- [x] Não deve ser possível Atualizar os dados da lista de tarefas criada, o status (done) que não possuir o mesmo ID.
- [x] Não deve ser possível deletar a lista de tarefas que não possua o mesmo ID.
## Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima"`.
- Com o `Nodejs` instalado, Na sua IDE preferida, abra o terminal do `git`, e execute o seguinte comando => `npm update`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `npm run dev`.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia` e criar as rotas da aplicação.
- Para rodar os testes unitarios das rotas da aplicação execute o seguinte comando => `npm run test`

