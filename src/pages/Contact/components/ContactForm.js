import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

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
  tw`rounded bg-contain bg-no-repeat bg-center h-4/6`,
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
const SubColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl m-3`;
const SubTextContent = tw.div`lg:py-4 text-center md:text-left`;
const Email = tw.a`text-sm mt-6 block text-gray-500 mt-4`;
const Phone = tw.a`text-sm mt-0 block text-gray-500 mt-4`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
	subheading = 'Contact Us',
	heading = (
		<>
			Feel free to <span tw='text-primary-500'>get in touch</span>
			<wbr /> with us.
		</>
	),
	description = 'You can fill and submit the contact form and we will be with you shortly. You can also follow us on social media to stay updated.',
	submitButtonText = 'Send',
	formAction = '#',
	formMethod = 'get',
	textOnLeft = true,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={EmailIllustrationSrc} />
					<SubColumn>
						<SubTextContent>
							<Subheading>CONTACT</Subheading>
							<Description>
								<Email href='mailto:hello@aptjobs.com '>
									apptjobs@gmail.com
								</Email>
								<Phone href='tel:+2349059442848'>
									+2349059442848
								</Phone>
							</Description>
						</SubTextContent>

						<SubTextContent>
							<Subheading>Working Hours</Subheading>
							<Description>9AM - 9PM, Mon to Fri</Description>
						</SubTextContent>
					</SubColumn>
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						{description && (
							<Description>{description}</Description>
						)}

						<Form action={formAction} method={formMethod}>
							<Input
								type='text'
								name='name'
								placeholder='Full Name'
							/>
							<Input
								type='email'
								name='email'
								placeholder='Your Email Address'
							/>

							<Input
								type='text'
								name='subject'
								placeholder='Subject'
							/>
							<Textarea
								name='message'
								placeholder='Your Message Here'
							/>
							<SubmitButton type='submit'>
								{submitButtonText}
							</SubmitButton>
						</Form>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
