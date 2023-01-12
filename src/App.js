import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import "./App.css";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UnorderedListOutlined,
  FormOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import Routes from "./routes/Croutes.js";

const { Header, Content } = Layout;

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    document.title = "Todo App";
  }, []);

  return (
    <>
      <Layout>
        <Header
          className="site-layout-header"
          style={{
            padding: 0,
          }}
        >
          <Menu
            className="menu"
            mode="horizontal"
            defaultSelectedKeys={["/todos"]}
            selectedKeys={[pathname]}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="/todos" icon={<UnorderedListOutlined />}>
              <Link to="/todos">ALL TODO</Link>
            </Menu.Item>
            <Menu.Item key="/todos/input" icon={<FormOutlined />}>
              <Link to="/todos/input">ADD TODO</Link>
            </Menu.Item>
            <Menu.Item key="/todos/timeline" icon={<FieldTimeOutlined />}>
              <Link to="/todos/timeline">Timeline</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout-content"
          style={{
            // margin: "24px 16px",
            // padding: 24,
            height: "90vh",
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </>
  );
}

export default App;
