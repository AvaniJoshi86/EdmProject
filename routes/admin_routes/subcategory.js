const express = require("express");

const routes = express.Router();
const passport = require('passport')
const subcategoryController = require("../../controller/admin_controller/subcategory");



routes.get("/AddSub",passport.setAuthenticatedUser,subcategoryController.AddSub);

routes.post("/insertSubCategory",passport.setAuthenticatedUser,subcategoryController.insertSubCategory);

module.exports = routes;
