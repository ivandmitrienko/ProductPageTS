const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = new Schema(
  {
    nameOfProduct: String,
    nameOfPrice: Number,
    image: String,
    count: Number,
  },
  { versionKey: false }
);

const Product = mongoose.model("Product", productScheme);

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) res.send(product);
  else res.sendStatus(404);
};

const saveProduct = async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const name = req.body.nameOfProduct;
  const price = req.body.nameOfPrice;
  const image = req.body.image;
  const count = req.body.count;

  const product = new Product({
    nameOfProduct: name,
    nameOfPrice: price,
    image: image,
    count: count,
  });

  await product.save();
  res.send(product);
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  if (product) res.send(product);
  else res.sendStatus(404);
};

const updateProduct = async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const image = req.body.image;
  const count = req.body.count;
  const newProduct = {
    nameOfProduct: name,
    nameOfPrice: price,
    image: image,
    count: count,
  };

  const product = await Product.findOneAndUpdate({ _id: id }, newProduct, {
    new: true,
  });
  if (product) res.send(product);
  else res.sendStatus(404);
};

module.exports = {
  getProducts,
  getProduct,
  saveProduct,
  deleteProduct,
  updateProduct,
};
