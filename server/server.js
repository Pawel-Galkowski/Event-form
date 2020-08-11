'use strict';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import forms from './routes/forms.js';
import './middleware/EventFormMailer.js';
import 'regenerator-runtime/runtime.js';
import db from './config/keys.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

mongoose
    .connect(db.mongoURI, db.options)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.use('/forms', forms);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;

const server = app.listen(port);

export default server;
