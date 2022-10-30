const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  updateReaction
} = require('../../controllers/thoughtController');

// /api/thoughts

// can return all thoughts and create new thoughts
router.route('/').get(getThoughts).post(createThought);

// Will return only one thought, with a JSON body containing the GUID
router
  .route('/:_id')
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

router.route('/addReaction/:_id').put(addReaction);

router.route('/:_thoughtId/reactions/:_reactionId').put(updateReaction);
module.exports = router;
