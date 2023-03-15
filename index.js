const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
const dataAuth = require('./src/routes/auth');

app.use('/v1/auth', dataAuth);
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get("/", (req, res) => res.send("Hello Tuan"));
app.get("/paozan", (req, res) => res.send("Pong"));
app.get("/wadi", (req, res) => res.send("call of duty"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
