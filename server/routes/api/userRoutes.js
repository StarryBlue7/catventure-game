const router = require('express').Router();

const {

    createUser,
    getUser,
    login,
    addCat,

} = require('../../controllers/userController');

const { authMiddleware } = require('../../utils/auth');

// not sure on routes yet, we will decide
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/user').get(authMiddleware, getUser);

router.route('/addcat').post(addCat);



module.exports = router;