import { ICropRecommendationInputValues } from '../utils/validate-inputs';
import client from './client';

const recommendCrop = (values: ICropRecommendationInputValues) => {
	return client.post(`/recommend_crop`, values);
};

export default {
	recommendCrop
};
