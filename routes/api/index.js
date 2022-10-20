const router = require('express').Router();
const postRoutes = require('./postRoutes.js');

router.use('/posts', postRoutes);


module.exports = router;