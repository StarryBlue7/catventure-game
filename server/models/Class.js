const { Schema, model } = require('mongoose')

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        //link to image asset
    },
    statName: {
        type: String,
    }


});

const Class = model('Class', classSchema);

module.exports = Class;