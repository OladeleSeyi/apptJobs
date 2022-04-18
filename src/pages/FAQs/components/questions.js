import React, { useState } from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import { SectionHeading } from 'components/misc/Headings.js';

import { ReactComponent as SvgDecoratorBlob3 } from 'images/svg-decorator-blob-3.svg';

import whatsapp from 'images/whatsapp-faq.svg';
import questionMark from 'images/question-mark.svg';
import naira from 'images/naira.svg';
import resume from 'images/resume-icon.svg';

import start from 'images/start.svg';

import money from 'images/money.svg';

import infinity from 'images/infinity.svg';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
	${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
	${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
	${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
	.imageContainer {
		${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
		img {
			${tw`w-8 h-8`}
		}
	}

	.textContainer {
		${tw`mt-6 text-center`}
	}

	.title {
		${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
	}

	.description {
		${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
	}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
	${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const whatIsApptFaq = [
	<div>
		{
			<p>
				Appt Jobs delivers matching vacancies and opportunities related
				to your career interests for your direct and quick application
				straight to your WhatsApp. <br /> We scour the internet and job
				platforms daily and review hundreds of jobs so you don't have
				to. We relieve you of the headache involved in sourcing and
				assessing vacancies. We take that bulk of time and energy off
				you while you focus on other important areas, making your job
				hunt easy and less time-consuming. <br /> Save hours of job
				hunting each week and be the first to know about new offers.
			</p>
		}{' '}
	</div>,
];

const whyWhatsappFaq = [
	<div>
		{
			<p>
				For your easy and quick application as it is the preferred
				social messaging application
			</p>
		}
	</div>,
];

const howMuchFaq = [
	<div>
		{
			<p>
				Receive vacancies and career opportunities directly to your
				WhatsApp. Subscription range from ₦1,000 to ₦4,400 a month,
				dependent on your work experience. No extra costs, no salary
				cuts.
			</p>
		}
	</div>,
];

const cvFaq = [
	<div>
		{
			<p>
				Yes, they are by default necessary for job applications to give
				an edge. <br /> Create a winning CV{' '}
				<a href='https://flowcv.io/'>here</a> <br />
				Contact our Customer Support for a winning Cover Letter
				<a href='https://wa.me/message/H6LUUKPUCUEBN1'>here</a> <br />
				Cover Letter is best sent as the body of the mail, not as an
				attached document, did you know that?
			</p>
		}
	</div>,
];

const startFaq = [
	<div>
		{
			<p>
				You can easily register by clicking on{' '}
				<a href='https://wa.me/message/H6LUUKPUCUEBN1'>Get Started</a>{' '}
				to register or on the Webpage.
			</p>
		}
	</div>,
];

const howManyFaq = [
	<div>
		{
			<p>
				Vacancies and opportunities are based on availability. Once
				there is an opening, it will be sent to you on WhatsApp. This
				way, the jobs you receive are tailored specifically to your
				career interest.
			</p>
		}
	</div>,
];

const payFaq = [
	<div>
		{
			<p>
				No, we do not take salary cuts or demand any form of future
				payment after job security.
			</p>
		}
	</div>,
];

export default () => {
	/*
	 * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
	 *  1) imageSrc - the image shown at the top of the card
	 *  2) title - the title of the card
	 *  3) description - the description of the card
	 *  If a key for a particular card is not provided, a default value is used
	 */

	const [readMore, setReadMore] = useState(false);
	const linkName = readMore ? 'Read Less << ' : 'Read More >> ';

	const cards = [
		{
			imageSrc: questionMark,
			title: 'What is Appt Jobs?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && whatIsApptFaq}
				</div>
			),
		},
		{
			imageSrc: resume,
			title: 'Do I need a CV, Cover Letter?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && cvFaq}
				</div>
			),
		},
		{
			imageSrc: whatsapp,
			title: 'Why Whatsapp?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && whyWhatsappFaq}
				</div>
			),
		},
		{
			imageSrc: start,
			title: 'How do I start?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && startFaq}
				</div>
			),
		},
		{
			imageSrc: infinity,
			title: 'How many jobs vacancies will I receive?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && howManyFaq}
				</div>
			),
		},
		{
			imageSrc: money,
			title: 'Do I have to pay for a Job?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && howMuchFaq}
				</div>
			),
		},

		{
			imageSrc: naira,
			title: 'Do I have to pay once I secure a job?',
			description: (
				<div>
					<button
						onClick={() => {
							setReadMore(!readMore);
						}}>
						<h2>{linkName}</h2>
					</button>
					{readMore && payFaq}
				</div>
			),
		},
	];

	return (
		<Container>
			<ThreeColumnContainer>
				<Heading>Frequently Asked Questions</Heading>
				{cards.map((card, i) => (
					<Column key={i}>
						<Card>
							<span className='imageContainer'>
								<img src={card.imageSrc} alt='' />
							</span>
							<span className='textContainer'>
								<span className='title'>{card.title}</span>
								<p className='description'>
									{card.description}
								</p>
							</span>
						</Card>
					</Column>
				))}
			</ThreeColumnContainer>
			<DecoratorBlob />
		</Container>
	);
};
