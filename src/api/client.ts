import { BACKEND_URL } from './../constants/index';
import { create } from 'apisauce';

const apiClient = create({
	baseURL: BACKEND_URL
});

export default apiClient;
