const express = require('express');
const db = require('./config/connection');
// Require model
const { Item } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//From challetnge 19 need to refactor this get

app.get('/items/sum-price', async (req, res) => {
    try {
        // Call aggregate() on model
        const result = await Item
            .aggregate([
                // Where prices are less or equal to 5
                { $match: { price: { $lte: 5 } } },