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
router.route('/:userId/friends/:friendId').post(addFriend);

// Export the router
module.exports = router;

// TODO: figure out schema for removing friend.  this likely ties back to the userController issue with the removeFriend parameters.
// not working and cut and paste out of line 21 just after  post(addFriend);
// .delete(removeFriend)