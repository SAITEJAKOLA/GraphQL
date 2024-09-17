
exports.Product ={
    category:(parent, args, { categoriesFromFile })=>{
        const categoryId = parent.categoryId;
        const { categoriesFromFile } = context
        return categoriesFromFile.find((cat) => cat.id === categoryId);
    }
}