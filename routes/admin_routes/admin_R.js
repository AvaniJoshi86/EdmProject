const express = require('express')

const routes = express.Router()

const Model =require('../../model/addRecord')

const passport=require('passport')

const addRecordCon = require('../../controller/admin_controller/admin')

routes.get('/',addRecordCon.login)

routes.get('/logout',passport.setAuthenticatedUser, async (req, res) => {

    req.logOut(function (err) {
        if (err) {
            console.log(err);
        }
    })
    return res.redirect('/');
})

routes.get('/dashbord',addRecordCon.home)

routes.get('/addAdminRcord',addRecordCon.addAdminRcord)

routes.post('/insertAdminRcord',Model.uploadedAvtar,addRecordCon.insertAdminRcord)

routes.post('/adminlogin',passport.authenticate('admin', { failureRedirect: '/' }),addRecordCon.adminlogin)

routes.use('/Category',require('./Category'))

routes.use('/subcategory',require('./subcategory'))

routes.use('/extracategory',require('./extracategory'))

routes.use('/addBrandname',require('./addBrand'))

routes.use('/type',require('./type'))

routes.use('/product',require('./product'))

module.exports = routes;