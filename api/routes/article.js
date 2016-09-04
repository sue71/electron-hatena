import express from 'express';
import {requireAuth} from '../middleware/auth';
import {listArticles} from '../services/article';

const router = express.Router();

router.use(requireAuth);
router.get('', (req, res, next) => {
  return listArticles(req.user, {}, (err, articles) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      list: articles
    });
  });
});

export default router;
