const express = require('express');
const db = require('./config/connection');
// Require routes
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes('Challenge18')
//     ? cwd.split('Challenge18')[1]
//     : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for running on port ${PORT}!`);
    });
});

//From challetnge 19 need to refactor this get

// app.get('/items/sum-price', async (req, res) => {
//     try {
//         // Call aggregate() on model
//         const result = await Item
//             .aggregate([
//                 // Where prices are less or equal to 5
//                 { $match: { price: { $lte: 5 } } },