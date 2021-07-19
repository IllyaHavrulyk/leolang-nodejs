import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    hello: String
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
