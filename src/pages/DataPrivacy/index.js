import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
// import tw from 'twin.macro';
import styled from 'styled-components'; //eslint-disable-line
import { css } from 'styled-components/macro'; //eslint-disable-line
import Privacy from './components/PrivacyPolicy';

// const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
	return (
		<AnimationRevealPage disabled>
			<Privacy />
		</AnimationRevealPage>
	);
};
