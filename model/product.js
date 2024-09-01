
const mongoose = require('mongoose')

const singleProduct = '/uploads/singleProduct'

const multipleProduct = '/uploads/multipleProduct'

const multer = require('multer')

const path = require('path')

const productSchema = mongoose.Schema({

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
  
    subcategoryId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'subcategory'
    },

    extracategoryId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'extracategory'
    },

    brandId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Brand'
    },

    typeId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'type'
    },

    productname : {
        type : String,
        required : true
    },

    price : {
        type : String,
        required : true
    },

    oldprice : {
        type : String,
        required : true
    },
   
    Rating : {
        type : String,
        required : true
    },

    Color : {
        type : Array,
        required : true,
    },

    Discription : {
        type : String,
        required : true,
    },

    image : {
        type : String,
        required : true
    },

    multipleImage : {
        type : Array,
        required : true
    },
    
    isActive :
    {
        type : Boolean,
        default : true
    },
    
    createdDate: {
        type: String,
        required: true
    },
    
    updatedDate: {
        type: String,
        required: true
    }
})

const imageStorage = multer.diskStorage({
    destination : function(req,file,cb) {
        if(file.fieldname == 'image'){
             cb(null,path.join(__dirname,'..',singleProduct))
        }
        else{
            cb(null,path.join(__dirname,'..',multipleProduct))
        }
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+'-'+Math.floor(Math.random() * 100))
    }
})

productSchema.statics.uploadedAvtar = multer({storage : imageStorage}).fields([{name : 'image', maxCount:1 }, {name : 'multipleImage', maxCount:5}],)
productSchema.statics.avtarPath = multipleProduct
productSchema.statics.imagePath = singleProduct

const product = mongoose.model('product',productSchema)

module.exports = product;