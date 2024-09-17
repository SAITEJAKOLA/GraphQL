const productFromFile = require('../Sources/Products');

exports.Category = {
    products: (parent, args, context) =>{
        const {id} = parent;
        return productFromFile.filter((prod)=> prod.categoryId === id)
    }
}