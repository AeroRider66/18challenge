// Import the necessary dependencies and controllers
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// route for get (GET) all thoughts and create (POST) thought
router.route('/').get(getAllThoughts).post(createThought);

// routes for GET one and edit (PUT) one and DELETE one
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// route to add (POST) reaction
router.route('/:thoughtId/reactions').post(createReaction);

// route to DELETE reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export the router
module.exports = router;