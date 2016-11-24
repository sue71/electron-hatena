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

export function getMe(req, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return next(new Error("invalid_token"))
  }

  jwt.verify(token, req.app.get('secret'), function (err, decoded) {
    if (err) {
      return next(new Error("invalid_token"))
    }
    next(null, decoded);
  });
}
