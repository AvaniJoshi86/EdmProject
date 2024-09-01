const express = require('express');
const routes = express.Router();
const passport = require('passport')
const typecontroller = require('../../controller/admin_controller/type')

routes.get('/type',passport.setAuthenticatedUser,typecontroller.addtype)

routes.post('/inserttype',passport.setAuthenticatedUser,typecontroller.inserttype)

module.exports=routes;