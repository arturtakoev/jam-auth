import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

export default function Login({ toggleModal }) {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret");
  }

  return (
    <>
      <h1>Log in or Sign up</h1>
      <button onClick={toggleModal}>Log in</button>
    </>
  );
}
