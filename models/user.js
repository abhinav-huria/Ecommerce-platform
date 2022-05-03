const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
  name: String,
  username: String,
  pwd:String,
  isAdmin:Boolean,
  cart:Array,
  salt:Number,
});

const UserModel = mongoose.model('_users', UserSchema);

module.exports = UserModel;