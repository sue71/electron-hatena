import Blog from 'hatena-blog-api';
import jwt from 'jsonwebtoken';

export function login(user, secret, next) {
  const client = new Blog(user);

  client.index({}, (err, res) => {
    if (err) {
      err.status = err.status || 401;
      return next(err);
    }

    const token = jwt.sign(user, secret, {
      expiresIn: 60 * 60 * 24
    });

    return next(null, token);
  });

}
