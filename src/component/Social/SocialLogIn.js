import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, , gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  return (
    <div>
      <div className="d-flex">
        <div
          style={{ height: "1px" }}
          className="mt-3 bg-success w-50
        "
        ></div>
        <p className="mx-2 ">
          <small>or</small>
        </p>
        <div
          style={{ height: "1px" }}
          className="mt-3 bg-success w-50
        "
        ></div>
      </div>
      <div className="">
        <button
          className="btn btn-secondary my-3 d-block w-50 mx-auto"
          onClick={() => signInWithGoogle()}
        >
          Sign In with Google
        </button>
        <button
          className="btn btn-primary d-block w-50 mx-auto"
          onClick={() => signInWithGithub()}
        >
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
