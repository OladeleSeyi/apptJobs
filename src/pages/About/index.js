import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/custom/Header";
import Footer from "components/custom/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Hero
        subheading={<Subheading>About APPT</Subheading>}
        heading="Job Hunting could be easier"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <Services />
      <Footer />
    </AnimationRevealPage>
  );
};
