import { jwtService } from "../../app/jwtService";
import {
  RoleType,
  selectAuthorize,
  setAuthorize,
  setRole,
} from "../../app/slice/AuthorizeSlice";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import AuthorizeMenu from "./AuthorizeMenu";
import {
  selectNotification,
  setError,
  setMessage,
} from "../../app/slice/notificationSlice";
import { notification } from "antd";
import { Redirect } from "react-router";
import AdminMenu from "./AdminMenu";
import StudentMenu from "./StudentMenu";
import TutorMenu from "./TutorMenu";
import { useEffect } from "react";

const Menu = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectAuthorize);
  const notifications = useAppSelector(selectNotification);

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
      {state.isAuthorize ? null : <Redirect to="/login" />}
      {!!notifications.errorMessage ? openErrorNotification() : null}
      {!!notifications.message ? openNotification() : null}
      {jwtService.get() || state.isAuthorize ? (
        state.role === RoleType[RoleType.Admin] ? (
          <AdminMenu />
        ) : state.role === RoleType[RoleType.Student] ? (
          <StudentMenu />
        ) : (
          <TutorMenu />
        )
      ) : (
        <AuthorizeMenu />
      )}
    </>
  );
};

export default Menu;
