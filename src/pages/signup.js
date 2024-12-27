import React, { use, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const isInValid = password === "" || emailAddress === "" || firstName === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    // do the firebase thing here
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1, // Assign random photo URL
        });
      })
      .then(() => {
        navigate(ROUTES.BROWSE); // Redirect to Browse page
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setFirstName("");
        setError(error.message);
      });
  };

  console.log(isInValid);
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onClick={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit type="submit">Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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
