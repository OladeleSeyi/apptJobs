import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "./components/ContactForm";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

export default () => {
  return (
    <AnimationRevealPage>
      <ContactUsForm />
    </AnimationRevealPage>
  );
};
