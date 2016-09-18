"use strict";

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './files' });
const music = require('./music');
const fs = require('fs');

var app = express();

app.post('/upload', upload.single('file'), function (req, res, next) {
    // var sth = music.processSong(fs.readFileSync(req.file.path));
    var returnData = {
        id: 324,
        url: "https://giphy.com/gifs/animal-parrot-rRLAQHL9qHzNK",
        frames: 50,
        spiciness: 0.8,
        tempo: 80
    };
    return res.send(returnData);
});

app.post('/upload', function (req, res) {
    return res.status(404).send({
        "error": "No file included"
    });
})

app.get('/', function (req, res) {
    return res.send("Sup.");
});

app.listen(3001, function () {
    console.log('sick');
});
