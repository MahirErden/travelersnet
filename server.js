const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();
//require('dotenv').config();
// const config = require('confi
// const db = config.get('mongoURI');


// local = "mongodb://127.0.0.1:27017/travelersnet"
// mongo atlas = "mongodb+srv://user:user1234@travelersnet-yiloa.gcp.mongodb.net/test?retryWrites=true&w=majority"
// mlab = "mongodb://user:password123@ds035260.mlab.com:35260/heroku_nzs96dxv"

mongoose
  .connect("mongodb://user:password123@ds035260.mlab.com:35260/heroku_nzs96dxv", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
}); 

// bring in routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// apiDocs
// app.get('/api', (req, res) => {
//   fs.readFile('docs/apiDocs.json', (err, data) => {
//       if (err) {
//           res.status(400).json({
//               error: err
//           });
//       }
//       const docs = JSON.parse(data);
//       res.json(docs);
//   });
// });

// middleware -
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use('/api', postRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}`);
});
