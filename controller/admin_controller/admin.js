const Admin = require("../../model/addRecord");

module.exports.home = async (req, res) => {
  return res.render("home");
};

module.exports.addAdminRcord = async (req, res) => {
  return res.render("addAdminRcord");
};

module.exports.insertAdminRcord = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  req.body.name = req.body.fname + "" + req.body.lname;

  var imagePath = "";
  if (req.file) {
    // console.log(req.file);
    imagePath = Admin.avtarPath + "/" + req.file.filename;
  }
  req.body.profile = imagePath;

  var check = await Admin.create(req.body);
  if (check) {
    return res.redirect("back");
  } else {
    return res.redirect("back");
  }
};

module.exports.login = async (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/dashbord");
  } else {
    return res.render("login");
  }
};

module.exports.adminlogin = async (req, res) => {
  let AdminData = await Admin.findOne({ email: req.body.email });
  if (AdminData && AdminData.password == req.body.password) {
    res.cookie("adminData", AdminData);
    return res.redirect("/dashbord");
  } else {
    return res.redirect("/");
  }
};
