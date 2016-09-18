"use strict";

var http = require('http');
var rest = require('restler');
var Step = require('step');
var secrets = require('../secrets');

var sonicApiUpload = function(song) {
    var returnData;
    Step(function () {
        rest.post('https://api.sonicAPI.com/file/upload', {
            multipart: true,
            data: {
                'access_id': secrets.sonicapi,
                'file': song
        }}).on('complete', this);
        },
        function (result) {
            console.log("you reposted in the wrong enighbourhood");
            console.log(result? result : "nowt");
            return result;
        },
        function (result) {
            console.log("???");
        });

    return returnData;
};

var processSong = function (song) {
    var data = sonicApiUpload(song);
    console.log(data);
    return data;
};

module.exports = {
    processSong: processSong
};
