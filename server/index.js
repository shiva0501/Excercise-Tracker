const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/user');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL || '';

app.use(cors());
app.use(express.json());
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server is running on port : ${port}`)))
    .catch((error) => console.log(error.message));
