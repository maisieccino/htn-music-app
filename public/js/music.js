"use strict";

var http = require('http');
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var needle = require('needle');
var Step = require('step');
var secrets = require('./secrets');

var sonicApiUpload = function(song, next) {
    var returnData;
    var file = path.join(__dirname, '..', '..', song);
    needle.post('https://api.sonicAPI.com/analyze/tempo',
        {
            access_id: secrets.sonicapi,
            input_file: { file: file, content_type: 'multipart/form-data' },
            format: 'json',
            blocking: true
        },
        {
            multipart: true
        }, next);
};

var processSong = function (song, next) {
    sonicApiUpload(song, function (err, res, body) {
        if (!err) {
            next(body.auftakt_result.overall_tempo);
        }
        else {
            next;
        }
    });
};

module.exports = {
    processSong: processSong
};
