import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Form, Input, Button, Select } from "antd";
import {
  registrateThunk,
  selectRegistration,
  setRegistrationEmail,
  setRegistrationName,
  setRegistrationPassword,
  setRegistrationRole,
} from "../../app/slice/authorize/registrationSlice";
import { RoleType, selectUser } from "../../app/slice/userSlice";
import Password from "antd/lib/input/Password";
import { Redirect } from "react-router";

const { Option } = Select;
const Registration = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectRegistration);
  const authorize = useAppSelector(selectUser).isAuthorize;
  return (
    <>
      {authorize ? <Redirect to="/cabinet" /> : null}
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
        onFinish={() => dispatch(registrateThunk())}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input
            value={state.name}
            onChange={(e) => dispatch(setRegistrationName(e.target.value))}
          />
        </Form.Item>
        <Form.Item name="email" label="E-mail" rules={[{ required: true }]}>
          <Input
            value={state.email}
            onChange={(e) => dispatch(setRegistrationEmail(e.target.value))}
          />
        </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
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
        <Form.Item label="Password">
          <Password
            value={state.password}
            onChange={(e) => dispatch(setRegistrationPassword(e.target.value))}
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
