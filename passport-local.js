const passport = require("passport");

const passportlocal = require("passport-local").Strategy;

const User = require('../model/userRecord')

const Admin = require("../model/addRecord");

// admin
passport.use('admin',new passportlocal (
    {
      usernameField: "email",
    },
    async function (email, password, done) {

      let adminData = await Admin.findOne({ email: email });
      if (!adminData || adminData.password != password) {
        return done(null, false);
      } else {
        return done(null, adminData);
      }
    }
  )
)


// User 
passport.use('user-local',new passportlocal({
  usernameField: 'email'
}, async function (email, password, done) {
  let Userdata = await User.findOne({ email: email });

  if (!Userdata || Userdata.password != password) {
      return done(null, false);
  }
  return done(null, Userdata);
}))


passport.serializeUser(function (adminData, done) {
  return done(null, adminData.id);
});

passport.deserializeUser(async function (id, done) {
  let AdminData = await Admin.findById(id);
  if (AdminData) {
      return done(null, AdminData);
  }
  else {
      let Userdata = await User.findById(id)
      if(Userdata){
          return done(null, Userdata);
      }
      else{

          return done(null, false);
      }
  }
})


passport.setAuthenticatedUser = function(req,res,next){
  if(req.isAuthenticated())
  {
      next();
  }
  else{
      return res.redirect('/')
  }
}

passport.datashow = (req, res, next) => {

  if(req.isAuthenticated())
  {
      if(req.user.role == "admin"){
          res.locals.admin = req.user
      }
      else{
          res.locals.user = req.user
      }
  }
  next()

}

module.exports = passport;
