const { ApolloServer, gql } = require('apollo-server');

//Scalar types - String, Int, Float, Boolean, ID
//if you just declare type as string it means string/null to have strict typing of string declare "String!"
//
const typeDefs = gql`
    type Query {
        hello: String! 
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        arrayOfStrings: [String!]!
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return 'World!!';
        },
        numberOfAnimals: ()=>{
            return 10;
        },
        price: ()=>{
            return 100.50;
        },
        isCool:()=>{
            return true;
        },
        arrayOfStrings: ()=>{
            return ['Hellow', "World", "Earth"];
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Apollo Server is ready at ${url} !!`);
});
