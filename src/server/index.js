const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


const PORT = process.env.PORT ? process.env.PORT : 8080;
const DB_URL = 'mongodb://127.0.0.1:27017/light-tech-test-db';
// const https = require('https');
// const fs = require('fs');
const mongoose = require('mongoose');
const Giraffe = require('./models/giraffe');

mongoose.Promise = global.Promise;
mongoose
.connect(DB_URL, { 
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true 
})
.then(
    () => console.log('Database connected:', DB_URL),
    err => console.log('Connection error:', err)
)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next()
})
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '../../dist/images')));
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

require('./routes')(app);
require('./routes/static')(app);

if (process.env.NODE_ENV == 'production') {
    app.use('/', express.static(path.join(__dirname, '../client')));
    app.listen(PORT, () => {
        console.log(`Listening port: ${PORT}`);
    })
} else if (process.env.NODE_ENV == 'development') {
    const webpack = require('webpack');
    const config = require(path.join(__dirname, '../../webpack.config'));
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
            publicPath: config.output.publicPath,
            stats: 'errors-only'
        }));
    app.use(require('webpack-hot-middleware')(compiler));

    // const options = {
    //     key: fs.readFileSync(__dirname + '/ssl/key.pem'),
    //     cert: fs.readFileSync(__dirname + '/ssl/cert.pem'),
    //     requestCert: false,
    //     rejectUnauthorized: false
    // };
    // const server = https.createServer(options, app);
    
    app.listen(PORT, () => {
        console.log(`Server listening port: ${PORT}`);
    })
}
module.exports = app


