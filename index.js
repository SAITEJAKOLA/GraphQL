const { ApolloServer } = require('apollo-server');
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const productFromFile = require('./Sources/Products');
const categoriesFromFile = require('./Sources/Categories');
const typeDefs = require("./schema");

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Product,
        Category
    },
    context:{
        productFromFile,
        categoriesFromFile
    }
});

server.listen().then(({ url }) => {
    console.log(`Apollo Server is ready at ${url} !!`);
});
