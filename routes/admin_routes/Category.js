const express = require('express');

const routes =express.Router();

const passport=require('passport')

const Categorycontroller = require('../../controller/admin_controller/Category');

const Category = require('../../model/Category')

routes.get('/AddCategory',passport.setAuthenticatedUser,Categorycontroller.AddCategory);

routes.post('/insertCategoryRcord',passport.setAuthenticatedUser,Category.uploadedAvtar,Categorycontroller.insertCategoryRcord);

module.exports = routes;