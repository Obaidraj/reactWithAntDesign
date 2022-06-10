import { Layout } from "antd";
import React from "react";
import SideBar from "../sider";
import Test from "../test";

const DashboardScreen = () => {
  return (
    <Layout>
      <SideBar>
        <Test />
      </SideBar>
    </Layout>
  );
};

export default DashboardScreen;
