//  ALL the

const { Thought, User, Reaction } = require('../models');
const {Types} = require('mongoose');

// Thought A{O end[point
async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},

// CRUD
async deletehought(req, res)

async editThought(req, res)

// REACTION handlers here