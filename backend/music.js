"use strict";

const http = require('http');
const rest = require('restler');
const secrets = require('../secrets');

var sonicApiUpload = function(song) {
    rest.post('https://api.sonicAPI.com/file/upload', {
        multipart: true,
        data: {
            'access_id': secrets.sonicapi,
            'file': song
        }
    }).on('complete', function(data, res) {
        return data;
    });

};

var processSong = function (song) {
    var data = sonicApiUpload(song);
    console.log(data);
    return data;
};

module.exports = {
    processSong: processSong
};
