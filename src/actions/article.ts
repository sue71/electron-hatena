import {showLoading, dismissLoading} from "./loading";
import client from "../services/APIClient";
import {createAPIError} from "./error";
import {Endpoints} from "../constants/Endpoints";

export class ArticleActionType {
  static FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST";
  static FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
  static FETCH_ARTICLES_FAILED = "FETCH_ARTICLES_FAILED";

  static SELECT_ARTICLE = "SELECT_ARTICLE";

  static SAVE_ARTICLES_REQUEST = "SAVE_ARTICLES_REQUEST";
  static SAVE_ARTICLES_SUCCESS = "SAVE_ARTICLES_SUCCESS";
  static SAVE_ARTICLES_FAILED = "SAVE_ARTICLES_FAILED";

  static REMOVE_ARTICLES_REQUEST = "REMOVE_ARTICLES_REQUEST";
  static REMOVE_ARTICLES_SUCCESS = "REMOVE_ARTICLES_SUCCESS";
  static REMOVE_ARTICLES_FAILED = "REMOVE_ARTICLES_FAILED";
}

export function receiveArticles(articles: Article[]) {
  return {
    type: ArticleActionType.FETCH_ARTICLES_SUCCESS,
    articles: articles
  };
}

export function selectArticle(article: Article) {
  return {
    type: ArticleActionType.SELECT_ARTICLE,
    article: article
  };
}

export function fetchArticles() {
  return (dispatch) => {

    showLoading();

    client
      .get<ListResponse<Article>>(Endpoints.ARTICLES)
      .then(res => res.data)
      .then(data => dispatch(receiveArticles(data.list)))
      .then(() => dismissLoading())
      .catch(err => createAPIError(err))
    ;

  };
}

export function saveArticle() {
}

export function publishArticle() {
}

export function removeArticle() {
}
