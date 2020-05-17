const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutDB', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT);
