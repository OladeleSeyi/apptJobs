import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { css } from "styled-components/macro"; //eslint-disable-line
import ContactUsForm from "./components/ContactForm";

export default () => {
  return (
    <AnimationRevealPage>
      <ContactUsForm />
    </AnimationRevealPage>
  );
};
