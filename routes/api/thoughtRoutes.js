const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/').get(getSingleThought);

// router.post('/', (req, res) => {
//   res.json({ message: 'Create new thought route' });
// });

// router.put('/:thoughtId', (req, res) => {
//   res.json({ message: 'Update thought route' });
// });

// router.delete('/:thoughtId', (req, res) => {
//   res.json({ message: 'Delete thought route' });
// });

module.exports = router;
