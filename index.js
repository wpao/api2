const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
const path = require('path')
const mongoose = require('mongoose');

// http masuk ke https
// <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 

//
const dataAuth = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

//
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/v1/auth', dataAuth);
app.use('/v1/blog', blogRoutes);

//
app.get("/", (req, res) => res.send("Selamat Datang Tuan"));
app.get("/paozan", (req, res) => res.send("Pong"));
app.get("/wadi", (req, res) => res.send("call of duty"));

// mongoose
const uri = 'mongodb+srv://paozan:22M.Mongodb.com@cluster0.vxbza3t.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    })
    .catch(err => console.log(err))