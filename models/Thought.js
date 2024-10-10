// 

const mongoose = require('mongoose');
//const reactionSchema = require('./reactionSchema');
const { Schema, model } = mongoose;

// Reaction schema
const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleDateString()
    }
    // Define the fields for reactionSchema here
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
});

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