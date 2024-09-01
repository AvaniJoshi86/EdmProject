const express =require('express')
const routes =express.Router()
const passport = require('passport')
const productcontroller = require('../../controller/admin_controller/product')
const productmodel = require('../../model/product')

routes.get('/',passport.setAuthenticatedUser,productcontroller.addProduct)

routes.post('/getBrandType',passport.setAuthenticatedUser,productcontroller.getBrandType);

routes.post('/insertproduct',passport.setAuthenticatedUser,productmodel.uploadedAvtar,productcontroller.insertproduct)


module.exports=routes