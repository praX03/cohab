import React from "react";
import Layout from "../layouts/mainLayout.jsx";
import Hero from "../components/Hero.jsx";
import CalltoAction from "../components/CalltoAction.jsx";
import PageDecoration from "../components/PageIllustration.jsx";
function Index() {
  return (
    <Layout classStyles="max-w-screen overflow-hidden">
      <PageDecoration />
      <Hero />
      <CalltoAction />
    </Layout>
  );
}

export default Index;
