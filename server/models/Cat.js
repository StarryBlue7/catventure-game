const { Schema, model } = require('mongoose')


const catSchema = new Schema({
    //name?
    name: {
        type: String,
        required: true,
        unique: true,
    },
    //role?
    // class: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Class"
    // },
    //level?
    level: {
        type: Number,
    },
    //power/abilities or something
    power: {
        type: Number,
    },
    //xp
    experience: {
        type: Number,
    },
    //maximum hitpoints
    maxHP: {
        type: Number,
    },
    //current hitpoints
    currentHP: {
        type: Number,
    },
});

const Cat = model('Cat', catSchema);

module.exports = Cat;