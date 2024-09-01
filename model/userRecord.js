const mongoose = require('mongoose');

const path = require('path');

const RegisterSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    
    password:{
        type:String,
        require:true
    },
    role:{
        type : String,
        required : true,
        default:'User'
    },
    isActive:{
        type:Boolean,
        require:true
    },
    createdDate : {
        type : String,
        required : true
    },
    updatedDate : {
        type : String,
        required : true
    }

});

const User = mongoose.model('User', RegisterSchema);
module.exports = User
