'use strict';
var AV = require('../lib/storage-extra.js');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const appInfo = require('./helpers/app-info');
var utils = require('../lib/utils');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', function (req, res) {
  res.send('Hello, ' + req.query.name);
});

app.post('/hello', function (req, res) {
  res.send('Hello, ' + req.body.name);
});

var server = app.listen(3333, function () {});

after(function() {
  server.close();
});

describe('storage-extra', function() {
  it('signDisableHook', function() {
    utils.signHook(appInfo.masterKey, '__before_for_TestClass', 1453711871302).should.equal('1453711871302,a9611dbc226eed1a5f4aa0e4fa20e2d014aeaeb8');
  });
});
