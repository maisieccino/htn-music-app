"use strict";

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './files' });

var app = express();

app.post('/upload', upload.single('file'), function (req, res) {
    var returnData = {
        filename: req.file.filename,
        url: "https://giphy.com/gifs/animal-parrot-rRLAQHL9qHzNK",
        spiciness: 0.8
    };
    return res.send(returnData);
});

app.get('/', function (req, res) {
    return res.send("Sup.");
});

app.listen(3001, function () {
    console.log('sick');
});
