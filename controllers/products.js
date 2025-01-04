const Product = require('../models/product')

const getAllProducts = (req , res) => {
    res.status(200).json({msg : 'Get All Products'})
}

const getAllProductsStatic = async(req , res) => {
    const products = await Product.find({})
    res.status(200).json({products})
}

module.exports = {getAllProducts , getAllProductsStatic}