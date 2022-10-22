const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'All thoughts routes' });
});

router.get('/:thoughtId', (req, res) => {
  res.json({ message: 'Single thought route' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create new thought route' });
});

router.put('/:thoughtId', (req, res) => {
  res.json({ message: 'Update thought route' });
});

router.delete('/:thoughtId', (req, res) => {
  res.json({ message: 'Delete thought route' });
});

module.exports = router;
