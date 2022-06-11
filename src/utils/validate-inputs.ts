export function isNumeric(str: string) {
	if (typeof str != 'string') return false; // we only process strings!
	return (
		!isNaN(str as any) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
	); // ...and ensure strings of whitespace fail
}

export function isValidPh(str: string) {
	if (typeof str != 'string') return false;

	if (!isNaN(str as any) && !isNaN(parseFloat(str))) {
		return parseFloat(str) >= 0.0 && parseFloat(str) <= 14.0;
	}
	else {
		return false;
	}
}

export interface ICropRecommendationInputValues {
	nitrogen: string;
	phosphorous: string;
	pottasium: string;
	ph: string;
	rainfall: string;
	temperature: string;
	humidity: string;
}

export const validateCropRecommendationInputs = (values: ICropRecommendationInputValues) => {
	let res = { isValid: true, message: '' };

	Object.values(values).forEach((val) => {
		if (val.trim() == '') {
			res.isValid = false;
			res.message = 'All fields are required!!';
		}
	});

	if (!res.isValid) return res;

	if (!isNumeric(values.nitrogen)) {
		res.isValid = false;
		res.message = 'Nitrogen content value should be numeric!';
		return res;
	}

	if (!isNumeric(values.phosphorous)) {
		res.isValid = false;
		res.message = 'Phosphorous content value should be numeric!';
		return res;
	}

	if (!isNumeric(values.pottasium)) {
		res.isValid = false;
		res.message = 'Pottasium content value should be numeric!';
		return res;
	}

	if (!isNumeric(values.humidity)) {
		res.isValid = false;
		res.message = 'Please enter a valid relative humidity %!';
		return res;
	}

	if (!isNumeric(values.rainfall)) {
		res.isValid = false;
		res.message = 'Rainfall amount value should be numeric!';
		return res;
	}

	if (!isNumeric(values.temperature)) {
		res.isValid = false;
		res.message = 'Temperature value should be numeric!';
		return res;
	}

	if (!isNumeric(values.ph)) {
		res.isValid = false;
		res.message = 'Ph value of the soil should be numeric!';
		return res;
	}

	if (!isValidPh(values.ph)) {
		res.isValid = false;
		res.message = 'Please enter a valid ph value of the soil!';
		return res;
	}

	return res;
};
