import { Component } from "react";
import {IconButton} from "react-toolbox";

const styles = require("./AppHeader.css");

export default class AppHeader extends Component<any, any> {

  render() {
    return (
      <div className={styles.AppHeader}>
        <IconButton icon="add" onClick={this.props.onClickAdd}/>
      </div>
    );
  }

}
