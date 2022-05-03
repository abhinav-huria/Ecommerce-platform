const mongoose = require('mongoose');
//URL to be added
const url = "mongodb+srv://admin:<password>.u77d7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


module.exports = function()
{
  mongoose.connect(url).then(function()
  {
    console.log("DB Connected")
  })  
  .catch(function(error)
  {
    console.log(error)
  })
}
