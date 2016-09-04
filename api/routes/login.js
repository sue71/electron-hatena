import express from 'express';
import {login} from '../services/auth';

const router = express.Router();

router.post('/login', (req, res, next) => {
  const { username, blogId, apiKey } = req.body;

  // TODO: validate
  login({ username, blogId, apiKey }, req.app.get('secret'), (err, jwt) => {
    if (err) {
      return next(err);
    }

    return res.json({
      username: username,
      blogId: blogId,
      token: jwt
    })
  });
});

export default router;
