const mongoose = require('mongoose')

const path = require('path')

const BrandSchema =mongoose.Schema({

    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true,
    },

    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "SubCategory",
        required : true,
    },

    extracategoryId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"extracategory",
        required:true,
    },

    Brandname:{
        type:String,
        required:true,
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

const Brand =mongoose.model('Brand',BrandSchema)

module.exports =Brand;