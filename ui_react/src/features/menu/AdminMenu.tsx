import { Button, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { jwtService } from "../../app/jwtService";
import { resertUser } from "../../app/slice/AuthorizeSlice";
const AdminMenu = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <>
      <Menu theme="dark" mode="horizontal" direction="rtl">
        <Menu.Item>
          <Link to="/admin/rates">Users</Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Item>
            <Button
              type="text"
              style={{ color: "white" }}
              onClick={() => {
                jwtService.remove();
                dispatch(resertUser());
                history.push("/login");
              }}
            >
              Log out
            </Button>
          </Menu.Item>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default AdminMenu;
