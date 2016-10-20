import * as React from "react";
import {autoBindClass} from "typed-autobind-decorator";
import {Dialog} from "react-toolbox";
import {connect} from "react-redux";
import {dismissDialog} from "../../actions/app";

const styles = require("./Editor.css");

@autoBindClass
class Editor extends React.Component<any, any> {

  render() {
    const { dispatch } = this.props;
    return (
      <Dialog
        className={styles.Editor}
        onOverlayClick={dispatch(dismissDialog())}
      >
      </Dialog>
    );
  }

}

export default connect((state) => {
  return state;
})(Editor);
