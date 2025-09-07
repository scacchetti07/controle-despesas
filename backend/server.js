// Referência: https://www.youtube.com/watch?v=hclz-Ymg9IY

const express = require("express");
const cors = require("cors");
const fs = require("node:fs");

const app = express();
const PORT = 3000; // porta do servidor

// 
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Routes

// Enviando uma mensagem para o servidor
app.get("/", (request, result) => {
    result.send("Bem vindo ao servidor node!!");
});

// Obtendo dados do servidor
app.get("/api/assets/hero", (request, result) => {
    const images = fs.readdirSync("../src/assets/HeroImages");
    result.send(images)
});

// Definindo a porta da aplicação
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Inicando o servidor com >>npm start<<
