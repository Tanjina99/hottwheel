import React from "react";
import { Button, Form, Input, Typography, Divider } from "antd";
import { MdEmail } from "react-icons/md";
import { GoogleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { CiLock } from "react-icons/ci";
import { RiEBikeLine } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";

const { Title } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Simulate login process
    if (
      values.email === "user@example.com" &&
      values.password === "password123"
    ) {
      toast.success("Login successful!");
      console.log("Login successful:", values);
    } else {
      toast.error("Invalid login credentials");
    }
  };

  const handleGoogleLogin = () => {
    toast.success("Logged in with Google!");
  };

  return (
    <div style={{ display: "flex", height: "100vh", margin: 0 }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eef2f7",
        }}
      >
        <div
          className="animation-box"
          style={{ width: "70%", maxWidth: "600px" }}
        >
          <video
            src="/images/animation/animation.mp4"
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
          padding: "20px",
        }}
      >
        <div
          className="login-box"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "500px",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Title level={2} style={{ fontWeight: "600", marginBottom: "15px" }}>
            Sign In
          </Title>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            Welcome Back!
            <span style={{ marginLeft: "8px" }}>
              <RiEBikeLine />
            </span>
          </p>
          <Form
            form={form}
            name="login-form"
            onFinish={onFinish}
            style={{ width: "100%" }}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
              style={{ marginBottom: "20px" }}
            >
              <Input
                placeholder="Enter your email"
                prefix={<MdEmail style={{ color: "#1890ff" }} />}
                allowClear
                style={{
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
              style={{ marginBottom: "30px" }}
            >
              <Input.Password
                placeholder="Enter your password"
                prefix={<CiLock />}
                style={{
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button-all"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                  style={{ color: "#fff" }}
                >
                  Login
                </Button>
              )}
            </Form.Item>

            <Divider>OR</Divider>

            <Button
              type="default"
              icon={<GoogleOutlined style={{ color: "#fff" }} />}
              onClick={handleGoogleLogin}
              className="button-all"
            >
              Sign in with Google
            </Button>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Typography.Text>
                Don't have an account?{" "}
                <Typography.Link href="/register">Register now</Typography.Link>
              </Typography.Text>
              <br />
              <Typography.Text>
                Forgot your password?{" "}
                <Typography.Link href="/resetpassword">
                  Reset now
                </Typography.Link>
              </Typography.Text>
            </div>
          </Form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default LoginPage;
