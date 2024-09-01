const express = require('express');

const routes = express.Router();

const passport = require('passport')

const extracategoryController = require('../../controller/admin_controller/extracategory');

routes.get('/extracategory',passport.setAuthenticatedUser,extracategoryController.extracategory);

routes.post("/getSubcategoryData",passport.setAuthenticatedUser, extracategoryController.getSubData);

routes.post("/insertExtracategory",passport.setAuthenticatedUser, extracategoryController.insertExtracategory);

module.exports = routes;