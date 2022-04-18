import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h3 className="text-primary text-center mt-5">
        Here is all question and answer
      </h3>
      <div className="container">
        <div className="row g-4 mt-4">
          <div className="col-12 col-md-6 ">
            <h6>Difference between Authentication vs Authorization? </h6>
            <p>
              <span className="text-primary">Authentication: </span>
              Authentication is the process of verifying someone. Authentication
              is done before the authorization process. In the authentication
              process, the identity of users are checked for providing the
              access to the system. Authentication enables organizations to keep
              their networks secure Passwords are the most common methods of
              authentication. Passwords can be in the form of a string of
              letters, numbers, or special characters
            </p>
            <p>
              <span className="text-primary">Authorization: </span>{" "}
              Authorization is the process of verifying what specific
              applications, files, and data a user has access to. The
              authorization process is done after the authentication process.
              Giving someone permission to download a particular file on a
              server or providing individual users with administrative access to
              an application are good examples of authorization
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h6>Why are you using firebase?</h6>
            <p>
              Firebase is a Google-backed application development software that
              enables developers to develop iOS, Android and Web apps. Firebase
              provides tools for tracking analytics, reporting and fixing app
              crashes, creating marketing and product experiment.
            </p>

            <h6>What other options do you have to implement authentication?</h6>
            <p>
              Passwords are the most common method of authentication. Beside
              that, Other ways to authenticate can be through Multi-factor
              authentication, Certificate-based authentication, biometric
              authentication, Token-based authentication, and cards, retina
              scans, voice recognition, and fingerprints match.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h6>
              What other services does firebase provide other than
              authentication?
              <p>
                There are many services which Firebase provides, Most useful of
                them are:
              </p>
              <p>
                <ul>
                  <li>Cloud Firestore.</li>
                  <li>Cloud Messaging</li>
                  <li>Cloud Storage</li>
                  <li>Cloud Functions</li>
                  <li>Authentication</li>
                  <li>Hosting</li>
                  <li>Google Analytics</li>
                  <li>Predictions</li>
                </ul>
                etc.
              </p>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
