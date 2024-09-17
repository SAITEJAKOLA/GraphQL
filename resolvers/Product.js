const reviews = require("../Sources/Review");

exports.Product = {
    category: (parent, args, { categoriesFromFile }) => {
        const categoryId = parent.categoryId;
        return categoriesFromFile.find((cat) => cat.id === categoryId);
    },
    reviews: ({ id }, args, { reviewsFromFile }) => {
        return reviewsFromFile.filter((review) => review.productId === Number(id));
    }
}