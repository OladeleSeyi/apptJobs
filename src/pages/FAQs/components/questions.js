import React from "react";

import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import whatsapp from "images/whatsapp-faq.svg";
import questionMark from "images/question-mark.svg";
import naira from "images/naira.svg";
import resume from "images/resume-icon.svg";

import start from "images/start.svg";

import money from "images/money.svg";

import infinity from "images/infinity.svg";
import Question from "./question";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const whatIsApptFaq = [
  <>
    {
      <p>
        Appt Jobs delivers matching vacancies and opportunities related to your
        career interests for your direct and quick application straight to your
        WhatsApp. <br /> We scour the internet and job platforms daily and
        review hundreds of jobs so you don't have to. We relieve you of the
        headache involved in sourcing and assessing vacancies. We take that bulk
        of time and energy off you while you focus on other important areas,
        making your job hunt easy and less time-consuming. <br /> Save hours of
        job hunting each week and be the first to know about new offers.
      </p>
    }{" "}
  </>,
];

const whyWhatsappFaq = [
  <>
    {
      <p>
        For your easy and quick application as it is the preferred social
        messaging application
      </p>
    }
  </>,
];

const howMuchFaq = [
  <>
    {
      <p>
        Receive vacancies and career opportunities directly to your WhatsApp.
        Subscription range from ₦1,000 to ₦4,400 a month, dependent on your work
        experience. No extra costs, no salary cuts.
      </p>
    }
  </>,
];

const cvFaq = [
  <>
    {
      <p>
        Yes, they are by default necessary for job applications to give an edge.{" "}
        <br /> Create a winning CV <a href="https://flowcv.io/">here</a> <br />
        Contact our Customer Support for a winning Cover Letter
        <a href="https://wa.me/message/H6LUUKPUCUEBN1">here</a> <br />
        Cover Letter is best sent as the body of the mail, not as an attached
        document, did you know that?
      </p>
    }
  </>,
];

const startFaq = [
  <>
    {
      <p>
        You can easily register by clicking on{" "}
        <a href="https://wa.me/message/H6LUUKPUCUEBN1">Get Started</a> to
        register or on the Webpage.
      </p>
    }
  </>,
];

const howManyFaq = [
  <>
    {
      <p>
        Vacancies and opportunities are based on availability. Once there is an
        opening, it will be sent to you on WhatsApp. This way, the jobs you
        receive are tailored specifically to your career interest.
      </p>
    }
  </>,
];

const payFaq = [
  <>
    {
      <p>
        No, we do not take salary cuts or demand any form of future payment
        after job security.
      </p>
    }
  </>,
];

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  // TODO : give the elements keys

  const cards = [
    {
      imageSrc: questionMark,
      title: "What is Appt Jobs?",
      description: whatIsApptFaq,
    },
    {
      imageSrc: resume,
      title: "Do I need a CV, Cover Letter?",
      description: cvFaq,
    },
    {
      imageSrc: whatsapp,
      title: "Why Whatsapp?",
      description: whyWhatsappFaq,
    },
    {
      imageSrc: start,
      title: "How do I start?",
      description: startFaq,
    },
    {
      imageSrc: infinity,
      title: "How many jobs vacancies will I receive?",
      description: howManyFaq,
    },
    {
      imageSrc: money,
      title: "Do I have to pay for a Job?",
      description: howMuchFaq,
    },
    {
      imageSrc: naira,
      title: "Do I have to pay once I secure a job?",
      description: payFaq,
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Frequently Asked Questions</Heading>
        {cards.map((card, i) => (
          <Question key={i} card={card} />
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
