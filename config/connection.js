// Get mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://127.0.0.1:27017/thoughtsDB,{

});

// export
module.exports = mongoose.connection