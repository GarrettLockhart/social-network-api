const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27917/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;