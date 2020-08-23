import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";

export default () => (
  <Layout>
    <h1>This is H1</h1>
    <p>Log in to find out more</p>
    <Link to="/dashboard">Go to the Dashboard</Link>
  </Layout>
);
