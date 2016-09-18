"use strict";

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './files' });
const music = require('./music');
const fs = require('fs');

var app = express();

app.post('/upload', upload.single('file'), function (req, res) {
    var sth = music.processSong(fs.readFileSync(req.file.path));
    var returnData = {
        filename: req.file.filename,
        url: "https://giphy.com/gifs/animal-parrot-rRLAQHL9qHzNK",
        spiciness: 0.8
    };
    return res.send(sth);
});

app.get('/', function (req, res) {
    return res.send("Sup.");
});

app.listen(3001, function () {
    console.log('sick');
});
