


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Importa o módulo cors

dotenv.config(); // Carrega as variáveis do .env

const app = express();

// Middleware para habilitar CORS
app.use(cors()); // Habilita CORS para todas as origens
// Caso deseje restringir a origem, use a configuração:
// app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware para interpretar JSON
app.use(express.json());

// Rotas da API de projetos
const projectRoutes = require('./routes/projectRoutes');
app.use('/api', projectRoutes); // Todas as rotas de projetos serão prefixadas com /api

// ------------------------------
// ENDPOINTS DE TESTE (para depurar o envio de dados)
// ------------------------------

// Endpoint de teste GET
app.get('/test', async (req, res) => {
  try {
    // Importa o modelo apenas neste endpoint
    const Project = require('./models/Project');
    // Cria um novo projeto com dados fixos (apenas para teste)
    const project = new Project({
      title: "Projeto Teste GET",
      description: "Teste de endpoint GET",
      url: "https://teste.com"
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
});

// Endpoint de teste POST
app.post('/test', async (req, res) => {
  try {
    console.log(req.body);
    const Project = require('./models/Project');
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
});
// ------------------------------
// FIM ENDPOINTS DE TESTE
// ------------------------------

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
