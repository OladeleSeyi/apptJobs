import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";

//  STyled Cmponents
const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;

export const pageDataOptions = {
  employee: {
    hero: {
      heading: (
        <>
          We <HighlightedText>Hunt</HighlightedText>, you{" "}
          <HighlightedText>Apply</HighlightedText>
        </>
      ),
      // paragraph: 'Automate your Job Search On WhatsApp Get Strted',

      img: "null",
    },
    mainFeature: {
      heading: (
        <>
          <HighlightedText>Focus</HighlightedText> on the jobs <br />
          you want.
        </>
      ),
      subheading: <Subheading>VACANCIES ON THE FLY</Subheading>,
      description: (
        <>
          We scour the internet, job platforms daily and review hundreds of
          jobs, relieving you of the headache involved in sourcing and assessing
          vacancies. <br />
          <br />
          We take that bulk of time and energy off you while you focus on other
          important areas, making your job hunt easy and less time consuming
        </>
      ),
      imageSrc: prototypeIllustrationImageSrc,
    },
  },
  employer: {
    hero: {
      heading: (
        <>
          We <HighlightedText>Hunt</HighlightedText> you{" "}
          <HighlightedText>Interview</HighlightedText>
        </>
      ),
      paragraph: "Autoimate your headhunting process",
      img: "null",
    },
    mainFeature: {
      heading: (
        <>
          <HighlightedText>Focus</HighlightedText> on the right Candidates.
        </>
      ),
      subheading: <Subheading>Hire the Right Candidates</Subheading>,
      description:
        "Hiring doesn't have to be a stress ridden gamble. We connect you the apt candidate for your vacant roles.",
      imageSrc: prototypeIllustrationImageSrc,
    },
  },
};
