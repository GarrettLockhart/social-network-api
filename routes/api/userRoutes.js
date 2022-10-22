const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'All users route' });
});

router.get('/:userId', (req, res) => {
  res.json({ message: 'Single user route' });
});

router.post('/', (req, res) => {
  res.json({ message: 'New user created route' });
});

router.put('/:userId', (req, res) => {
  res.json({ message: 'Update a user route' });
});

router.delete('/:userId', (req, res) => {
  res.json({ message: 'Delete a user route' });
});

module.exports = router;
