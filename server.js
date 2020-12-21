require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);
const PORT = process.env.PORT || 8000;

// api
const users = require('./api/users')

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', require('./api/users'));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to backend'})
});

app.use('/api/users', users)

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
})
