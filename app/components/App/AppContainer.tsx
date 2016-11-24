import { Component } from "react";
import { connect } from "react-redux";
import { showEditor, dismissEditor } from '../../actions/app';
import { autoBindClass } from "typed-autobind-decorator";
import { AppState } from '../../reducers/app';
import { AuthState } from '../../reducers/auth';

import AppHeader from "./AppHeader";
import Editor from "../Editor/Editor";

const styles = require("./AppContainer.css");

@autoBindClass
export class AppContainer extends Component<any, any> {

  render() {
    debugger
    const { auth } = this.props
    const header = auth.me ? <AppHeader onClickAdd={this.onClickAdd} onClickClose={this.onClickClose} /> : null;
    return (
      <div className={styles.AppContainer}>
        {header}
        {this.props.children}
      </div>
    );
  }

  onClickAdd() {
    const { dispatch } = this.props;
    dispatch(showEditor())
  }

  onClickClose() {
    const { dispatch } = this.props;
    dispatch(dismissEditor())
  }

}

export default connect((state) => {
  return {
    app: state.app,
    auth: state.auth
  };
})(AppContainer);
