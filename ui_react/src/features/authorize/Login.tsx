import { Button, Checkbox, Form, Input } from "antd";
import { Redirect } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import {
  loginThunk,
  loginWithGoogleAsync,
  selectLogin,
  setEmail,
  setPassword,
} from "../../app/slice/authorize/loginSlice";
import { selectAuthorize } from "../../app/slice/AuthorizeSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectLogin);
  const authorize = useAppSelector(selectAuthorize).isAuthorize;
  return (
    <>
      {authorize ? <Redirect to="/cabinet" /> : null}
      <Form
        style={{ paddingTop: "6em" }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={() => dispatch(loginThunk())}
        // autoComplete="off"
      >
        <Form.Item
          label="E-mail "
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
          <GoogleLogin
            clientId={
              "292451837131-7nlj2jr7q31kn1ujhiqrc6k1kvop5812.apps.googleusercontent.com"
            }
            buttonText="Google"
            onSuccess={(res) =>
              dispatch(loginWithGoogleAsync(res as GoogleLoginResponse))
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
