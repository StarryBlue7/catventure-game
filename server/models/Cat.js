const { Schema } = require('mongoose')


const catSchema = new Schema({
    //name?
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String
    },
    // level
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


module.exports = catSchema;