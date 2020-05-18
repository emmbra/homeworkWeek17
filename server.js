const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI ||'mongodb://user1:password1@ds151232.mlab.com:51232/heroku_m95p6pgt', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.listen(PORT);


