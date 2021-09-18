import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { jwtService } from "./app/jwtService";
import { selectUser, setAuthorize, setRole } from "./app/slice/userSlice";
import Login from "./features/authorize/Login";
import Registration from "./features/authorize/Registration";
import AuthorizeMenu from "./features/AuthorizeMenu";
import PrivateRoute from "./features/route/PrivateRoute";
import PublicRoute from "./features/route/PublicRoute";
import Cabinet from "./features/student/Cabinet";
import StudentMenu from "./features/StudentMenu";

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    if (jwtService.get()) {
      dispatch(setAuthorize(true));
      dispatch(setRole(jwtService.getRole()));
    }
  }, [dispatch]);
  return (
    <>
      <Router>
        <Layout className="layout">
          <Header>
            {user.isAuthorize ? <StudentMenu /> : <AuthorizeMenu />}
          </Header>
          <Content style={{ padding: "20px 50px" }}>
            <Switch>
              <PrivateRoute path="/cabinet">
                <Cabinet />
              </PrivateRoute>
              <PublicRoute path="/login">
                <Login />
              </PublicRoute>
              <PublicRoute path="/registration">
                <Registration />
              </PublicRoute>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {/* Ant Design ©2018 Created by Ant UED */}
          </Footer>
        </Layout>
      </Router>
    </>
  );
};

export default App;
