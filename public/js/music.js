"use strict";

var http = require('http');
var fs = require('fs');
var needle = require('needle');
var Step = require('step');
var secrets = require('./secrets');

var sonicApiUpload = function(song, next) {
    var returnData;
    needle.post('https://api.sonicAPI.com/file/upload',
        {
            access_id: secrets.sonicapi,
            file: { file: song, content_type: 'multipart/form-data' },
            format: 'json'
        },
        {
            multipart: true
        }, next);
};

var processSong = function (song, next) {
    sonicApiUpload(song, function (err, res, body) {
        console.log(body);
        next(body);
    });
};

module.exports = {
    processSong: processSong
};
