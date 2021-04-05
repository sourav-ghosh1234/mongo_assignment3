const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:String,
    price:String

})

module.exports = mongoose.model("Product", productSchema);