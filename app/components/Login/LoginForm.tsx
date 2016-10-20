import * as React from "react";
import {Input, Card, Button} from "react-toolbox";
import {reduxForm} from "redux-form";
import {login} from "../../actions/auth";
import {autoBindClass} from "typed-autobind-decorator";

const styles = require("./LoginForm.css");

@autoBindClass
class LoginForm extends React.Component<any, any> {

  render() {
    const {
      handleSubmit,
      fields: {username, blogId, apiKey}
    } = this.props;
    return (
      <Card className={styles.LoginForm}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Input type="text" {...username} />
          <Input type="text" {...blogId} />
          <Input type="password" {...apiKey} />
          <Button label="Login" />
        </form>
      </Card>
    );
  }

  onSubmit(data) {
    const { dispatch, redirectTo } = this.props;
    dispatch(login({
      username: data.username,
      blogId: data.blogId,
      apiKey: data.apiKey
    }, redirectTo));
  }

}

export default reduxForm({
  form: "login",
  fields: ["username", "blogId", "apiKey"]
})(LoginForm);
