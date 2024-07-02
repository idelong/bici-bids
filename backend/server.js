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
  user: 'idelong',
  host: 'localhost',
  database: 'bicibids',
  password: 'contrasena',
  port: 5432,
});


// Register a new user
app.post('/api/users', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    );

    const userId = result.rows[0].id;
    const token = jwt.sign({ userId }, jwtSecret, { expiresIn: '1h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Set to true if using HTTPS
      sameSite: 'Strict' // CSRF protection
    });
    res.status(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login a user and create a session
app.post('/api/sessions', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT id, password FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Set to true if using HTTPS
      sameSite: 'Strict' // CSRF protection
    });
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});

app.get('/api/check-auth', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, 'your-secret-key');
      res.json({ loggedIn: true, user });
    } catch (err) {
      res.json({ loggedIn: false });
    }
  } else {
    res.json({ loggedIn: false });
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

app.post('/api/sell/listings', authenticateToken, (req, res)) => {
  const {brand,
    model,
    year,
    condition,
    location,
    currentBid,
    timeLeft,
    imageUrl} = req.body;
    // need to generate itemId here
    
    console.log({
      brand,
      model,
      year,
      condition,
      location,
      currentBid,
      timeLeft,
      imageUrl
    });


});

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
