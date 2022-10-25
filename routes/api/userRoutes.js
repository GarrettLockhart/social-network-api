const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser
} = require('../../controllers/userController');

//api/users/

router.route('/').get(getUsers).post(createUser);

router.route('/oneUser').get(getSingleUser);

router.route('/deleteUser').delete(deleteUser);

module.exports = router;
