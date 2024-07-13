const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// Crear un autor
router.post('/', async (req, res) => {
  const author = new Author(req.body);
  try {
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Leer todos los autores
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).send(authors);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Leer un autor por ID
router.get('/:id', async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).send();
    }
    res.status(200).send(author);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un autor
router.put('/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!author) {
      return res.status(404).send();
    }
    res.status(200).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un autor
router.delete('/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).send();
    }
    res.status(200).send(author);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
