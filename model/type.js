const mongoose = require('mongoose')

const path = require('path')

const typeSchema =mongoose.Schema({

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
    typename:{
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

const type =mongoose.model('type',typeSchema)

module.exports =type;