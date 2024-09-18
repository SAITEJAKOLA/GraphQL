const { gql } = require('apollo-server');

//Scalar types - String, Int, Float, Boolean, ID
//if you just declare type as string it means string/null to have strict typing of string declare "String!"
const typeDefs = gql`
    type Query {
        hello: String!
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category]!
        category(id: ID!): Category
        reviews: [Review!]!
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!): Product!
        addReview(input: AddReviewInput!): Review!    
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
        products(filter: ProductsFilterInput): [Product!]!
    } 

    type Review {
        id: ID!
        date: String!
        rating: Int!
        title: String!
        comment: String!
    }

    input ProductsFilterInput {
        onSale: Boolean
        rating: Int
    }

    input AddCategoryInput {
        name: String!
    }

    input AddProductInput {
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: String
    }

    input AddReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

`;

module.exports = typeDefs;
