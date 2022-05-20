const mongoose = require('mongoose')

const Inhabitants = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    secretKey: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    sex: {
        type: String,
        required: true,
        trim: true
    },
    from: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Inhabitants", Inhabitants)