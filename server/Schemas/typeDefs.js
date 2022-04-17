const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ObjectId!
        authors: [String]
        description: String!
        title: String
        image: String
        link: String
    }

    input SaveBook {
        bookId: ObjectId!
        authors: [String]
        description: String!
        title: String
        image: String
        link: String
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        me(userId: ID!): User
    }

    type Mutation {
        LOGIN_USER(email: String!, password: String!): Auth
        ADD_USER(username: String!, email: String!, password: String!): Auth
        SAVE_BOOK(input: SaveBook!): User
        REMOVE_BOOK(bookId: ObjectId!!): User
    }
`;

module.exports = typeDefs;