const getAllProducts = (req , res) => {
    res.status(200).json({msg : 'Get All Products'})
}

const getAllProductsStatic = (req , res) => {
    res.status(200).json({msg : 'Get All Products Static'})
}

module.exports = {getAllProducts , getAllProductsStatic}