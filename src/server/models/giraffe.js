const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    sex: { type: String, required: true },
    height: { type: Number, required: true },
    color: { type: String, required: true },
    diet: { type: String, required: true },
    temper: { type: String, required: true },
    image: { type: String, required: true, unique: true }
})

const Giraffe = mongoose.model('giraffe', GiraffeSchema)

module.exports = {
    Giraffe
}