import ApolloLoader from './apollo';
import ExpressLoader from './express';

export default async function RootLoader(app) {
  ApolloLoader(app);
  ExpressLoader(app);
}
