const express = require('express')
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/auth', require('./routes/auth'));
app.use('/register'), require('./routes/register')

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




