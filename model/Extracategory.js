const mongoose = require('mongoose')

const path = require('path')

const extracategorySchema =mongoose.Schema({

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

    extracategoryname :{
        type: String,
        required :true,
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

const extracategory =mongoose.model('extracategory',extracategorySchema)

module.exports =extracategory;