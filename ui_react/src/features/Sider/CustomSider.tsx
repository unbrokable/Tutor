import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useAppSelector } from "../../app/hooks";
import { RoleType, selectAuthorize } from "../../app/slice/AuthorizeSlice";
import { jwtService } from "../../app/jwtService";
import { Link } from "react-router-dom";

const CustomSider = () => {
  const state = useAppSelector(selectAuthorize);
  return (
    <>
      {jwtService.get() || state.isAuthorize ? (
        state.role === RoleType[RoleType.Admin] ? null : (
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
                backgroundColor: "#fc8003",
              }}
            >
              <Menu.Item key="1">
                <Link to="/cabinet">About Me</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/orders">Orders</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/scedule">Schedule</Link>
              </Menu.Item>
              {state.role === RoleType[RoleType.Student] ? (
                <>
                  <Menu.Item key="4">
                    <Link to="/find">Find Lessons</Link>
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="4">
                    <Link to="/announcement">Announcements</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/forms">Feedback</Link>
                  </Menu.Item>
                </>
              )}
              <Menu.Item key="6">
                <Link to="/changepassword">Change Password</Link>
              </Menu.Item>
            </Menu>
          </Sider>
        )
      ) : null}
    </>
  );
};

export default CustomSider;
