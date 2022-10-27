const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought
} = require('../../controllers/thoughtController');

// can return all thoughts and create new thoughts
router.route('/').get(getThoughts).post(createThought);

// Will return only one thought, with a JSON body containing the GUID
router.route('/:_id').get(getSingleThought);

router.route('/:_id').delete(deleteThought)

module.exports = router;
