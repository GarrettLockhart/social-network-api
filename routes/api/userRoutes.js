const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser
} = require('../../controllers/userController');

//api/users/

router.route('/').get(getUsers).post(createUser);

router.route('/').get(getSingleUser);

router.route('/').delete(deleteUser);

module.exports = router;
