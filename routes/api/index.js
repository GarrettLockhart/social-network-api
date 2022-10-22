const router = require('express').Router();
const postRoutes = require('./postRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
