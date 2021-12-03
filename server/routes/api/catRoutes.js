const router = require('express').Router();

const {

    getAllCats,
    getSingleCat,

} = require('../../controllers/catController');


router.route('/').get(getAllCats);

router.route('/singlecat').get(getSingleCat);



module.exports = router;