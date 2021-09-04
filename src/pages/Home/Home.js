import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImage";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />

      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VACANCIES ON THE FLY</Subheading>}
        description={
          "We aim to relieve the stress and time it takes to search for jobs and also provide career enhancing opportunities to every job seeker."
        }
        heading={
          <>
            <HighlightedText>Focus</HighlightedText> on the jobs you want.
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[]}
      />

      <Testimonial
        // subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        // description=""
        testimonials={[
          {
            imageSrc:
              "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fac117173389882c60aeae7_testimonial.jpg",
            heading: "Amazing User Experience",
            quote:
              "I’d like to express my gratitude for your help over the past couple of months.I’ve been able to secure another job. The service you render is a good initiative and i hope you’re able to better serve more people that are seeking job opportunities just like i was. Thanks you once again. 🙏🏽",
            customerName: "Latade Igbodipe ",
            customerTitle: "UI Designer, Crowdyvest",
          },
          {
            imageSrc:
              "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fac117106ebf1625a2645f3_testimonial%202.jpg",

            quote: "Thank you!!! I got the job",
            customerName: "Nnenna Aroh",
            customerTitle: "Account Officer, Cedars School.",
          },
          {
            imageSrc:
              "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fac1171a59c9ca4647234af_testimonial%203.jpg",

            quote:
              "I got the job from your servcice. Thank you for your impact",
            customerName: "John Etim",
            customerTitle: "Shoms Int. College",
          },
        ]}
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};
