const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image:{type: String, required: true},
    category: {type: String, require: true},
    type: {type: String, required: true},
    color: {type: String, required: false},
    size: {type: String, required: false},
});

module.exports = mongoose.model('Product', ProductSchema)