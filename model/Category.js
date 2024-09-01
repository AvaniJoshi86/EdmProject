const mongoose = require('mongoose')

const AVTAR_PATH = '/uploads/Category'

const multer = require('multer')

const path = require('path')

const CategorySchema = mongoose.Schema({
    categoryname : {
        type : String,
        required : true
    },
    cprofile : {
        type : String,
        required : true
    },
    isActive :
    {
        type : Boolean,
        default : true
    },
    createdDate : {
        type : String,
        required : true
    },
    updatedDate : {
        type : String,
        required : true
    } 
    
})

const imageStorage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null,path.join(__dirname,'..',AVTAR_PATH))
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now())
    }
})

CategorySchema.statics.uploadedAvtar = multer({storage : imageStorage}).single('cprofile')
CategorySchema.statics.avtarPath = AVTAR_PATH

const Category = mongoose.model('Category',CategorySchema)

module.exports = Category; 