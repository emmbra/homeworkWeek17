const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutDB', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

require("./routes/apiRoutes")(app);
require("./routes/viewRoutes")(app);

app.listen(PORT);
