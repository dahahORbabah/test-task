const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
    name: String,
    weight: Number,
    sex: String,
    height: Number,
    color: String,
    diet: String,
    temper: String,
    // not sure about image type
    image: String
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
    Giraffe
};