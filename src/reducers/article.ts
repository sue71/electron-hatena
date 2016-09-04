import {ArticleActionType} from "../actions/article";

export interface ArticleState {
  articles: Article[];
  selected: Article;
}

export default function articles(state: ArticleState, action: any): ArticleState {
  switch (action.type) {
    case ArticleActionType.FETCH_ARTICLES_SUCCESS:
      return {
        articles: action.articles,
        selected: action.articles[0]
      };
    case ArticleActionType.SELECT_ARTICLE:
      return {
        articles: state.articles,
        selected: action.article
      };
    case ArticleActionType.SAVE_ARTICLES_SUCCESS:
      // TODO
      return state;
    case ArticleActionType.REMOVE_ARTICLES_SUCCESS:
      // TODO
      return state;
    default:
      return {
        articles: [],
        selected: null
      };
  }
}
