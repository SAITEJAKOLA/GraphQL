
exports.Query = {
    hello: () => {
        return 'Hello World!!';
    },
    products: () => productFromFile,
    product: (parent, args, context) => {
        const { id } = args;
        const { productFromFile } = context
        return productFromFile.find((product) => product.id === Number(id));
    },
    categories: () => categories,
    category: (parent, args, context) => {
        const { id } = args;
        const { categoriesFromFile } = context
        return categoriesFromFile.find((cat) => cat.id === id);
    }
}