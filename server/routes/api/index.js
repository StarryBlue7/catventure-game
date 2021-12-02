const router = require('express').Router();
const userRoutes = require('./userRoutes');
const catRoutes = require('./catRoutes.js');

router.use('/users', userRoutes);
router.use('cats', catRoutes);

module.exports = router;
