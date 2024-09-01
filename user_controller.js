const category = require("../../model/Category");
const subcategory = require("../../model/subcategory");
const extracategory = require("../../model/Extracategory");
const brand = require("../../model/addBrand");
const product = require("../../model/product");
const User = require("../../model/userRecord");
const cart = require("../../model/cart");

const adate = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Calcutta",
});

module.exports.homepage = async (req, res) => {
  let categoryData = await category.find({ isActive: true });
  let subcategoryData = await subcategory.find({ isActive: true });
  let extracategoryData = await extracategory.find({ isActive: true });
  var cartData = 0;
  if (req.user) {
    let userCartCount = await cart
      .find({ user_id: req.user.id })
      .countDocuments();
    req.session.cartData = userCartCount;
    cartData = req.session.cartData;
  }

  return res.render("user/homepage", {
    categoryData: categoryData,
    subcategoryData: subcategoryData,
    extracategoryData: extracategoryData,
    cartData: cartData,
  });
};

module.exports.shop = async (req, res) => {
  let catId = req.params.id;
  let subId = req.params.subId;
  let extraId = req.params.extraId;

  let productData = await product.find({
    categoryId: catId,
    subcategoryId: subId,
    extracategoryId: extraId,
  });
  let categoryData = await category.find({ isActive: true });
  let subcategoryData = await subcategory.find({ isActive: true });
  let extracategoryData = await extracategory.find({ isActive: true });
  let brandData = await brand.find({});
  var cartData = 0;
  if (req.user) {
    cartData = req.session.cartData;
  }

  return res.render("user/shop", {
    categoryData: categoryData,
    subcategoryData: subcategoryData,
    extracategoryData: extracategoryData,
    brandData: brandData,
    productData: productData,
    cartData: cartData,
  });
};

module.exports.findBrandWisedata = async (req, res) => {
  const productData = await product.find({ brandId: req.body.brandIds });

  return res.render("user/brandFilter", {
    productData: productData,
  });
};

module.exports.viewproduct = async (req, res) => {
  let catId = req.params.id;
  let subId = req.params.subId;
  let extraId = req.params.extraId;

  const productData = await product.findById(req.params.id);
  const categoryData = await category.find({});
  const subcategoryData = await subcategory.find({ isActive: true });
  const extracategoryData = await extracategory.find({ isActive: true });
  let brandData = await brand.find({});

  var cartData = 0;
  if (req.user) {
    cartData = req.session.cartData;
  }
  res.render("User/viewproduct", {
    categoryData: categoryData,
    subcategoryData: subcategoryData,
    extracategoryData: extracategoryData,
    brandData: brandData,
    productData: productData,
    cartData: cartData,
  });
};

module.exports.userRegister = async (req, res) => {
  let categoryData = await category.find({ isActive: true });
  let subcategoryData = await subcategory.find({ isActive: true });
  let extracategoryData = await extracategory.find({ isActive: true });

  var cartData = 0;
  if (req.user) {
    cartData = req.session.cartData;
  }
  return res.render("user/userRegister", {
    categoryData: categoryData,
    subcategoryData: subcategoryData,
    extracategoryData: extracategoryData,
    cartData: cartData,
  });
};

module.exports.insertRegister = async (req, res) => {
  req.body.isActive = req.isActive;
  req.body.createdDate = adate;
  req.body.updatedDate = adate;
  await User.create(req.body);
  return res.redirect('back')
};

module.exports.userLogin = async (req, res) => {
  let categoryData = await category.find({ isActive: true });
  let subcategoryData = await subcategory.find({ isActive: true });
  let extracategoryData = await extracategory.find({ isActive: true });
  var cartData = 0;
  if (req.user) {
    cartData = req.session.cartData;
  }

  return res.render("user/userLogin", {
    categoryData: categoryData,
    subcategoryData: subcategoryData,
    extracategoryData: extracategoryData,
    cartData: cartData,
  });
};

module.exports.insertLogin = async (req, res) => {
  return res.redirect("/user");
};

module.exports.addTocart = async (req, res) => {
  let cartData = await cart.find({
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  });

  if (cartData.length == 0) {
    req.body.isActive = req.isActive;
    req.body.createdDate = adate;
    req.body.updatedDate = adate;
    await cart.create(req.body);

    let userCartCount = await cart
      .find({ user_id: req.body.user_id })
      .countDocuments();
    req.session.cartData = userCartCount;
    return res.redirect("back");
  } else {
    console.log("product is already add");
    return res.redirect("back");
  }
};

module.exports.cart = async (req, res) => {
  let categoryData = await category.find({ isActive: true });
  let subcategoryData = await subcategory.find({ isActive: true });
  let extracategoryData = await extracategory.find({ isActive: true });

  var cartData = 0;
  if (req.user) {
    let userCartCount = await cart
      .find({ user_id: req.user.id })
      .countDocuments();
    req.session.cartData = userCartCount;
    cartData = req.session.cartData;
  } else {
    return res.redirect("/user");
  }
  let cartUserData = await cart
    .find({ user_id: req.user.id })
    .populate("product_id")
    .exec();
  // console.log(cartUserData);

  return res.render("user/cart", {
    categoryData: categoryData,
    subcategoryData: subcategoryData,
    extracategoryData: extracategoryData,
    cartData: cartData,
    cartUserData:cartUserData
  });
};

module.exports.productQuantity = async (req,res) =>{
  let cartQuality = await cart.findOne({product_id:req.body.productId,user_id:req.user_id});

    if(cartQuality)
    {
        let cartUpdate = await cart.findByIdAndUpdate(cartQuality.id,{
            quantity : req.body.quantity
        })
    }
}
