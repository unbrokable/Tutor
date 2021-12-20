import { Form, Input, Modal, Select } from "antd";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addUserThunk,
  selectUserAdd,
  setUserAddEmail,
  setUserAddName,
  setUserAddPassword,
  setUserAddRole,
} from "../../app/slice/admin/userAddSlice";
import { RoleType } from "../../app/slice/AuthorizeSlice";
const { Option } = Select;
const UserAdd = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectUserAdd);
  const history = useHistory();
  return (
    <>
      <Modal
        title=""
        visible={true}
        onOk={() => {
          dispatch(addUserThunk());
          history.goBack();
        }}
        onCancel={() => history.goBack()}
      >
        <Form.Item label="Email" name="email">
          <Input
            value={state.email}
            onChange={(e) => dispatch(setUserAddEmail(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="First name" name="name">
          <Input
            value={state.firstName}
            onChange={(e) => dispatch(setUserAddName(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input
            value={state.password}
            onChange={(e) => dispatch(setUserAddPassword(e.target.value))}
          />
        </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
          <Select
            value={state.role}
            placeholder="Enter role"
            onChange={(e) => dispatch(setUserAddRole(e))}
          >
            <Option value={RoleType.Student}>
              {RoleType[RoleType.Student]}
            </Option>
            <Option value={RoleType.Teacher}>
              {RoleType[RoleType.Teacher]}
            </Option>
            <Option value={RoleType.Admin}>{RoleType[RoleType.Admin]}</Option>
          </Select>
        </Form.Item>
      </Modal>
    </>
  );
};

export default UserAdd;
