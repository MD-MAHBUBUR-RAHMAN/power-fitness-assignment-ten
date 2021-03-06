import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogIn from "../Social/SocialLogIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }

  const navigate = useNavigate();
  const location = useLocation();
  let form = location.state?.from?.pathname || "/";
  if (user) {
    navigate(form, { replace: true });
  }

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("enter your email address");
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <h3 className="text-center text-success mt-5">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5 text-secondary">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onBlur={(event) => setEmail(event.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold fs-5 text-secondary">
            Password
          </Form.Label>
          <Form.Control
            onBlur={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          Forget Password?
          <button className="text-primary btn btn-link" onClick={resetPassword}>
            Reset Password
          </button>
        </p>
        <Button
          variant="primary"
          className="btn btn-primary my-3 d-block w-50 mx-auto"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {errorElement}
      <p>
        Don't have an Account?
        <Link to="/register" className="text-primary">
          Register Please.
        </Link>
      </p>
      <SocialLogIn />
      <ToastContainer />
    </div>
  );
};

export default Login;
