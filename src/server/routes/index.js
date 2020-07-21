const multer = require('multer')
const Giraffe = require('../models/giraffe')
const path = require('path')
const storage = multer.diskStorage({
    destination: './uploads/' /* relative to root dir of project */,
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

module.exports = (app) => {
    // Upload image
    app.post('/uploadImage', upload.single('file'), async (req, res) => {

        console.log(req.file);

        if (req.file) {
            res.send({ success: true })
        } else {
            res.sendStatus(500)
        }
    })

    // Giraffe API
    app.post('/api/giraffe', async (req, res) => {
        try {
            console.log('Body', req.body);
            const { name, weight, sex, height, color, diet, temper, image } = req.body
            const existed = await Giraffe.findOne({ name })
            // console.log(existed);

            if (existed){
                return res.sendStatus(400)
            }

            const giraffe = new Giraffe({ name, weight, sex, height, color, diet, temper, image })
            // console.log('Giraffe', giraffe);

            await giraffe.save()
        } catch (e) {
            res.sendStatus(500)
        }
    })

    app.get('/api/giraffe', async (req, res) => {
        try {
            const giraffes = await Giraffe.find()
            console.log('GET', giraffes);
            res.json(giraffes)
        } catch (e) {
            res.sendStatus(500)
        }
    })

    // app.route('/api/giraffe/:id')

    app.get('/api/giraffe/:id', async (req, res) => {
        try {
            const giraffe = await Giraffe.findById(req.params.id)
            res.json(giraffe)
        } catch (e) {
            res.sendStatus(404)
        }
    })
    
    app.put('/api/giraffe/:id', async (req, res) => {
        try {                
            const giraffe = await Giraffe.findByIdAndUpdate(req.params.id, req.body)

            console.log('PUT', giraffe);
            await giraffe.save()
            res.sendStatus(200)
        } catch (e) {
            res.sendStatus(404)
        }
    })

    app.delete('/api/giraffe/:id', async (req, res) => {
        try {
            await Giraffe.deleteOne({_id: req.params.id})

            res.sendStatus(204)
        } catch (e) {
            res.sendStatus(404)
        }
    })
}