const Category = require('../../model/Category')

const product = require('../../model/product')

const type = require('../../model/type')

const brand = require('../../model/addBrand')


module.exports.addProduct = async(req,res)=>{
    let catdata = await Category.find({})
    return res.render('product',{
        catdata:catdata
    })
}

module.exports.getBrandType = async (req,res)=>{
    
    let catId = req.body.categoryId
    let subId = req.body.subcategoryId
    let extraId = req.body.extracategoryId
    let brandData = await brand.find({ categoryId: catId, subcategoryId: subId, extracategoryId: extraId })
    let typeData = await type.find({ categoryId: catId, subcategoryId: subId, extracategoryId: extraId })
    return res.render('brandtype', {
        'brandData': brandData,
        'typeData': typeData,
    })
}

module.exports.insertproduct = async(req,res)=>{
    const adate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Calcutta'
      });
      

    var singleImage = ''
    if (req.files.image) {
        singleImage = await product.imagePath + "/" + req.files.image[0].filename
    }
    var multiImage = []
    if (req.files.multipleImage) {
        for (var i = 0; i < req.files.multipleImage.length; i++) {
            multiImage.push(product.avtarPath+"/"+req.files.multipleImage[i].filename)
        }
    }

    req.body.image = singleImage
    req.body.multipleImage = multiImage
    req.body.isActive = req.isActive
    req.body.createdDate = adate
    req.body.updatedDate = adate

    let productData = await product.create(req.body)

    if (productData) {
        return res.redirect('back')
    }
    else {
        return res.redirect('back')
    }
    
}