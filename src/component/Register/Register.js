import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogIn from "../Social/SocialLogIn";
import Loading from "../Loading/Loading";
import { async } from "@firebase/util";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    await createUserWithEmailAndPassword(email, password);
    console.log(name, email, password, confirmPassword);

    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/home");

    if (password !== confirmPassword) {
      return error;
    }
  };
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (loading) {
    return <Loading />;
  }

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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`ps-3 ${agree ? "text-primary" : "text-denger"}`}
          htmlFor="terms"
        >
          Accept terms and condition
        </label>
        {errorElement}
        <Button
          disabled={!agree}
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
