import { Component } from "react";

const styles = require("./AppContainer.css");

export default class AppContainer extends Component<any, any> {

  render() {
    return (
      <div className={styles.AppContainer}>
        {this.props.children}
      </div>
    );
  }

}

