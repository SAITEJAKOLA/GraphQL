
exports.Category = {
    products: (parent, args, context) =>{
        const {id} = parent;
        const { productFromFile } = context
        return productFromFile.filter((prod)=> prod.categoryId === id)
    }
}