const mongoose = require('mongoose');
const { Schema } = mongoose;

const CheckSchema = new Schema({
    dir: {type: String, required:true},
    price: {type: Number, required: true},
    name: {type:String, required:true},
    phone: {type: String, required:true},
    email: {type:String, required:true},
    products_str: {type: String, required:true}
});

module.exports = mongoose.model('Check', CheckSchema);