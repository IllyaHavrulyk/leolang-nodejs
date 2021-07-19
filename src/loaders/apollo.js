import server from '../graphql/index';

async function ApolloLoader(app) {
  await server.start();
  server.applyMiddleware({ app });
}

export default ApolloLoader;
