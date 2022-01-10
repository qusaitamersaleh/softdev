const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: './config.env' });
 
mongoose.connect(process.env.mongoURI).then(() => 
console.log('  MongoDB connected')).catch((err) => console.log(err));


const AuthorsRoutes = require('./routes/authorRoutes');
const BooksRoutes = require('./routes/bookRoutes');

app.use(bodyParser.json());

app.use('/books', BooksRoutes);
app.use('/authors', AuthorsRoutes);

module.exports = app;

