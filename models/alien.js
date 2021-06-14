const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({// input data schema & validations

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    selct: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema) 