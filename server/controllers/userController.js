const { User, Cat } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {

    async getUser({ user = null, params }, res) {
        //find user by id or username
        //bring cats that are assigned to that model
        const findUser = await User.findOne({ $or: [{ _id: user ? user._id : params.id }, { username: params.username }], });

        if (!findUser) {
            return res.status(400).json({ message: 'Cannot find user' });
        }
        res.json(findUser);
    },
    async getAllUser(req, res) {
        //find user by id or username
        //bring cats that are assigned to that model
        const findUsers = await User.find({});

        if (!findUsers) {
            return res.status(400).json({ message: 'Cannot find users' });
        }
        res.json(findUsers);
    },
    // create single user
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Cannot create user' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async login({ body }, res) {
        //find one user by username or
        const user = await User.findOne({ username: body.username });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }
        // password check
        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    //add cat to user
    async addCat({ user, body }, res) {
        console.log(user);
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { cats: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    //remove cat from user
    async removeCat({ user, params }, res) {
        const removedCat = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { cats: { _id: params._id } } },
            { new: true }
        );
        if (!removedCat) {
            return res.status(404).json({ message: "Could not remove your cat!" });
        }
        return res.json(removedCat);
    },
    async updateCat({ user, body }, res) {
        const newBody = body.map((cat) => {
            while (cat.experience >= 20) {
                cat.level = cat.level + 1;
                cat.experience = cat.experience - 20;
                switch (cat.class) {
                    case 'Warrior':
                        cat.maxHP = cat.maxHP + 3;
                        break;
                    case 'Rogue':
                        cat.maxHP = cat.maxHP + 2;
                        break;
                    default:
                        cat.maxHP = cat.maxHP + 1;
                }
            }
            return cat;
        })
        const updatedCat = await User.findOneAndUpdate(
            { _id: user._id },
            { $set: { cats: newBody } },
            { new: true }
        );
        if (!updatedCat) {
            return res.status(404).json({ message: "Could not boost your cat!" });
        }
        return res.json(updatedCat);
    },
    async updateTreasure({ user }, res) {
        const now = new Date();
        const lastTreasure = await User.findOneAndUpdate(
            { _id: user._id },
            { $set: { lastTreasure: now } },
            { new: true }
        );
        if (!lastTreasure) {
            return res.status(404).json({ message: "Could not set your lastTreasure" });
        }
        return res.json(lastTreasure)
    },

    async updateHeal({ user }, res) {
        const now = new Date();
        const lastHeal = await User.findOneAndUpdate(
            { _id: user._id },
            { $set: { lastHeal: now } },
            { new: true }
        );
        if (!lastHeal) {
            return res.status(404).json({ message: "Could not set your lastHeal" });
        }
        return res.json(lastHeal)
    },

    async updateRecruit({ user }, res) {
        const now = new Date();
        const lastRecruit = await User.findOneAndUpdate(
            { _id: user._id },
            { $set: { lastRecruit: now } },
            { new: true }
        );
        if (!lastRecruit) {
            return res.status(404).json({ message: "Could not set your lastRecruit" });
        }
        return res.json(lastRecruit)
    },
    async addTavernCat({ user, body }, res) {
        console.log(user);
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $set: { currentTavernCats: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async lockoutTavernCat({ user }, res) {
        const now = new Date();
        const lastRecruit = await User.findOneAndUpdate(
            { _id: user._id },
            { $set: { lockoutTavernCat: now } },
            { new: true }
        );
        if (!lastRecruit) {
            return res.status(404).json({ message: "Could not set your lastRecruit" });
        }
        return res.json(lastRecruit)
    },
}
