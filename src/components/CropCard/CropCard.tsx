import React from 'react';
import styled from 'styled-components';

interface IProps {
	children?: React.ReactNode;
	crop: string;
}

const CardWrapoper = styled.div`
	width: 500px;
	padding: 40px;
	text-align: center;
	border-radius: 20px;
	border: 2px solid ${(props) => props.theme.palette.primary};
	h1 {
		color: ${(props) => props.theme.palette.primary};
	}
	&:hover {
		background-color: ${(props) => props.theme.palette.primary};
		h1 {
			color: #fff;
		}
	}
	transition: all 0.2s linear;
`;

const CropCard: React.FC<IProps> = ({ crop, children }) => {
	return (
		<CardWrapoper>
			<h1 style={{ marginBottom: 15 }}>Recommended Crop</h1>
			<h1>{crop}</h1>
		</CardWrapoper>
	);
};

export default CropCard;
