const express = require('express')

const routes = express.Router()

const passport = require('passport');

const usercontroller = require('../../controller/user_controller/user_controller')

routes.get('/',usercontroller.homepage)

routes.get('/shop/:id/:subId/:extraId',usercontroller.shop)

routes.post('/findBrandWisedata',usercontroller.findBrandWisedata)

routes.get('/viewproduct/:id',usercontroller.viewproduct);

routes.get('/Register',usercontroller.userRegister);

routes.post('/insertRegister',usercontroller.insertRegister)

routes.get('/userLogin',usercontroller.userLogin)

routes.post('/insertLogin',passport.authenticate('user-local', { failureRedirect: 'back' }),usercontroller.insertLogin)

routes.get('/userLogout',async (req,res,next)=>{
    req.logout(function (err) {
        if (err)
        { 
            next() 
        }
        return res.redirect('/user')
    });
})

routes.post('/addTocart',usercontroller.addTocart)

routes.get('/cart',usercontroller.cart)

routes.post('/productQuantity',usercontroller.productQuantity)

module.exports = routes