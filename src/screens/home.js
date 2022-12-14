import React from "react";
import Layout from "../components/Layout";
import FieldEngineer from "./fieldEngineer";
import { useParams } from "react-router-dom";

function Home() {
  const { role } = useParams();

  if (role !== "fe") {
    return <h2>404 Not Found</h2>;
  }

  return (
    <Layout>
      home
      {role === "fe" && <FieldEngineer />}
    </Layout>
  );
}

export default Home;
