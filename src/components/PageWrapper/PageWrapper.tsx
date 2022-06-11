import React from 'react';
import Header from '../Navbar/Header';

interface IProps {
	children?: React.ReactNode;
}

const PageWrapper: React.FC<IProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Header
				items={[
					{ label: 'Home', path: '/' },
					{ label: 'Crop Recommendation', path: '/recommend-crop' }
				]}
			/>
			{children}
		</React.Fragment>
	);
};

export default PageWrapper;
