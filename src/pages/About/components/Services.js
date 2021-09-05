import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import {
  SectionHeading as Heading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`text-center`;
const Services = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const ServicesContainer = tw.div`mt-16 lg:w-1/3`;
const Service = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const ServiceName = tw.p`mt-5 text-gray-900 text-4xl font-black uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  subheading = "Services",
  heading = "What we Do",
  services = [
    {
      imageSrc:
        "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fc6a19ece7225449ecbb3e4_feather2-17-white.svg",
      quote:
        "Receive matching vacancies that meet your criteria in different industries and sectors across Nigeria of your choosing",
      serviceName: "Matching",
    },
    {
      imageSrc:
        "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fce32842336956d4eb8a3e8_cv-p-500.png",
      quote:
        "Kickstart your career with individual tailored CV that sets you apart.",
      serviceName: "Presentation",
    },
    {
      imageSrc:
        "https://uploads-ssl.webflow.com/5f85aa9f0cd6a73652e67ae3/5fc6c949c7d330ae0e8fc875_5fc6a0e1437e4009c381f310_iconmonstr-bar-chart-4-icon.png",
      quote:
        "We provide exceptional and data driven career advice including providing materials for your career advancement.",
      serviceName: "Guidance",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Services>
          {services.map(({ imageSrc, serviceName, quote }, index) => (
            <ServicesContainer key={index}>
              <Service>
                <ServiceName>{serviceName}</ServiceName>
                <Image src={imageSrc} />
                <Quote>"{quote}"</Quote>
              </Service>
            </ServicesContainer>
          ))}
        </Services>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
