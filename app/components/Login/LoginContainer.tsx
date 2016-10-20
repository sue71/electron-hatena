import * as React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

const styles = require("./LoginContainer.css");

@connect((state, props) => {
  return {
    nextPathname: props.location.state && props.location.state.nextPathname
  };
})
export default class LoginContainer extends React.Component<any, any> {

  render() {
    const { nextPathname } = this.props;
    return (
      <div className={styles.LoginContainer}>
        <LoginForm redirectTo={nextPathname} />
      </div>
    );
  }

}
