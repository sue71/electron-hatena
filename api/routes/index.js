import login from './login';
import article from './article';

export default function routes(app) {
  // setup login router
  app.use(login);
  // setup articles router
  app.use('/articles', article);
}
