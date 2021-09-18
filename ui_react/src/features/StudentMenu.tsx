import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { jwtService } from "../app/jwtService";
import { resertUser } from "../app/slice/userSlice";

const StudentMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Menu theme="dark" mode="horizontal" direction="ltr">
        <Menu.Item>
          <Link to="/cabinet">About Me</Link>
        </Menu.Item>
        <Menu.Item>
          <Button
            type="text"
            style={{ color: "white" }}
            onClick={() => {
              jwtService.remove();
              dispatch(resertUser());
            }}
          >
            Log out
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default StudentMenu;
