const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
    name: { type: String, required: true },
    weight: { type: Number, required: false },
    sex: { type: String, required: false },
    height: { type: Number, required: false },
    color: { type: String, required: false },
    diet: { type: String, required: false },
    temper: { type: String, required: false },
    // image: { type: String, required: true }
})

module.exports = mongoose.model('giraffe', GiraffeSchema)