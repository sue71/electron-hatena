import express from 'express';
import {requireAuth} from '../middleware/auth';
import {listArticles} from '../services/article';
import {getMe} from '../services/auth';

const router = express.Router();

router.get('/me', (req, res, next) => {
  getMe(req, (err, user) => {
    if (err) {
      return next(err)
    }
    return res.status(200).json(user)
  })
});

export default router;
