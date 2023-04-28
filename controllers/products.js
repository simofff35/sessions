const products = [];

exports.getAddPoduct = (req, res, next) => {
  res.render("add-product", {
    doctitle: "Add product",
    path: "admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body.title, products);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", { pds: products, doctitle: "shop", path: "/" });
};

exports.get404 = (req, res, next) => {
  res.render("404", { doctitle: 404 });
};
