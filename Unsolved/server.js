const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
=======
const PORT = process.env.PORT || 3001;
>>>>>>> 4465d6810d4c60d4dd45d55d5d9977146a2ba2df

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
