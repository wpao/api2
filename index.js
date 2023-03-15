const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require('path')

//accest img
app.get('/images', express.static(path.join(__dirname, 'images')))

app.get("/", (req, res) => res.send("Hello world"));
app.get("/ping", (req, res) => res.send("Pong"));
app.get("/felix", (req, res) => res.send("Liawi"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
