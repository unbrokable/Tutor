import { Menu } from "antd";
import { Link } from "react-router-dom";
const AuthorizeMenu = () => {
  return (
    <>
      <Menu theme="dark" mode="horizontal" direction="rtl">
        <Menu.Item>
          <Link to="/login">Log in</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/registration">Registration</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default AuthorizeMenu;
