//modules
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");
const expresshds = require("express-handlebars");
//middlewares
const productsConstrolllers = require("./controllers/products");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
//express
const app = express();
//config
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
//Route handler
app.use("/admin", adminRoutes.router);
app.use(shopRoutes);
app.use(productsConstrolllers.get404);

//Listening
app.listen(3000);
