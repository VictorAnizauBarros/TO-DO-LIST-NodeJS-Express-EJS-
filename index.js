// Importação do framework Express
const express = require("express");

// Importação do módulo path para manipulação de caminhos
const path = require("path");

// Importação das rotas da aplicação
const routes = require("./routes/routes");

// Importação da conexão com o banco de dados
const connectToDB = require("./database/db");

// Criação da instância do Express
const app = express();

// Conexão com o banco de dados
connectToDB();

// Definição do motor de template como EJS
app.set("view engine", "ejs");

// Configuração do diretório público para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configuração do middleware para parsear requisições com corpo em formato URL encoded
app.use(express.urlencoded({ extended: true }));

// Configuração das rotas da aplicação
app.use(routes);

// Definição da porta de execução do servidor
const PORT = 3000;

// Inicialização do servidor e impressão da mensagem de execução
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});