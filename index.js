const express = require("express");
const app = express();

// ROTA
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
