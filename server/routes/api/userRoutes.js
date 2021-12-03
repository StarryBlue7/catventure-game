const router = require('express').Router();

const {

    createUser,
    getUser,
    login,
    addCat,
    getAllUser

} = require('../../controllers/userController');

const { authMiddleware } = require('../../utils/auth');

// not sure on routes yet, we will decide
router.route('/').post(createUser).put(authMiddleware, addCat);

router.route('/login').post(login);

router.route('/all').get(getAllUser);

router.route('/me').get(getUser);



module.exports = router;