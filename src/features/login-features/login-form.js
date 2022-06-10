import { Alert, Button, Divider, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "./loginSlice";
import { userData } from "./loginSlice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(selectUser);
  console.log(usersData);
  const [error, setError] = useState(false);
  const user = {
    username: "abc@gmail.com",
    password: "1234567",
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    if (
      user.username === values.username &&
      user.password === values.password
    ) {
      let data = {
        ...values,
        auth: true,
      };
      dispatch(userData(data));
      navigate("dashboard");
    } else {
      message.info("This is a normal message");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <>
      <Divider>Login</Divider>

      {error && (
        <Alert
          message="Invalid Username or password"
          type="error"
          style={{ marginBottom: "23px" }}
          showIcon
        />
      )}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please input your username!" },
            {
              message: "Invalid Email Address",
              validator: (_, value) => {
                if (regEmail.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject("Some message here");
                }
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              message: "password must be at least 7 characters",
              validator: (_, value) => {
                if (value.length > 6) return Promise.resolve();
                else {
                  return Promise.reject("Some message here");
                }
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
