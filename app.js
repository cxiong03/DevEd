const express = require('express'); // We import the package
const app = express(); // We execute it
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// MIDDLEWARES - A FUNCTION THAT EXECUTES WHEN A SPECIFIC WHEN ROUTES ARE BEING HIT
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });

// IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); //MIDDLEWARE 


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome Home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>          console.log('Connected to DB!')
);

// HOW TO START LISTENING TO THE SERVER
app.listen(3001)