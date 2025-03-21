const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Rota para criar um novo projeto
router.post('/projects', async (req, res) => {
  try {
    const { title, description, url } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Título e descrição são obrigatórios!' });
    }

    const project = new Project({ title, description, url });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error('Erro no POST /projects:', error.message);
    res.status(400).json({ message: error.message });
  }
});

// Rota para obter todos os projetos
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para deletar um projeto
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    res.json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

