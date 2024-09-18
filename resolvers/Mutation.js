const { v4: uuid } = require("uuid")

exports.Mutation = {
    addCategory: (parent, { input }, { categoriesFromFile }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name: name
        }
        categoriesFromFile.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, { input }, { productFromFile }) => {
        const { name, image, price, onSale, quantity, categoryId } = input
        const newProduct = {
            id: uuid(),
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId
        }
        productFromFile.push(newProduct);
        return newProduct;
    },
    addReview: (parent, { input }, { reviewsFromFile }) => {
        const { date, title, comment, rating, productId } = input;

        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }
        reviewsFromFile.push(newReview)
        return newReview;
    }
}
