import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  FileOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, DatePicker, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/login-features/loginSlice";

const { Header, Sider, Content } = Layout;

const SideBar = (props) => {
  let dispatch = useDispatch();
  let user = useSelector(selectUser);
  const [collapsed, setCollapsed] = useState(false);
  const logout = () => {
    let data = {};
    dispatch(data);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2
            style={{ color: "white", fontSize: "30px", fontWeight: "bolder" }}
          >
            Logo
          </h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item icon={<DesktopOutlined />} key={"Home"}>
            <Link to="/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FileOutlined />} key={"about"}>
            <Link to="/about"> About</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<LogoutOutlined />} onClick={() => logout()}>
            <Link to="/"> Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "white" }}
        >
          <Row>
            <Col span={2}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Col>
            <Col span={22}>
              <Row justify="end">
                <Col style={{ paddingRight: "15px" }}>
                  <Avatar size={40}>USER</Avatar>

                  <span> {user.username}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        {props.children}
      </Layout>
    </Layout>
  );
};

export default SideBar;
