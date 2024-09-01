const Category = require('../../model/Category');
const Subcategory = require('../../model/subcategory');
const extracategory =require('../../model/Extracategory');
const Brand =require('../../model/addBrand')

const adate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});

module.exports.addBrandname = async (req,res)=>{
    let catData = await Category.find({});
    return res.render("addBrandname",{
        catdata : catData
    });
}

module.exports.getextracategory= async (req,res) =>{
    
    let extradata = await extracategory.find({subcategoryId:req.body.subcategoryId})

    return res.render('Ajex',{
        extradata :extradata
    })
}

module.exports.insertBrand= async(req,res)=>{

    req.body.isActive = req.isActive
    req.body.createdDate = adate
    req.body.updatedDate = adate

    let BrandData= await Brand.create(req.body)

    if(BrandData){
        console.log('brand add')
        return res.redirect('back')
    }
    else
    {
        console.log('Brand data is not define')
        return res.redirect('back')
    }

}

