const express = require('express'); // We import the package

const app = express(); // We execute it

// MIDDLEWARES - A FUNCTION THAT EXECUTES WHEN A SPECIFIC WHEN ROUTES ARE BEING HIT
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome Home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// HOW TO START LISTENING TO THE SERVER
app.listen(3001)