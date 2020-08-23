import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

import "./layout.css";

export const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jam-at-intro-auth.netlify.com">
    <header>
      <Link to="/">JAM Link</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);
