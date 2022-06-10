import { Col, Row } from "antd";
import React from "react";
import LoginForm from "../../features/login-features/login-form";
import "./styles.css";
const LoginScreen = () => {
  return (
    <div className="main">
      <Row
        justify="center"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="column">
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;
