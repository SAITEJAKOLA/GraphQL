const reviews = require("../Sources/Review");

exports.Query = {
    hello: () => {
        return 'Hello World!!';
    },
    products: (parent, args, {productFromFile}) => productFromFile,
    product: (parent, args, context) => {
        const { id } = args;
        const { productFromFile } = context
        return productFromFile.find((product) => product.id === Number(id));
    },
    categories: (parent, args, {categoriesFromFile}) => categoriesFromFile,
    category: (parent, args, context) => {
        const { id } = args;
        const { categoriesFromFile } = context
        return categoriesFromFile.find((cat) => cat.id === id);
    },
    reviews:(parent, args, {reviewsFromFile})=> reviewsFromFile
}