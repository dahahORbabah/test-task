const multer = require('multer')
const Giraffe = require('../models/giraffe')
const path = require('path')
// const { check, validationResults } = require('express-validator')
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
        if (req.file) {
            res.send({ success: true })
        } else {
            res.sendStatus(500)
        }
    })

    // Giraffe API
    app.post(
        '/api/giraffe',
        async (req, res) => {
        try {
            console.log('Body', req.body);
            const { name, weight, sex, height, color, diet, temper } = req.body
            const existed = await Giraffe.findOne({ name })

            if (existed){
                return res.sendStatus(400)
            }

            const giraffe = new Giraffe({ name, weight, sex, height, color, diet, temper })
            console.log('Giraffe', giraffe);

            await giraffe.save()
            res.sendStatus(201)
        } catch (e) {
            res.sendStatus(500)
        }
    })

    app.get('/api/giraffe', async (req, res) => {
        try {
            const giraffes = await Giraffe.find()
            console.log(giraffes);
            res.json(giraffes)
        } catch (e) {
            console.error(e)
            res.sendStatus(500)
        }
    })

    app.route('/api/giraffe/:id')
        .get(async (req, res) => {
            try {
                const giraffe = await Giraffe.findById(req.params.id)
                res.json(giraffe)
            } catch (e) {
                res.sendStatus(404)
            }
        })
        
        .put(async (req, res) => {
            try {
                const giraffe = await Giraffe.findByIdAndUpdate(req.params.id, req.body)

                await giraffe.save()
                res.sendStatus(200)
            } catch (e) {
                res.sendStatus(404)
            }
        })

        .delete(async (req, res) => {
            try {
                await Giraffe.deleteOne({_id: req.params.id})

                res.sendStatus(204)
            } catch (e) {
                res.sendStatus(404)
            }
        })
}