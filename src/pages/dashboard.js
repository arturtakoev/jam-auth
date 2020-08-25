import React, { useState, useEffect } from "react";
import { Layout } from "../components/layout.js";
import Profile from "../components/profile";
import RouteBase from "../components/route-base.js";
import RouteSecret from "../components/route-secret.js";
import { Router } from "@reach/router";
import Login from "../components/route-login";
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";

import "react-netlify-identity-widget/styles.css";

const Dashboard = ({ location }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
    return () => {};
  }, [location]);

  const toggleModal = () => setVisible(!isVisible);

  return (
    <Layout>
      <Profile toggleModal={toggleModal} />
      <Router>
        <Login path="dashboard/login" toggleModal={toggleModal} />
        <RouteBase path="dashboard/base" />
        <RouteSecret path="dashboard/secret" />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={toggleModal} />
    </Layout>
  );
};

export default Dashboard;
