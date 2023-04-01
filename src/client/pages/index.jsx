import React from "react";
import Layout from "../layouts/mainLayout.jsx";
import Hero from "../components/Hero.jsx";
import CalltoAction from "../components/CalltoAction.jsx";
function Index() {
  return (
    <Layout>
      <Hero />
      <CalltoAction />
    </Layout>
  );
}

export default Index;
