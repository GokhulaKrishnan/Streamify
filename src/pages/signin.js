import React, { use, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Checking if the Sign In should be disabled or not
  const isInValid = emailAddress === "" || password === "";

  console.log(isInValid);

  // here we are handling the Signin
  const handleSignin = (event) => {
    event.preventDefault();

    // Firebase work here!
    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        //push to the browser page.
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disable={isInValid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign Up Now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaptcha to ensure you are not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
