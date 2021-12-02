const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
    // do not know user reqs until I build out model these are placeholder routes
    async getUser({ user = null, params }, res) {
        const user = await User.findOne({});

        if (!user) {
            return res.status(400).json({ message: 'Cannot find user' });
        }
        res.json(foundUser);
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
        const user = await User.findOne({});
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }
        //password check
        // const correctPw = await user.isCorrectPassword(body.password);

        //     if (!correctPw) {
        //         return res.status(400).json({ message: 'Wrong password!' });
        // }
        const token = signToken(user);
        res.json({ token, user });
    }
}