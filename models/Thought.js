
const mongoose = require('mongoose');
const reactionSchema = require('./Reaction.js');
const { Schema, model } = mongoose;


// Thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toISOString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        getters: true
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

// Define the fields for reactionSchema here
// TODO need to create unique id
// reactionBody: {
//     type: String,
//     required: true,
//     maxlength: 280
// },
// username: {
//     type: String,
//     required: true
// },
// createdAt: {
//     type: Date,
//     default: Date.now
// }