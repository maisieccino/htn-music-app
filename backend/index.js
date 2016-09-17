"use strict";

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './files' });

var app = express();

app.post('/upload', upload.single('file'), function (req, res) {
    return req.file.filename;
});

app.listen(3001, function () {
    console.log('sick');
});
