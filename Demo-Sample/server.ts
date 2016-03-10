/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="typings/linq/linq.3.0.3-Beta4.d.ts" />

import http = require('http');
import Config = require('./config');
var Main = require('nodedata')(Config, __dirname);
var express = require("express");
import {router} from 'nodedata/dynamic/dynamic-controller';
import {TestDI} from './test-di';

console.log('-------------------------------------------------------');
console.log('Testing DI');
var testDI = new TestDI();
testDI.sayHello();
testDI.showUsers();
console.log('-------------------------------------------------------');

require('reflect-metadata/reflect');
var bodyParser = require("body-parser");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
import * as config from './config';
process.env.APP_ROOT = "hello";

var app = express();

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var expressSession = require('express-session');
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);

var server = http.createServer(app);
server.listen(9999);