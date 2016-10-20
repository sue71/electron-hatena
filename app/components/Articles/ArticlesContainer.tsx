import * as React from "react";
import { connect } from "react-redux";
import {fetchArticles, selectArticle} from "../../actions/article";
import {Layout, Panel, Sidebar} from "react-toolbox";
import Articles from "./Articles";
import ArticleContent from "./ArticleContent";
import ArticleSearchBar from "./ArticleSearchBar";
import {autoBindClass} from "typed-autobind-decorator";

@autoBindClass
export class ArticlesContainer extends React.Component<any, any> {

  render() {
    const { articles, selected } = this.props;
    return (
      <div>
        <Layout>
          <Sidebar
            pinned
          >
            <ArticleSearchBar />
            <Articles
              articles={articles}
              onSelectArticle={this.onSelectArticle}
            />
          </Sidebar>
          <Panel>
            <ArticleContent article={selected} />
          </Panel>
        </Layout>
      </div>
    );
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  onSelectArticle(article: Article) {
    const { dispatch } = this.props;
    dispatch(selectArticle(article));
  }

}

export default connect((state, props) => {
  const articleState = state.article,
    selected = articleState.selected,
    searchText = articleState.searchText,
    articles = articleState.articles;

  const filtered = searchText.length > 0 ?
    articles.filter(article => !!article.title.match(new RegExp(`^.*${searchText}.*$`))) :
    articles;

  return {
    articles: filtered,
    selected: selected
  };

})(ArticlesContainer);
