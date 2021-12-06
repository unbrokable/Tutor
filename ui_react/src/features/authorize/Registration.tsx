import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Form, Input, Button, Select } from "antd";
import {
  registrateThunk,
  selectRegistration,
  setRegistrationConfirmPassword,
  setRegistrationEmail,
  setRegistrationGender,
  setRegistrationLastName,
  setRegistrationName,
  setRegistrationPassword,
  setRegistrationPhone,
  setRegistrationRole,
} from "../../app/slice/authorize/registrationSlice";
import Password from "antd/lib/input/Password";
import { Redirect } from "react-router";
import { RoleType, selectAuthorize } from "../../app/slice/AuthorizeSlice";

const { Option } = Select;
const Registration = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectRegistration);
  const authorize = useAppSelector(selectAuthorize).isAuthorize;
  return (
    <>
      {authorize ? <Redirect to="/cabinet" /> : null}
      <h3>Registration new cabinet</h3>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
        onFinish={() => dispatch(registrateThunk())}
      >
        <Form.Item name="name" label="First Name" rules={[{ required: true }]}>
          <Input
            value={state.firstName}
            onChange={(e) => dispatch(setRegistrationName(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input
            value={state.lastName}
            onChange={(e) => dispatch(setRegistrationLastName(e.target.value))}
          />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            value={state.gender}
            placeholder="Select"
            onChange={(e) => dispatch(setRegistrationGender(e))}
          >
            <Option value={"Man"}>Man</Option>
            <Option value={"Woman"}>Woman</Option>
          </Select>
        </Form.Item>
        <Form.Item name="email" label="E-mail" rules={[{ required: true }]}>
          <Input
            value={state.email}
            onChange={(e) => dispatch(setRegistrationEmail(e.target.value))}
          />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input
            value={state.phone}
            onChange={(e) => dispatch(setRegistrationPhone(e.target.value))}
          />
        </Form.Item>
        <Form.Item name="role" label="Register as" rules={[{ required: true }]}>
          <Select
            value={state.role}
            placeholder="Select"
            onChange={(e) => dispatch(setRegistrationRole(e))}
          >
            <Option value={RoleType.Student}>
              {RoleType[RoleType.Student]}
            </Option>
            <Option value={RoleType.Teacher}>
              {RoleType[RoleType.Teacher]}
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Password
            value={state.password}
            onChange={(e) => dispatch(setRegistrationPassword(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Password
            value={state.confirmPassword}
            onChange={(e) =>
              dispatch(setRegistrationConfirmPassword(e.target.value))
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Registration;
