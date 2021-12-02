const { Cat } = require('../models');

module.exports = {
    // get route
    async getAllCats({ }, res) {
        const allCats = await Cat.findAll();

        if (!allCats) {
            return res.status(400).json({ message: 'There is no cats!' });
        }
        res.json(allCats);
    },
    async getSingleCat({ cat = null, params }, res) {
        const singleCat = await Cat.findOne({ $or: [{ _id: cat ? cat._id : params.id }, { name: params.name }], })

        if (!singleCat) {
            return res.status(400).json({ message: 'Cannot find cat' });
        }
        res.json(singleCat);
    }

    //add cat to user
}