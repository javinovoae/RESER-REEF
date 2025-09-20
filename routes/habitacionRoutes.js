const express = require('express');
const router = express.Router();
const Habitacion = require('../models/Habitacion');

router.post('/', async (req, res) => {
  try {
    const habitacion = new Habitacion(req.body);
    await habitacion.save();
    res.status(201).json(habitacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const habitaciones = await Habitacion.find();
  res.json(habitaciones);
});

router.get('/:id', async (req, res) => {
  const habitacion = await Habitacion.findById(req.params.id);
  if (!habitacion) return res.status(404).json({ error: 'No encontrada' });
  res.json(habitacion);
});

router.put('/:id', async (req, res) => {
  try {
    const habitacion = await Habitacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(habitacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  await Habitacion.findByIdAndDelete(req.params.id);
  res.json({ message: 'Habitación eliminada' });
});

module.exports = router;