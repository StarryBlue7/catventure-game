const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const catSchema = require('./Cat');


const userSchema = new Schema({
    // username
    username: {
        type: String,
        required: true,
        unique: true,
    },
    // password
    password: {
        type: String,
        required: true,
    },
    // Cats?
    cats: [catSchema],
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hashing
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in, used in controller
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('catCount').get(function () {
    return this.cats.length;
});

const User = model('User', userSchema);

module.exports = User;