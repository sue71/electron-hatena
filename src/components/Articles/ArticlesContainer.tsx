import * as React from "react";
import { connect } from "react-redux";
import {fetchArticles, selectArticle} from "../../actions/article";
import {Layout, Panel, Sidebar} from "react-toolbox";
import Articles from "./Articles";
import ArticleContent from "./ArticleContent";
import {autoBindClass} from "typed-autobind-decorator";

@autoBindClass
export class ArticlesContainer extends React.Component<any, any> {

  render() {
    const { article: { articles, selected } } = this.props;
    return (
      <Layout>
        <Sidebar
          pinned
        >
          sidebar
          <Articles
            articles={articles}
            onSelectArticle={this.onSelectArticle}
          />
        </Sidebar>
        <Panel>
          <ArticleContent article={selected} />
        </Panel>
      </Layout>
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
  return {
    article: state.article
  };
})(ArticlesContainer);
