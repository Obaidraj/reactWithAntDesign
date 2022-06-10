import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import SideBar from "../sider";
import { Button, Card, Divider, Layout, Modal, Row, Tooltip } from "antd";
import { getUsers, userList } from "../../features/users/userSlice";
import {
  EditOutlined,
  EllipsisOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const AboutScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserdata] = useState({});
  const dispatch = useDispatch();
  const { users } = useSelector(userList);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const readMoreData = async (user) => {
    console.log(user);
    setUserdata({ ...user });
    setIsModalVisible(true);
    console.log(userData);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout>
      <SideBar>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: "white ",
            overflowY: "auto",
          }}
        >
          <Divider>Data From Api </Divider>
          <Row>
            {users &&
              users.map((user) => (
                <div className="site-card-border-less-wrapper">
                  <Card
                    title={user.name}
                    bordered={true}
                    style={{ width: 300, margin: "5px" }}
                    actions={[
                      <Tooltip title=" Working" color={"green"} key={"green"}>
                        <ProfileOutlined
                          key="readMore"
                          onClick={() => readMoreData(user)}
                        />
                      </Tooltip>,
                      <Tooltip title="Not Working" color={"red"} key={"red"}>
                        <EditOutlined key="edit" />
                      </Tooltip>,
                      <Tooltip title="Not Working" color={"red"} key={"red"}>
                        <EllipsisOutlined key="ellipsis" />
                      </Tooltip>,
                    ]}
                  >
                    <p>User Name: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>website: {user.website}</p>
                  </Card>
                </div>
              ))}
          </Row>
        </Content>
      </SideBar>
      <Modal
        title="More Info "
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <p> Name: {userData.name}</p>
        <p>User Name: {userData.username}</p>
        <p>Website Name: {userData.website}</p>
        <p>phone : {userData.phone}</p>
        <p>company : {userData.company.name}</p>
        <p>company : {userData.address.city}</p>
      </Modal>
    </Layout>
  );
};

export default AboutScreen;
