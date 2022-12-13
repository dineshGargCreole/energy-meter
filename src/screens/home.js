import React from "react";
import Layout from "../components/Layout";
import FieldEngineer from "./fieldEngineer";
import { useParams } from "react-router-dom";

function Home() {
  const { role } = useParams();

  return (
    <Layout>
      home
      {role === "fe" && <FieldEngineer />}
    </Layout>
  );
}

export default Home;
