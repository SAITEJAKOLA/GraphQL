
exports.Category = {
    products: (parent, { filter }, context) => {
        const { id } = parent;
        const { productFromFile } = context
        const categoryProducts = productFromFile.filter((prod) => prod.categoryId === id)
        if (filter) {
            if (filter.onSale === true) {
                let filteredProducts = categoryProducts.filter((product) => product.onSale === true);
                return filteredProducts
            }
        }
        return categoryProducts;
    }

}