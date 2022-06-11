import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { APP_NAME } from '../../constants';
import { NormalButton, OutlinedButton } from '../Button/Button';
import { Container } from '../Container/Container';

const StyledBanner = styled.section`
	margin-top: 150px;
	@media screen and (max-width: 740px) {
		margin-top: 100px;
	}
`;

const BannerContainer = styled(Container)`
    padding: 0px 7%;
`;

const Details = styled.div`
	width: 350px;
	margin-bottom: 40px;
	color: #e4e4e4;
	h1 {
		font-size: 50px;
		font-weight: 600;
		line-height: 1;
		margin-bottom: 20px;
	}
`;

const Actions = styled.div``;

const Banner = () => {
	const navigate = useNavigate();
	return (
		<StyledBanner>
			<BannerContainer>
				<Details>
					<h1>Helps farmers to grow</h1>
					<p>
						{APP_NAME} is the project build with Machine Learning to help farmers by recommending them best
						suited crop for their farm.
					</p>
				</Details>
				<Actions>
					<NormalButton onClick={() => navigate('/recommend-crop')}>Try It</NormalButton>
					<OutlinedButton onClick={() => navigate('/recommend-crop')}>Know more</OutlinedButton>
				</Actions>
			</BannerContainer>
		</StyledBanner>
	);
};

export default Banner;
