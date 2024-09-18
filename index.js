const { ApolloServer } = require('apollo-server');
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const productFromFile = require('./Sources/Products');
const categoriesFromFile = require('./Sources/Categories');
const reviewsFromFile = require("./Sources/Review")
const typeDefs = require("./schema");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category,
        Mutation
    },
    context: {
        productFromFile,
        categoriesFromFile,
        reviewsFromFile
    }
});

server.listen().then(({ url }) => {
    console.log(`Apollo Server is ready at ${url} !!`);
});
