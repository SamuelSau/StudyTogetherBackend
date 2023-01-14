const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
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
}

module.exports = {handleLogin}