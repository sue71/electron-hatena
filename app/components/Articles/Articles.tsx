import * as React from "react";
import {autoBindClass} from "typed-autobind-decorator";
import ArticleRow from "./ArticleRow";

const styles = require("./Articles.css");

@autoBindClass
class Articles extends React.Component<any, any> {

  render() {
    return (
      <div className={styles.Articles}>
        {this.renderArticles()}
      </div>
    );
  }

  renderArticles() {
    const { articles } = this.props;

    return articles.map( article => {
      return <ArticleRow
        article={article}
        onClick={(e) => this.onSelectArticle(article)}
      />;
    });
  }

  onSelectArticle(article) {
    this.props.onSelectArticle(article);
  }

}

export default Articles;
