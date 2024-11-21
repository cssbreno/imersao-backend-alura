import express from "express";
// Importa o framework Express, usado para criar o servidor e gerenciar rotas.
import routes from "./src/routes/postRoutes.js";

const app = express();
// Cria uma aplicação Express para gerenciar rotas e lidar com requisições HTTP.
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
// Faz o servidor ouvir requisições na porta 3000 e exibe uma mensagem no console quando o servidor está em execução.
