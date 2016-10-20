import { Component } from "react";
import { connect } from "react-redux";
import Editor from "../Editor/Editor";
import AppHeader from "./AppHeader";
import {showDialog} from "../../actions/app";
import {autoBindClass} from "typed-autobind-decorator";

const styles = require("./AppContainer.css");

@autoBindClass
export class AppContainer extends Component<any, any> {

  render() {
    return (
      <div className={styles.AppContainer}>
        {this.renderDialog()}
        <AppHeader
          onClickAdd={this.onClickAdd}
        />
        {this.props.children}
      </div>
    );
  }

  renderDialog() {
    const { app: { dialog } } = this.props;

    switch (dialog) {
      case "Editor":
        return <Editor />;
    }
  }

  onClickAdd() {
    const { dispatch } = this.props;
    dispatch(showDialog("Editor"));
  }

}


export default connect((state) => {
  return {
    app: state.app
  };
})(AppContainer);
