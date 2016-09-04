import jwt from 'jsonwebtoken';

/**
 * requireAuth is middleware for checking user has already signed in or not
 * @param req
 * @param res
 * @param next
 */
export function requireAuth(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send();
  }

  jwt.verify(token, req.app.get('secret'), function (err, decoded) {
    if (err) {
      return res.status(401).send();
    }
    req.user = decoded;
    next();
  });
}
