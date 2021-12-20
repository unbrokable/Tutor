import { jwtService } from "../../app/jwtService";
import {
  resertUser,
  selectAuthorize,
  setAuthorize,
  setRole,
} from "../../app/slice/AuthorizeSlice";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import {
  selectNotification,
  setError,
  setMessage,
} from "../../app/slice/notificationSlice";
import { Button, Menu, notification } from "antd";
import { Redirect, useHistory } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CustomMenu = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectAuthorize);
  const notifications = useAppSelector(selectNotification);
  const history = useHistory();

  const openErrorNotification = () => {
    notification["error"]({
      message: "Error",
      description: notifications.errorMessage,
    });
    dispatch(setError(undefined));
  };

  const openNotification = () => {
    notification["success"]({
      message: "Attention",
      description: notifications.message,
    });
    dispatch(setMessage(undefined));
  };

  useEffect(() => {
    if (jwtService.get()) {
      dispatch(setAuthorize(true));
      dispatch(setRole(jwtService.getRole()));
    }
  }, [dispatch]);

  return (
    <>
      {!!notifications.errorMessage ? openErrorNotification() : null}
      {!!notifications.message ? openNotification() : null}

      <Menu theme="dark" mode="horizontal" direction="rtl">
        <Menu.Item>
          <Link style={{ fontSize: "18px" }} to="/main">
            Study all
          </Link>
        </Menu.Item>
        {jwtService.get() || state.isAuthorize ? (
          <>
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
          </>
        ) : (
          <>
            <Menu.Item>
              <Link to="/login">Log in</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/registration">Registration</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </>
  );
};

export default CustomMenu;
