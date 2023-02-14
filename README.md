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

- Listagem de empresas - GET: http://localhost:8080/empresa
- Listagem de licencas - GET: http://localhost:8080/licenca

. Em caso de sucesso retorna todos as empresas/licenças já cadastrados no banco de dados, cada planeta no formato JSON.

- Adicionar de empresas - POST: http://localhost:8080/empresa
- Adicionar de licencas - POST: http://localhost:8080/licenca

. Adiciona uma licença ao banco de dados, sendo necessário inserir razaoSocial, cnpj, cep, cidade, estado, bairro, complemento. O ID é gerado automaticamente.

- Buscar empresa por ID - GET: http://localhost:8080/empresa/{inserir-id-aqui}
- Buscar licenca por ID - GET: http://localhost:8080/licenca/{inserir-id-aqui}

. Utiliza o Id gerado automaticamente quando a licença ou empresa é adicionada ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista.

- Deletar uma empresa por ID - DELETE: http://localhost:8080/empresa/{inserir-id-aqui}
- Deletar uma licenca por ID - DELETE: http://localhost:8080/licenca/{inserir-id-aqui}

. Remove a empresa ou licença utilizando o Id que foi gerado automaticamente, utilizando o método DELETE.

- Alterar uma empresa por ID - PATCH: http://localhost:8080/empresa/{inserir-id-aqui}
- Alterar uma licenca por ID - PATCH: http://localhost:8080/licenca/{inserir-id-aqui}

. Altera a empresa ou licença utilizando o Id que foi gerado automaticamente, utilizando o método PATCH.

Obs.: Não foi possível finalizar a integração com o banco dentro do prazo estipulado porém segue o que foi desenvolvido até o momento. Vou atualizar esse projeto quando finalizar o que foi solicitado. 

