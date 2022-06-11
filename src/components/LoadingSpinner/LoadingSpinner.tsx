import React from 'react';
import classes from './loader.module.css';

const LoadingSpinner = () => {
	return (
		<div className={classes.lds__roller}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};

export default LoadingSpinner;
