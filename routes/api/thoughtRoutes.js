const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought
} = require('../../controllers/thoughtController');

// can return all thoughts and create new thoughts
router.route('/').get(getThoughts).post(createThought);

// Will return only one thought, with a JSON body containing the GUID
router.route('/onethought').get(getSingleThought);

// router.put('/:thoughtId', (req, res) => {
//   res.json({ message: 'Update thought route' });
// });

// router.delete('/:thoughtId', (req, res) => {
//   res.json({ message: 'Delete thought route' });
// });

module.exports = router;
