const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDB = require("./database/db");

const app = express();

connectToDB();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
