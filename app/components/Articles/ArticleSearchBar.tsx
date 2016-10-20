import * as React from "react";
import {autoBindClass} from "typed-autobind-decorator";
import {Input} from "react-toolbox";
import {reduxForm} from "redux-form";
import {filterArticle} from "../../actions/article";

const styles = require("./ArticleSearchBar.css");

@autoBindClass
class ArticleSearchBar extends React.Component<any, any> {

  render() {
    const {
      fields: { searchText }
    } = this.props;

    return (
      <div className={styles.ArticleSearchBar}>
        <Input
          {...searchText}
          type="text"
          onChange={(value) => {
            searchText.onChange(value);
            this.onSubmit(value);
          }}
        />
      </div>
    );
  }

  onSubmit(value) {
    const { dispatch, fields: { searchText } } = this.props;
    if (value !== searchText.value) {
      dispatch(filterArticle(value));
    }
    if (value !== searchText.value) {
      dispatch(filterArticle(value));
    }
  }

}

export default reduxForm({
  form: "search",
  fields: ["searchText"]
})(ArticleSearchBar);
