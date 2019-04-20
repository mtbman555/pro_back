const mongoose = require("mongoose");

const stockschema = mongoose.Schema({
    name: {
        type: String
    },
    active:{
        type: Number,
        default: 1
    },
});

let stockModel =  mongoose.model('Stocks',stockschema);

module.exports.insertStock = (value) => {
    let stock = new stockModel({
        name: value.name,
    })
    return stock.save();
}

module.exports.updateStock = (id, value) => {
    return stockModel.findOneAndUpdate(id, value)
}

module.exports.deleteStock = (id) => {
    return stockModel.remove(id)
}

module.exports.getAllStock = () => {
    return stockModel.find({
        active: 1
    })
}