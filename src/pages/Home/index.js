import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./components/Hero";

import MainFeature2 from "./components/About";
import Testimonial from "components/testimonials/TwoColumnWithImage";
import CTA from "./components/CTA";


// import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
// import Modal from "./components/Modal";
import { pageDataOptions } from "./data";
// Styled Components
// import FAQs from 'pages/FAQs';
// const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;

const HighlightedText = tw.span`text-primary-500`;

//   					quote: 'I got the job from your servcice. Thank you for your impact',
// 						customerName: 'John Etim',
// 						customerTitle: 'Shoms Int. College',
// 					},
// 				]}
// 			/>
// 			{/* Testimonial */}
// 			<CTA />
// 			<FAQs />
// 		</AnimationRevealPage>
// 	);
// };;
// =======
export default () => {

  // is the viewer an employee
  const [isEmployee] = React.useState(() =>
    JSON.parse(window.localStorage.getItem("userType"))
  );

  // Set Appropriate UI Text
  const [{ hero, mainFeature }] = React.useState(pageDataOptions.employee);

  React.useEffect(() => {
    window.localStorage.setItem("userType", isEmployee);
  }, [isEmployee]);

  return (
    <AnimationRevealPage disabled>
      <Hero
        heading={hero.heading}
        paragraph={hero.paragraph}
        roundedHeaderButton={true}
      />
      {/* Main Gist  */}
      <MainFeature2
        subheading={mainFeature.subheading}
        description={mainFeature.description}
        heading={mainFeature.heading}
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[]}
      />
      {/* End Main Gist  */}

      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            imageSrc:
              "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fac117173389882c60aeae7_testimonial.jpg",
            heading: "Amazing User Experience",
            quote:
              "I’d like to express my gratitude for your help over the past couple of months.I’ve been able to secure another job. The service you render is a good initiative and I hope you’re able to better serve more people that are seeking job opportunities just like i was. Thanks you once again. 🙏🏽",
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
      {/* Testimonial */}
      <CTA />
    </AnimationRevealPage>
  );
};

