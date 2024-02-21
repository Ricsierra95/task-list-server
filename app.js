const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Estudiar para el examen', completed: true },
  { id: 3, description: 'Ir al gimnasio', completed: false }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
