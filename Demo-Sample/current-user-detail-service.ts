import * as configUtil from 'nodedata/core/utils';
import Q = require('q');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
import {service} from 'nodedata/di/decorators/service';
import {UserDetails} from 'nodedata/security/auth/user-details';
import {User} from 'nodedata/security/auth/user';
var bcryptNodejs = require("bcrypt-nodejs");
import {inject, injectbyname} from 'nodedata/di/decorators/inject';
import UserRepository from './repositories/userRepository';
import {UserDetailService} from 'nodedata/security/auth/user-detail-service';
var userRepo: any;

@service({ 'singleton': true, 'serviceName': 'UserDetailService' })
export class CurrentUserDetailService implements UserDetailService {

    @inject()
    userRepo: UserRepository;

    loadUserByUsername(userName: string): Q.Promise<any> {
        var usr: any;
        var userDetail: UserDetails;
        return this.userRepo.findByField("name", userName).then((user) => {
            usr = user;
            if (user == null || user == undefined) {
                throw 'user doesnot exist';
            }
            userDetail = new User(user.name, user.password, user);
            return userDetail;
        });
    };

    loadUserById(id: any): Q.Promise<any> {
            var usr: any;
            var userDetail: UserDetails;
            var _id: string = id; 
            return this.userRepo.findOne(_id).then((user) => {
                usr = user;
                if (user == null || user == undefined) {
                    throw 'user doesnot exist';
                }
                userDetail = new User(user.name, user.password, user);
                return userDetail;
            });
    };
    loadUserByField(field: any, value: any): Q.Promise<any> {
            var usr: any;
            var userDetail: UserDetails;
            return this.userRepo.findByField(field, value).then((user) => {
                usr = user;
                if (user == null || user == undefined) {
                    throw 'user doesnot exist';
                }
                userDetail = new User(user.name, user.password, user);
                return userDetail;
            });
    };

    createNewUser(userObject): Q.Promise<any> {
            var usr: any;
            var userDetail: UserDetails;
            return this.userRepo.post(userObject).then((user) => {
                usr = user;
                if (user == null || user == undefined) {
                    throw 'user doesnot exist';
                }
                userDetail = new User(user.name, user.password, user);
                return userDetail;
            });
    };

    updateExistingUser(id, userObject): Q.Promise<any> {
        var usr: any;
        var userDetail: UserDetails;
        return this.userRepo.put(id, userObject).then((user) => {
            usr = user;
            if (user == null || user == undefined) {
                throw 'user doesnot exist';
            }
            userDetail = new User(user.name, user.password, user);
            return userDetail;
        });
    }

    getCurrentUser(sessionId): Q.Promise<any>{
        return Q.when(true);
    }

    getNewUser(req, res) {
        var userDetail: UserDetails;
        var user = req.body;
        this.userRepo.findByField("name", user.name).then((foundUser) => {
            if (foundUser == null || foundUser == undefined || !foundUser._id) {
                user.password = bcryptNodejs.hashSync(user.password, bcryptNodejs.genSaltSync(8), null);
                this.createNewUser(user).then((finalUser) => {
                    res.set("Content-Type", "application/json");
                    res.send(200, JSON.stringify('user created', null, 4));
                }, (error) => {
                    res.set("Content-Type", "application/json");
                    res.send(400, JSON.stringify('cannot create user', null, 4));
                });
            } else {
                res.set("Content-Type", "application/json");
                res.send(400, JSON.stringify('user already exists', null, 4));
            }
        });
    };

}