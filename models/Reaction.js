// TODO: put this in the Thought model file

// // Reaction - schema only - pass to Thought
// const { Schema, Types } = require('mongoose');
//
// const reactionSchema = new Schema(
//     {
//         reactionId: {
//             type: mongoose.Schema.Types.ObjectId,
//             default: new mongoose.Types.ObjectId()
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: timestamp => new Date(timestamp).toLocaleDateString()
//         }
//     },
//     {
//         toJSON: {
//             getters: true,
//         }
//     }
// );
//
// module.exports = reactionSchema;




// reactionId
//
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
// reactionBody
//
// String
// Required
// 280 character maximum
// username
//
// String
// Required
// createdAt
//
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

// model frm npm
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
//
// const BlogPost = new Schema({
//     author: ObjectId,
//     title: String,
//     body: String,
//     date: Date
// });


