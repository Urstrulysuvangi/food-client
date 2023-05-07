const mongoose = require("mongoose");

const swaadSchema = mongoose.Schema({
    name : {type: String, require},
    variants: [],
    prices: [],
    category:{type: String, require},
    image: {type: String, require},
    description: {type: String, require}
} , {
    timestamps: true
})

const swaadModel = mongoose.model('menu', swaadSchema)

module.exports =swaadModel