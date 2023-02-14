# Desafio-NODEJS - Ambisis

## Tecnologias e Dependências
- Mysql - v3.1.2
- Node.JS - v18.14.0
- Express.js - v4.18.2
- Nodemon - 2.0.20
- Npm UUID 

# Orientações de Instalação e execução

1. Clone o repositório com o comando:
git clone https://github.com/Earsouza/Desafio-NODEJS.git

2. Entre no diretório do projeto:
cd Desafio-NODEJS

3. Instale todas as dependências usando o seguinte comando:
npm install

4. Recomendo instalar o nodemon para facilitar o desenvolvimento, para isso, execute o seguinte comando:
npm install -g nodemon

5. Depois de instalar as dependências, execute o seguinte comando para rodar a aplicação:
nodemon src/index.js

Lembrando que é necessário ter o node.js e npm (gerenciador de pacotes do node) instalados na máquina para executar a aplicação.

# Funcionamento 

O sistema possui as seguintes funcionalidades de API para empresas e licenças:

.Listagem:
- Empresas: GET http://localhost:8080/empresa
- Licenças: GET http://localhost:8080/licenca

Ao realizar uma requisição GET, será retornado todas as empresas ou licenças já cadastradas no banco de dados, em formato JSON.

.Adição:
- Adição de empresas: POST http://localhost:8080/empresa
- Adição de licenças: POST http://localhost:8080/licenca

Ao realizar uma requisição POST, será adicionado uma nova empresa ou licença ao banco de dados, sendo necessário inserir os dados: razão social, cnpj, cep, cidade, estado, bairro, complemento. O ID será gerado automaticamente.

.Busca por ID:
- Buscar empresa por ID: GET http://localhost:8080/empresa/{inserir-id-aqui}
- Buscar licença por ID: GET http://localhost:8080/licenca/{inserir-id-aqui}

Ao realizar uma requisição GET com um ID específico, será retornado a empresa ou licença correspondente ao ID, em formato JSON.

.Deleção:
- Deletar uma empresa por ID: DELETE http://localhost:8080/empresa/{inserir-id-aqui}
- Deletar uma licença por ID: DELETE http://localhost:8080/licenca/{inserir-id-aqui}

Ao realizar uma requisição DELETE com um ID específico, será deletada a empresa ou licença correspondente ao ID.

.Alteração:
- Alterar uma empresa por ID: PATCH http://localhost:8080/empresa/{inserir-id-aqui}
- Alterar uma licença por ID: PATCH http://localhost:8080/licenca/{inserir-id-aqui}

Ao realizar uma requisição PATCH com um ID específico, será alterada a empresa ou licença correspondente ao ID.
Observação: A integração com o banco de dados não foi finalizada dentro do prazo estipulado, mas o projeto será atualizado assim que estiver concluído.

Obs.: Não foi possível finalizar a integração com o banco dentro do prazo estipulado porém segue o que foi desenvolvido até o momento. Vou atualizar esse projeto quando finalizar o que foi solicitado. 

