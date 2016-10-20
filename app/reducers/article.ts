import {ArticleActionType} from "../actions/article";
import { assign } from "lodash";

export interface ArticleState {
  articles: Article[];
  selected: Article;
  searchText: string;
}

const initialState = {
  articles: [],
  selected: null,
  searchText: ""
}

export default function articles(state: ArticleState = initialState, action: any): ArticleState {
  switch (action.type) {
    case ArticleActionType.FETCH_ARTICLES_SUCCESS:
      return assign({}, state, {
        articles: action.articles,
        selected: action.articles[0]
      });
    case ArticleActionType.SELECT_ARTICLE:
      return assign({}, state, {
        selected: action.article
      });
    case ArticleActionType.FILTER_ARTICLES:
      return assign({}, state, {
        searchText: action.searchText
      });
    case ArticleActionType.SAVE_ARTICLES_SUCCESS:
      // TODO
      return state;
    case ArticleActionType.REMOVE_ARTICLES_SUCCESS:
      // TODO
      return state;
    default:
      return state;
  }
}
