const mongoose = require('mongoose')

const AVTAR_PATH = '/uploads'

const multer = require('multer')

const path = require('path')

const AdminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        default : 'Admin',
    },
    profile : {
        type : String,
        required : true
    },
    isActive :
    {
        type : Boolean,
        default : true
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

AdminSchema.statics.uploadedAvtar = multer({storage : imageStorage}).single('profile')
AdminSchema.statics.avtarPath = AVTAR_PATH

const Admin = mongoose.model('Admin',AdminSchema)

module.exports = Admin;