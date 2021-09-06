import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;
const RadioInput = tw.input(
  Input
)`rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50`;

const RadioDiv = tw.div`grid grid-cols-3 gap-2 place-items-start`;
const RadioLabel = tw.label`py-2 m-2 text-gray-700 `;

const RadioSpan = tw.span`ml-2`;

const SelectLabel = tw.label`inline-block`;

const Select = tw.select`form-select flex w-full mt-1`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "GET EMPLOYED",
  heading = (
    <>
      Find your <span tw="text-primary-500">Apt</span>
      <wbr /> Candidate.
    </>
  ),
  description = "Fill the form to get updates of preferred vacancies.",
  submitButtonText = "Get Hired",
  formAction = "#",
  formMethod = "get",
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="./featureImage.png" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input type="text" name="name" placeholder="Company Name" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email Address"
              />

              <Input type="text" name="vacancy" placeholder="Vacant Role" />

              <Textarea name="message" placeholder="Job Description" />

              <RadioDiv>
                <RadioLabel>Gender</RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    className="form-radio"
                    name="accountType"
                    value="male"
                  />
                  <RadioSpan>Male</RadioSpan>
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    className="form-radio"
                    name="accountType"
                    value="female"
                  />
                  <RadioSpan>Female</RadioSpan>
                </RadioLabel>
              </RadioDiv>

              <SelectLabel>
                <span tw="text-gray-700">Industry</span>
                <Select>
                  <option>Select One </option>
                  <option>Option 2</option>
                  <option>Option 2</option>
                  <option>Option 2</option>
                </Select>
              </SelectLabel>

              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
