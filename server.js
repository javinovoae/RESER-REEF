const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const habitacionRoutes = require('./routes/habitacionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/reserreef')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));

app.use('/api/habitaciones', habitacionRoutes);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));