# Lista de Registros

-> Lista e Cadastro de itens em Angular


## Descrição do Projeto
"A aplicação deverá ser composta por 2 páginas, sendo uma para cadastro e outra para listagem.
Ambas as páginas devem possuir um menu lateral, localizado à esquerda, com links para as
mesmas, além de um sistema de navegação estrutural.
Os dados devem ser persistidos no formato JSON, fazendo uso da LocalStorage, adicionando,
removendo e editando itens do JSON em questão. Não é necessária a utilização de APIs."

Essa foi a proposta inicial, entratanto nunca mexi com Angular sendo esse o meu primeiro projeto e foi criado em um final de semana, o que é extremamente corrido para 
aprender uma tecnologia nova. Por esse motivo optei por modificar o designer para uma forma que conseguisse fazer um crud basico de forma dinamica que deixasse um visual moderno e basico ao mesmo tempo para que não precisasse pensar em muita coisa já que estava aprendendo na pratica o basico do Angular.

O projeto consiste em uma tabela para a listagem de produto onde é possivel deletar a qualquer momento o produto selecionado, e um formulario para cadastro e edição dos produtos, que funcionam com uma API fake montada em JSON Server, programado em Angular com aplicação de typescript, em cima do framework node.js.


##Badge
![projeto em angular ](https://user-images.githubusercontent.com/51057747/118416497-5bfb4980-b686-11eb-9504-c031e57c17ce.jpg)


###Status do Projeto

90% concluido


### Features

- [x] Cadastro de produtos
- [x] Visualizar produtos cadastrados
- [x] Deletar produtos cadastrados
- [ ] Editar produtos cadastrados


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
E para visualizar o codigo [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/marianamitterlehner/item-registration.git

# Acesse a pasta do projeto no terminal/cmd
$ cd item-registration

#Para baixar as dependencias 
npm Install

#Para iniciar o servidor Json 
json-server --watch src/assets/data/db.json

# Execute a aplicação em modo de desenvolvimento
$ ng serve


# O servidor inciará na porta:4200 - acesse <http://localhost:4200/>
```


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [JSON-Server](https://www.npmjs.com/package/json-server)


### Material de apoio

- [Material Design](https://material.io/)
- [Angular Material](https://material.angular.io/)
- [Angular Docs](https://angular.io/docs)
- [Sass](https://sass-lang.com/)
- [JSON-Server](https://www.npmjs.com/package/json-server)
- [Consumindo API REST com HttpClient no Angular 8](https://medium.com/@fernandoevangelista_28291/consumindo-api-rest-com-httpclient-no-angular-8-62c5d733ffb6)


### Autor
---

 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGEP93SRjmvmA/profile-displayphoto-shrink_100_100/0/1616796316494?e=1626912000&v=beta&t=RdX_TfGm1nAvlFHC3S12zAG6ru0R-wOZV9_OFq5B_qE" width="100px;" alt="Mariana"/>
 <br />
 <sub><b>Mariana Mitterlehner</b></sub></a>🚀</a>





