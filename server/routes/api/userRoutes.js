const router = require('express').Router();

const {

    createUser,
    getUser,
    login,

} = require('../../controllers/userController');

const { authMiddleware } = require('../../utils/auth');

// not sure on routes yet, we will decide
router.route('/').post(createUser).put(authMiddleware);

router.route('/').post(login);

router.route('/').get(authMiddleware, getUser);



module.exports = router;