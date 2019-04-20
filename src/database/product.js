const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productschema = Schema({
    name: {
        type: String
    },
    cost: {
        type: Number
    },
    price: {
        type: Number
    },
    amount:{
        type: Number
    },
    active:{
        type: Number,
        default: 1
    },
    stock: {
        type: Schema.Types.ObjectId,
        ref: 'stock'
    }
});

let productModel =  mongoose.model('Products',productschema);

module.exports.insertProduct = (value) => {
    console.log(value)
    let product = new productModel({
        name: value.name,
        cost: value.cost,
        price: value.price,
        amount: value.amount,
        stock: value.stock
    })
    return product.save();
}

module.exports.updateProduct = (id, value) => {
    return productModel.findOneAndUpdate(id, value)
}

module.exports.deleteProduct = (id) => {
    return productModel.remove(id)
}

module.exports.getAllProduct = async () => {
    return await productModel.find({
        active: 1
    })
}