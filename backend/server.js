const express = require('express');
const { json } = require('express');
const { Pool } = require('pg');
const { hash } = require('bcryptjs');
const { sign, verify } = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(json());
app.use(cors());

const pool = new Pool({
  user: 'yourdbuser',
  host: 'localhost',
  database: 'yourdbname',
  password: 'yourdbpassword',
  port: 5432,
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    /*
    const hashedPassword = await hash(password, 10);
    
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    );
    

    const userId = result.rows[0].id;
    const token = sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(201).json({ token });
    */
    console.log(email);
    console.log(password);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
