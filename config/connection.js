// Get mongoose
const mongoose = require('mongoose');
// connect to MongoDB
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/thoughtsDB');

// export connection
module.exports = mongoose.connection