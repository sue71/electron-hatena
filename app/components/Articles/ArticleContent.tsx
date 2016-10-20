import * as React from "react";
import {autoBindClass} from "typed-autobind-decorator";

const styles = require("./ArticleContent.css");

@autoBindClass
class ArticleContent extends React.Component<any, any> {

  render() {
    const { article } = this.props;
    if (!article) {
      return (
        <div>Select article</div>
      );
    }
    return (
      <div className={styles.ArticleContent}>
        <div>
          {article.title}
        </div>
        <div>
          {article.content}
        </div>
      </div>
    );
  }

}

export default ArticleContent;
