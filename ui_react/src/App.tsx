import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./features/authorize/Login";
import Registration from "./features/authorize/Registration";
import MainPage from "./features/MainPage";
import CustomMenu from "./features/menu/Menu";
import PrivateRoute from "./features/route/PrivateRoute";
import PublicRoute from "./features/route/PublicRoute";
import CustomSider from "./features/Sider/CustomSider";
import Cabinet from "./features/Cabinet";
import AnnouncementCreate from "./features/tutor/AnnouncementCreate";
import Announcements from "./features/tutor/Announcements";
import CustomFooter from "./features/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Layout className="layout">
          <Header>
            <CustomMenu />
          </Header>
          <Layout style={{ minHeight: "500px" }}>
            {<CustomSider />}

            <Content
              style={{
                padding: "20px 50px",
                backgroundColor: "orange",
              }}
            >
              <Switch>
                <PublicRoute path="/main">
                  <MainPage />
                </PublicRoute>
                <PrivateRoute path="/cabinet">
                  <Cabinet />
                </PrivateRoute>
                <PublicRoute path="/login">
                  <Login />
                </PublicRoute>
                <PrivateRoute path="/announcement">
                  <Announcements />
                </PrivateRoute>
                <PrivateRoute path="/announcementadd">
                  <AnnouncementCreate />
                </PrivateRoute>
                <PrivateRoute path="/changepassword">
                  Password reset
                </PrivateRoute>
                <PublicRoute path="/registration">
                  <Registration />
                </PublicRoute>
              </Switch>
            </Content>
          </Layout>
          <Footer
            style={{
              backgroundColor: "black",
            }}
          >
            <CustomFooter />
          </Footer>
        </Layout>
      </Router>
    </>
  );
};

export default App;
