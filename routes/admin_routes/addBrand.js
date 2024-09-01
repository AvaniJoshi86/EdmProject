const express = require('express');

const routes = express.Router();

const passport = require('passport')

const brandcontroller =require('../../controller/admin_controller/addBrand')

routes.get('/addBrandname',passport.setAuthenticatedUser,brandcontroller.addBrandname)

routes.post('/getextracategory',passport.setAuthenticatedUser,brandcontroller.getextracategory)

routes.post('/insertBrand',passport.setAuthenticatedUser,brandcontroller.insertBrand)

module.exports=routes;