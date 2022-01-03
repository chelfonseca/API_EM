// Importing Libraries
const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// Mail Setting
const { host, port, user, pass } = require('../config/mail.json');

// Create Transport
const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

// Transport Setting
transport.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/resources/mail/')
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}));

module.exports = transport;