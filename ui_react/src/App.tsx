import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./features/authorize/Login";
import Registration from "./features/authorize/Registration";
import Menu from "./features/menu/Menu";
import PrivateRoute from "./features/route/PrivateRoute";
import PublicRoute from "./features/route/PublicRoute";
import Cabinet from "./features/student/Cabinet";

const App = () => {
  return (
    <>
      <Router>
        <Layout className="layout">
          <Header>
            <Menu />
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
