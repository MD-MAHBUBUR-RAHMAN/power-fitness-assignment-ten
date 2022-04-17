import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogIn from "../Social/SocialLogIn";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    createUserWithEmailAndPassword(email, password);
    console.log(name, email, password, confirmPassword);

    navigate("/home");
  };

  return (
    <div className="container w-50 mx-auto">
      <h3 className="text-center text-success mt-5">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5 text-secondary">
            Your Name
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold fs-5 text-secondary">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
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
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold fs-5 text-secondary">
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group
          onClick={() => setAgree(!agree)}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          className="btn my-3 d-block w-50 mx-auto"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <p>
        Already have an Account?
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
      <SocialLogIn />
    </div>
  );
};

export default Register;
