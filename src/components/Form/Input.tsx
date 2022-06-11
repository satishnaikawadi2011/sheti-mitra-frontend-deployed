import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div``;
const Label = styled.label`
	display: block;
	font-weight: bold;
	letter-spacing: 0.15rem;
	margin-bottom: 10px;
	margin-top: 20px;
`;
const StyledInput = styled.input`
	padding: 0.5rem;
	width: 100%;
	border: none;
	border-bottom: 2px solid ${(props) => props.theme.palette.primary};
	background-color: ${(props) => props.theme.palette.common.bgCard};
	color: #fff;
	&:focus {
		outline: 0;
	}
`;

interface IProps {
	label: string;
}

const Input: React.FC<IProps & React.HTMLProps<HTMLInputElement>> = ({ label, ...props }) => {
	return (
		<FormGroup>
			<Label>{label}</Label>
			<StyledInput {...props as any} />
		</FormGroup>
	);
};

export default Input;
