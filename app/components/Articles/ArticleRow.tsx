import * as React from "react";
import {autoBindClass} from "typed-autobind-decorator";

const styles = require("./ArticleRow.css");

@autoBindClass
class ArticleRow extends React.Component<any, any> {

  render() {
    const { article } = this.props;
    return (
      <div className={styles.ArticleRow} onClick={this.props.onClick}>
        <div>{article.title}</div>
        <div>{article.content}</div>
      </div>
    );
  }

}

export default ArticleRow;
