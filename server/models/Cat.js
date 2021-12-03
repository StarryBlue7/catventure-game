const { Schema, model } = require('mongoose')


const catSchema = new Schema({
    //name?
    name: {
        type: String,
        required: true,
    },
    //role?
    // class: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Class"
    // },
    //level?
    level: {
        type: Number,
        default: 1,
    },
    //power/abilities or something
    power: {
        type: Number,
    },
    //xp
    experience: {
        type: Number,
        default: 0,
    },
    //maximum hitpoints
    maxHP: {
        type: Number,
    },
    //current hitpoints
    currentHP: {
        type: Number,
        default: 1,
    },
});

const Cat = model('Cat', catSchema);

module.exports = Cat;