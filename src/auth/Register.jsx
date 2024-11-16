import React from "react";
import { Button, Typography, Divider } from "antd";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { GoogleOutlined } from "@ant-design/icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

const { Title } = Typography;

const Register = () => {
  const initialValues = {
    fullName: "",
    imageUrl: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Full Name is required"),
    imageUrl: Yup.string().url("Must be a valid URL").nullable(),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const onSubmit = (values) => {
    console.log("Registration successful:", values);
    toast.success("Registration successful!");
  };

  const handleGoogleRegister = () => {
    toast.success("Registered with Google!");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ display: "flex", flex: 1 }}>
        {/* Animation Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eef2f7",
          }}
        >
          <div style={{ width: "80%", maxWidth: "600px" }}>
            <video
              src="/images/animation/animation.mp4"
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                borderRadius: "8px",
                background: "white",
              }}
            />
          </div>
        </div>

        {/* Form Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Title
              level={2}
              style={{ fontWeight: "600", marginBottom: "20px" }}
            >
              Register
            </Title>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isValid }) => (
                <Form style={{ width: "100%" }}>
                  {/* Full Name Field */}
                  <div style={{ marginBottom: "15px" }}>
                    <Field
                      name="fullName"
                      placeholder="Full Name"
                      className="ant-input"
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      style={{ color: "red", marginTop: "5px" }}
                    />
                  </div>

                  {/* Image URL Field */}
                  <div style={{ marginBottom: "15px" }}>
                    <Field
                      name="imageUrl"
                      placeholder="Profile Picture URL (optional)"
                      className="ant-input"
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <ErrorMessage
                      name="imageUrl"
                      component="div"
                      style={{ color: "red", marginTop: "5px" }}
                    />
                  </div>

                  {/* Email Field */}
                  <div style={{ marginBottom: "15px" }}>
                    <Field
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      className="ant-input"
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red", marginTop: "5px" }}
                    />
                  </div>

                  {/* Password Field */}
                  <div style={{ marginBottom: "15px" }}>
                    <Field
                      name="password"
                      placeholder="Enter your password"
                      type="password"
                      className="ant-input"
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red", marginTop: "5px" }}
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div style={{ marginBottom: "15px" }}>
                    <Field
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      type="password"
                      className="ant-input"
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      style={{ color: "red", marginTop: "5px" }}
                    />
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isValid}
                    className="button-all"
                    style={{
                      color: "#fff",
                      marginTop: "3px",
                    }}
                  >
                    Register
                  </Button>

                  <Divider>OR</Divider>

                  <Button
                    type="default"
                    icon={<GoogleOutlined style={{ color: "#fff" }} />}
                    onClick={handleGoogleRegister}
                    className="button-all"
                    style={{
                      color: "#fff",
                    }}
                  >
                    Register with Google
                  </Button>
                </Form>
              )}
            </Formik>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Typography.Text>
                Already have an account?{" "}
                <Typography.Link href="/login">Login now</Typography.Link>
              </Typography.Text>
            </div>
          </div>
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

export default Register;
