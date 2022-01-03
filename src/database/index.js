// Importing Libraries
const mongoose = require('mongoose');

// Database connection and setting
mongoose.connect('mongodb+srv://USERNAME:PASSWORD@cluster0.psoxm.mongodb.net/API_EM?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;
