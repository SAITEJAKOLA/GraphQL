const { gql } = require('apollo-server');

//Scalar types - String, Int, Float, Boolean, ID
//if you just declare type as string it means string/null to have strict typing of string declare "String!"
const typeDefs = gql`
    type Query {
        hello: String!
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category]!
        category(id: ID!): Category
        reviews: [Review!]!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category
        reviews: [Review]!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    } 

    type Review {
        id: ID!
        date: String!
        rating: Int!
        title: String!
        comment: String!
    }
`;

module.exports = typeDefs;
