const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  updateFriends
} = require('../../controllers/userController');

//api/users/

router.route('/').get(getUsers).post(createUser);

router.route('/:_id').get(getSingleUser);

router.route('/:_id').delete(deleteUser).put(updateUser);

router.route('/friends/:_id').put(addFriend)

router.route('/removeFriend/:_id').put(updateFriends)

module.exports = router;
