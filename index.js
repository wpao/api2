// const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
// //
// const blogRoutes = require('./src/routes/blog');
// const multer = require('multer')
// const path = require('path')

// setup file storage
// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().getTime() + '-' + file.originalname)
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (
//         file.mimetype === 'image/png' ||
//         file.mimetype === 'image/jpg' ||
//         file.mimetype === 'image/jpeg') {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// corse police
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//     next()
// })

// app.use(bodyParser.json()) //type JSON
// app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use(multer({ storage: fileStorage, fileFilter }).single('image'))

// app.use('/v1/blog', blogRoutes);
// app.use('/paozan', (req, res) => res.send("selamat datang Tuan"))



// // ini adalah baris default
app.get("/", (req, res) => res.send("Hello world"));
app.get("/paozan", (req, res) => res.send("pubg"));
app.get("/wadi", (req, res) => res.send("call of duty"));

// listen
app.listen(port, () => console.log(`Server is listening on port ${port}`));
