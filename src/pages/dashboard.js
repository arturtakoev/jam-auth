import React, { useEffect } from "react";
import { Layout } from "../components/layout.js";
import Profile from "../components/profile";
import RouteBase from "../components/route-base.js";
import RouteSecret from "../components/route-secret.js";
import { Router } from "@reach/router";
import Login from "../components/route-login";
import { navigate } from "gatsby";

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("dashboard/login", { replace: true });
    }
    return () => {};
  }, [location]);

  return (
    <Layout>
      <Profile />
      <Router>
        <Login path="dashboard/login" />
        <RouteBase path="dashboard/base" />
        <RouteSecret path="dashboard/secret" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
