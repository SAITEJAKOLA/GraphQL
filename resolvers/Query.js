const productFromFile = require('../Sources/Products');
const categoriesFromFile = require('../Sources/Categories');

exports.Query = {
    hello: () => {
        return 'Hello World!!';
    },
    products: ()=> productFromFile,
    product: (parent, args, context) => {
        const {id } = args;
        return productFromFile.find((product) => product.id === Number(id));
    },
    categories: () => categories,
    category:( parent,args,context)=>{
        const {id} = args;
        return categoriesFromFile.find((cat)=>cat.id === id);
    }
}