import { gql } from 'apollo-server-express';

import { typeDefs as mainTypeDefs, resolvers as mainResolvers } from './schemas/main';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
  type Mutation {
    _empty: Boolean
  }
`;

export const typeDefs = [rootTypeDefs, mainTypeDefs];
export const resolvers = [mainResolvers];
