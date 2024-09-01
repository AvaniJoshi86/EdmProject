const Category = require('../../model/Category');

const adate = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Calcutta'
});


module.exports.AddCategory = async (req,res)=>{
    return res.render('AddCategory');
}

module.exports.insertCategoryRcord = async (req,res) => {

   req.body.isActive = req.isActive
   req.body.createdDate = adate
   req.body.updatedDate = adate

    var imagePath = "";
    if (req.file) {
      // console.log(req.file);
      imagePath = Category.avtarPath + "/" + req.file.filename;
    }
    req.body.cprofile = imagePath;
  
    var check = await Category.create(req.body);
    if (check) {
      return res.redirect("back");
      console.log('submited');
    } else {
      return res.redirect("back");
    }
}

