# exemplo-material-ui
> Exemplo de UI utilizando ReactJS & Hooks

Hooks são uma nova adição a partir do React 16.8. 
Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

O projeto utiliza o [Material-ui](http://material-ui.com/) e é um exemplo de uma tela inicial,
formulário de login e uma área de Dashboard que carrega a cotação das moedas utilizando a API [AwesomeAPI](https://docs.awesomeapi.com.br/)

Projeto utilizado nas minhas aulas de Programação para a Internet.
O projeto está todo em português, com o objetivo de facilitar o primeiro contato com a tecnologia. :wink:

![](../header.png)

## Instalação
É necessário ter o Node.js e o NPM instalados em seu ambiente.  

Em seguida basta, carregar todas as dependências através do npm:
```sh
npm i
```

_Para mais especificações, consulte a documentação dentro do próprio código fonte._

## Atenção!
Como o projeto não utiliza nenhum backend, a comparação com a senha está apenas demonstrativa.
Edite o arquivo src/pages/Login/index.html e informe o seu usuário e senha ou implemente a validação com o banco de dados.
```sh
if (email === "alguem@email.com" && senha === "123senha") {
```    

## Histórico de lançamentos

* 0.0.1
    * Projeto inicial
    * Adicionado o formulário de Login e a área de Dashboard

## Meta

Prof. Ricardo Leme – [@ricardoleme](https://twitter.com/ricardorleme) 

Distribuído sob a licença [MIT](https://opensource.org/licenses/MIT).




