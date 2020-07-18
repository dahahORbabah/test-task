const multer = require('multer')
const Giraffe = require('../models/giraffe')
const path = require('path')
const { check, validationResults } = require('express-validator')
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
        [
            check('name', 'Field is not correct').exists(),
            // check('weight', 'Field is not correct').isLength({ min: 3 }),
            // check('sex', 'Field is not correct').isLength({ min: 1, max: 1 }),
            // check('height', 'Field is not correct').isLength({ min: 1 }),
            // check('color', 'Field is not correct').isLength({ min: 1 }),
            // check('diet', 'Field is not correct').isLength({ min: 1 }),
            // check('temper', 'Field is not correct').isLength({ min: 1 }),
            // check('image', 'Field is not correct').isLength({ min: 1 })
        ],
        async (req, res) => {
        try {
            const { name, weight, sex, height, color, diet, temper } = req.body
            const existed = await Giraffe.findOne({ name })

            if (existed){
                console.log(existed);
                return res.sendStatus(400)
            }

            const giraffe = new Giraffe({ name, weight, sex, height, color, diet, temper })
            console.log(giraffe);

            await giraffe.save()
            res.sendStatus(201)
        } catch (e) {
            console.error(e)
            res.sendStatus(500)
        }
    })

    app.get('/api/giraffe', async (req, res) => {
        try {
            const giraffes = await Giraffe.find()
            console.log(giraffes);
        } catch (e) {
            console.error(e)
            res.sendStatus(500)
        }
    })

    app.route('/api/giraffe/:id')
        .get((req, res) => {
            
        })
        
        .put((req, res) => {
            
        })
        .delete((req, res) => {
            
        })
}