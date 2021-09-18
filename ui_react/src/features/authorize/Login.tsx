import { Button, Checkbox, Form, Input } from "antd";
import { Redirect } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  loginThunk,
  selectLogin,
  setEmail,
  setPassword,
} from "../../app/slice/authorize/loginSlice";
import { selectUser } from "../../app/slice/userSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectLogin);
  const authorize = useAppSelector(selectUser).isAuthorize;
  return (
    <>
      {authorize ? <Redirect to="/cabinet" /> : null}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={() => dispatch(loginThunk())}
        // autoComplete="off"
      >
        <Form.Item
          label="Email "
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            value={state.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={state.password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
