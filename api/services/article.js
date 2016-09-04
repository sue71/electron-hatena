import blog from 'hatena-blog-api';

export function listArticles(user, options, next) {
  const client = blog(user);

  client.index(options, (err, res) => {
    if (err) {
      return next(err);
    }
    return next(null, res.feed.entry.map(toArticle));
  });
}

export function syncArticles(article) {
  // TODO: sync articles
}

export function saveArticle(article) {
  // TODO: save article
}

function toArticle(entry, index) {
  return {
    id: entry.id._,
    title: entry.title._,
    content: entry.content._,
    draft: entry['app:control']['app:draft']._ === 'yes'
  };
}
