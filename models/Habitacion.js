const mongoose = require('mongoose');

const habitacionSchema = new mongoose.Schema({
  numero: { type: Number, required: true, unique: true },
  tipo: { type: String, required: true },
  precio: { type: Number, required: true },
  disponible: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Habitacion', habitacionSchema);