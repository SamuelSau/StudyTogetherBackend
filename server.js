const express = require('express')
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Use body-parser middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register route
app.post('/register', async (req, res) => {
  try {
    // Get user data from the request body
    const { username, password } = req.body;

    // Hash the user's password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user to the database
    // ...
    // ...

    // Send a response to the client
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

// Sign-in route
app.post('/signin', async (req, res) => {
  try {
    // Get user data from the request body
    const { username, password } = req.body;

    // Find the user in the database
    // ...
    // ...

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JSON web token
    const token = jwt.sign({ id: user._id }, 'secret-key', { expiresIn: '1h' });

    // Send the token to the client
    res.status(200).json({ message: 'User signed in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in user', error });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




