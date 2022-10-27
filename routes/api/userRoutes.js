const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser
} = require('../../controllers/userController');

//api/users/

router.route('/').get(getUsers).post(createUser);

router.route('/:_id').get(getSingleUser);

router.route('/:_id').delete(deleteUser);

module.exports = router;
