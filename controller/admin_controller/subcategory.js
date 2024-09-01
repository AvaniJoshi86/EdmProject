const Category = require("../../model/Category");
const subcategory = require("../../model/subcategory");

const adate = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Calcutta'
});

module.exports.AddSub = async (req, res) => {
  let catdata = await Category.find({});
  return res.render("AddSub", {
    catdata: catdata,
  });
};

module.exports.insertSubCategory = async (req, res) => {
  
  req.body.isActive = req.isActive
  req.body.createdDate = adate
  req.body.updatedDate = adate

  let subData = await subcategory.create(req.body);
  if (subData) {
    return res.redirect("back");
  } else {
    console.log("not inserted");
    return res.redirect("back");
  }
};
