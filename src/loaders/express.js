import mainRoutes from '../express/routes/routes';

export default function ExpressLoader(app) {
  mainRoutes(app);
}
