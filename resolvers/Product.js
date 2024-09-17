const categoriesFromFile = require('../Sources/Categories');

exports.Product ={
    category:(parent, args, context)=>{
        const categoryId = parent.categoryId;
        return categoriesFromFile.find((cat) => cat.id === categoryId);
    }
}