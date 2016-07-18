/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />
/// <reference path="typings/linq/linq.3.0.3-Beta4.d.ts" />

import http = require('http');
var express = require("express");
import {router} from 'nodedata/core/exports';

import * as config from './config';
import * as securityConfig from './security-config';

import * as data from 'nodedata/mongoose';
import * as security from 'nodedata/security/auth/security-utils';
var Main = require('nodedata/core');
Main(config, securityConfig, __dirname, data.entityServiceInst);

data.connect();
data.generateSchema();


require('reflect-metadata/reflect');
var bodyParser = require("body-parser");
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
process.env.APP_ROOT = "hello";

var app = express();
Main.register(app);

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
