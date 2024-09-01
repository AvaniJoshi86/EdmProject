const mongoose = require("mongoose");
const path = require('path')

const SubcategoryController = mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    resf: "Category",
    required: true,
  },
  subcatagoryname: {
    type: String,
    required: true,
  },
  isActive :{
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

});

const subcategory = mongoose.model("subcategory", SubcategoryController);

module.exports = subcategory;
