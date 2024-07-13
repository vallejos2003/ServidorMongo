const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Crear un libro
router.post('/', async (req, res) => {
  console.log('POST /books');
  console.log('Request body:', req.body);
  const book = new Book(req.body);
  try {
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    console.error('Error saving book:', error);
    res.status(400).send(error);
  }
});

// Leer todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Leer un libro por ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un libro
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
