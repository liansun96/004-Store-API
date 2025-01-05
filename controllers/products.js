const Product = require('../models/product')

const getAllProductsStatic = async(req , res) => {
    const products = await Product.find({featured : true})
    res.status(200).json({nbHits : products.length , products})
}  

const getAllProducts = async (req , res) => {
    const {featured} = req.query

    const queryObject = {}
    
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    console.log(queryObject);    

    const products = await Product.find(queryObject)
    // const products = await Product.find(req.query)
    res.status(200).json({nbHits : products.length , products})
}

module.exports = {getAllProducts , getAllProductsStatic}
