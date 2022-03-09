import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import DesignIllustration from "images/design-illustration-2.svg";

import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
	${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
	tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
	props.buttonRounded && tw`rounded-full`,
]);

export default ({
	roundedHeaderButton,
	heading = (
		<>
			We <span tw='text-primary-500'>Hunt</span> you
			<span tw='text-primary-500'>Apply</span>
		</>
	),

	primaryButtonText = 'Get Started',
	primaryButtonUrl = 'https://wa.me/message/H6LUUKPUCUEBN1',
	buttonRounded = true,
	Target = '_blank',

	paragraph = 'Automate your Job Search On WhatsApp',

	img = DesignIllustration,
}) => {
	return (
		<>
			<Container>
				<TwoColumn>
					<LeftColumn>
						<Heading>{heading}</Heading>
						<Paragraph>{paragraph}</Paragraph>
						<PrimaryButton
							buttonRounded={buttonRounded}
							as='a'
							href={primaryButtonUrl}
							target={Target}>
							{primaryButtonText}
						</PrimaryButton>
					</LeftColumn>
					<RightColumn>
						<IllustrationContainer>
							<img
								tw='min-w-0 w-full max-w-lg xl:max-w-3xl'
								src={img}
								alt='Design Illustration'
							/>
						</IllustrationContainer>
					</RightColumn>
				</TwoColumn>
				<DecoratorBlob1 />
			</Container>
		</>
	);
};
