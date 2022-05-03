const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  link:String
});

const ProductModel = mongoose.model('_products', ProductSchema);

module.exports = ProductModel;