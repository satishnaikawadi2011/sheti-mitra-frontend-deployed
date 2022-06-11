import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner/Banner';
import bg from '../assets/images/farm.jpg';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import { Helmet } from 'react-helmet';
import { APP_NAME } from '../constants';

const Hero = styled.section`
	width: 100%;
	height: 100vh;
	background: url(${bg});
	background-color: rgba(39, 39, 39, .7);
	background-blend-mode: color-burn;
	background-repeat: no-repeat;
	background-position: left center;
	background-size: cover;
	position: relative;
`;

const HomePage = () => {
	return (
		<Hero>
			<Helmet>
				<title>
					Hello from {APP_NAME} | {APP_NAME}
				</title>
			</Helmet>
			<PageWrapper>
				<Banner />
			</PageWrapper>
		</Hero>
	);
};

export default HomePage;
