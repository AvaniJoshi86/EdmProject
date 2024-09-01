const Category = require('../../model/Category');
const Subcategory = require('../../model/subcategory');
const extracategory =require('../../model/Extracategory');

const adate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
  });
  


module.exports.extracategory = async (req,res)=>{
    let catData = await Category.find({});
    return res.render("extracategory",{
        catdata : catData
    });
}

module.exports.getSubData = async (req,res) =>{
    let subdata = await Subcategory.find({categoryId:req.body.categoryId});
     var optionData = `<option value="">--select subcategory--</option>`;
     for(var sd of subdata){
        optionData += `<option value="${sd.id}">${sd.subcatagoryname}</option>`;
     }
     return res.json(optionData)
}

module.exports.insertExtracategory = async (req,res) =>{
    // console.log(req.body)
  

    req.body.isActive = true;
    req.body.createdDate = adate
    req.body.updatedDate = adate
    
    let CData = await extracategory.create(req.body);
    if(CData){
        console.log('data added');
        return res.redirect('back');
    }
    else{
       console.log("somthing wrong");
        return res.redirect('back');
    }
}