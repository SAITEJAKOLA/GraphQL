
exports.Query = {
    hello: () => {
        return 'Hello World!!';
    },
    products: (parent, args, { productFromFile, reviewsFromFile }) => {
        let { onSale, rating } = args
        console.log(args);
        let filteredProducts = productFromFile;
        if (args) {
            if (onSale === true) {
                filteredProducts = filteredProducts.filter((products) => products.onSale === true);
            }
            if ([1, 2, 3, 4, 5].includes(rating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let noOfReviews = 0;
                    reviewsFromFile.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating
                            noOfReviews++
                        }
                    });
                    var avgRating = Math.floor(sumRating / noOfReviews);
                    return avgRating >= rating;
                }
                )
            }
            return filteredProducts;
        }
        return filteredProducts;
    },
    product: (parent, args, context) => {
        const { id } = args;
        const { productFromFile } = context
        return productFromFile.find((product) => product.id === Number(id));
    },
    categories: (parent, args, { categoriesFromFile }) => categoriesFromFile,
    category: (parent, args, context) => {
        const { id } = args;
        const { categoriesFromFile } = context
        return categoriesFromFile.find((cat) => cat.id === id);
    },
    reviews: (parent, args, { reviewsFromFile }) => reviewsFromFile
}