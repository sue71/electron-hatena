import { Component } from "react";
import { Button } from 'react-toolbox';
import { autoBindClass } from 'typed-autobind-decorator';

const styles = require("./AppHeader.css");

@autoBindClass
export default class AppHeader extends Component<any, any> {

  render() {
    let { isOpenEditor } = this.props
    let icon = isOpenEditor ? "add" : "close";
    let primaryHandler = isOpenEditor ? this.props.onClickClose : this.props.onClickAdd
    return (
      <div className={styles.AppHeader}>
        <Button icon={icon} floating accent onClick={primaryHandler} />
      </div>
    );
  }

}
