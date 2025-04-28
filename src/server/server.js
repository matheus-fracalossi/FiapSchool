const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'segredo_super_secreto';

app.use(cors());
app.use(bodyParser.json());

const getUsers = () => {
  const users = require('./db.json');
  return users;
};

app.post('/sign-in', (req, res) => {
  const { cpf, password } = req.body;
  const users = getUsers();

  const user = users.find(u => u.cpf === cpf && u.password === password);
  if (!user) {
    return res
      .status(401)
      .json({ message: 'Invalid CPF or password.\nWould you like to try again?' });
  }

  const token = jwt.sign({ id: user.id, cpf: user.cpf }, SECRET_KEY);

  setTimeout(() => res.json({ token }), 2000);
});

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Token required' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

app.get('/me', authenticate, (req, res) => {
  const users = getUsers();
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  const { password: _, ...userData } = user;
  setTimeout(() => res.json(userData), 2000);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
