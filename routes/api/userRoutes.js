// Import the necessary dependencies and controllers
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
//   checkFriendRemoved,
} = require('../../controllers/userController');

// GET all users and POST (create) one user
router.route('/').get(getAllUsers).post(createUser);

// GET user id, PUT (update) user by id and DELETE user by id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// POST add friend and DELETE remove Friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// Export the router
module.exports = router;