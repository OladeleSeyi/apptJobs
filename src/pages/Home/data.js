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
					We <HighlightedText>Hunt</HighlightedText> you{' '}
					<HighlightedText>Apply</HighlightedText>
				</>
			),
			// paragraph: 'Automate your Job Search On WhatsApp Get Started',

			img: 'null',
		},
		mainFeature: {
			heading: (
				<>
					<HighlightedText>Focus</HighlightedText> on the jobs you
					want.
				</>
			),
			subheading: <Subheading>VACANCIES ON THE FLY</Subheading>,
			description:
				'We aim to relieve the stress and time it takes to search for jobs and also provide career enhancing opportunities to every job seeker.',
			imageSrc: prototypeIllustrationImageSrc,
		},
	},
	employer: {
		hero: {
			heading: (
				<>
					We <HighlightedText>Hunt</HighlightedText> you{' '}
					<HighlightedText>Interview</HighlightedText>
				</>
			),
			paragraph: 'Automate your headhunting process',
			img: 'null',
		},
		mainFeature: {
			heading: (
				<>
					<HighlightedText>Focus</HighlightedText> on the right
					Candidates.
				</>
			),
			subheading: <Subheading>Hire the Right Candidates</Subheading>,
			description:
				"Hiring doesn't have to be a stress ridden gamble. We connect you the apt candidate for your vacant roles.",
			imageSrc: prototypeIllustrationImageSrc,
		},
	},
};
