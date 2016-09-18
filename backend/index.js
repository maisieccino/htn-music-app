"use strict";

var express = require('express');
var multer = require('multer');
var upload = multer({ dest: './files' });
var http = require("http"); 
var path = require('path');
var music = require('../public/js/music.js'); //Maybe needs updated?
var fs = require('fs');
var app = express();
app.use(express.static('public'));
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyATRGz9jLS7KIVCnIBUPvU8_B3kpFNri_g",
    authDomain: "spicygifmeme.firebaseapp.com",
    serviceAccount: "gifs/SpicyGifMeme-1ba09b36502b.json",
    databaseURL: "https://spicygifmeme.firebaseio.com",
    storageBucket: "spicygifmeme.appspot.com",
    messagingSenderId: "694275757511"
};
firebase.initializeApp(config);
var db = firebase.database();
var ref = db.ref("gif");

app.post('/upload', upload.single('file'), function (req, res, next) {
    var returnData;
    //need calculated tempo, normal range between 100-160bpm
    var musicTempo = 140; //default
    music.processSong(req.file.path, function (data) {
        returnData = data;

        var startRange = musicTempo-5;
        var endRange = musicTempo+5;
        ref.orderByChild("tempo").startAt(startRange).endAt(engRange).on("child_added", function(snapshot) {
            console.log(snapshot.key);
            returnData = {
                id: snapshot.key,
                url: snapshot.val().url,
                frames: snapshot.val().frames,
                spiciness: snapshot.val().spicy_rating,
                tempo: snapshot.val().tempo
            };

        });
    });
});

app.post('/upload', function (req, res) {
    return res.status(400).send({
        "error": "No file included"
    });
})

app.get('/', function (req, res) {
    console.log("sup");
    return res.sendFile(path.resolve('frontend/index.html'));
});

http.createServer(app).listen(80, function () {
    console.log('sick');
});
