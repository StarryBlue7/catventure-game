const router = require('express').Router();

const {

    createUser,
    getUser,
    login,
    addCat,
    getAllUser,
    removeCat,
    updateTreasure,
    updateCat,
    updateHeal,

} = require('../../controllers/userController');

const { authMiddleware } = require('../../utils/auth');

// create user
router.route('/').post(createUser).put(authMiddleware, addCat);
// login user
router.route('/login').post(login);
// get all the users
router.route('/all').get(getAllUser);
// get logged in user
router.route('/me').get(authMiddleware, getUser);
// remove cat by id from users cat array
router.route('/cats/:_id').delete(authMiddleware, removeCat);
//update date on user model treasure has been claimed
router.route('/treasure/:_id').put(authMiddleware, updateTreasure);
//update date on user model heal has been used
router.route('/heal/:_id').put(authMiddleware, updateHeal);
// update cat's stat
router.route('/cats/update').put(authMiddleware, updateCat);


module.exports = router;