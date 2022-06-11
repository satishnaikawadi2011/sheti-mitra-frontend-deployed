import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NormalButton } from '../components/Button';
import Input from '../components/Form/Input';
import { darkTheme } from '../styles/themes/dark';
import { validateCropRecommendationInputs } from '../utils/validate-inputs';
import cropApi from '../api/crop';
import useApi from '../hooks/useApi';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import CropCard from '../components/CropCard/CropCard';

const StyledForm = styled.form`width: 550px;`;

const RecommendCropPage = () => {
	const { data, error: apiErr, loading, request } = useApi(cropApi.recommendCrop);

	const [
		nitrogen,
		setNitrogen
	] = useState('');
	const [
		pottasium,
		setPottasium
	] = useState('');
	const [
		phosphorous,
		setPhosphorous
	] = useState('');
	const [
		ph,
		setPh
	] = useState('');
	const [
		rainfall,
		setRainfall
	] = useState('');
	const [
		temperature,
		setTemperature
	] = useState('');
	const [
		humidity,
		setHumidity
	] = useState('');

	const [
		error,
		setError
	] = useState('');

	useEffect(
		() => {
			if (data) {
				console.log(data);
			}
		},
		[
			data
		]
	);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const validationRes = validateCropRecommendationInputs({
			humidity,
			nitrogen,
			ph,
			phosphorous,
			pottasium,
			rainfall,
			temperature
		});
		if (validationRes.isValid) {
			setError('');
		}
		else {
			setError(validationRes.message);
			return;
		}
		request({ humidity, nitrogen, ph, phosphorous, pottasium, rainfall, temperature });
	};

	if (loading) {
		return (
			<div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
				<LoadingSpinner />
			</div>
		);
	}

	if (data) {
		return (
			<PageWrapper>
				<div
					style={{
						display: 'flex',
						height: 'calc(80vh)',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<CropCard crop={(data as any).crop} />
				</div>
			</PageWrapper>
		);
	}

	return (
		<PageWrapper>
			<h1 style={{ textAlign: 'center', color: darkTheme.palette.primary }}>Crop Recommendation</h1>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<StyledForm>
					<Input
						label="Nitrogen Content"
						placeholder="Enter ratio of nitrogen content in soil..."
						value={nitrogen}
						onChange={(e) => setNitrogen(e.currentTarget.value)}
					/>
					<Input
						label="Phosphorous Content"
						placeholder="Enter ratio of phosphorous content in soil..."
						value={phosphorous}
						onChange={(e) => setPhosphorous(e.currentTarget.value)}
					/>
					<Input
						label="Pottasium Content"
						placeholder="Enter ratio of pottasium content in soil..."
						value={pottasium}
						onChange={(e) => setPottasium(e.currentTarget.value)}
					/>
					<Input
						label="Ph"
						placeholder="Enter ph value of the soil..."
						value={ph}
						onChange={(e) => setPh(e.currentTarget.value)}
					/>
					<Input
						label="Temperature (Degree Celcius)"
						placeholder="Enter the temperature..."
						value={temperature}
						onChange={(e) => setTemperature(e.currentTarget.value)}
					/>
					<Input
						label="Rainfall (mm)"
						placeholder="Enter amount of rainfall..."
						value={rainfall}
						onChange={(e) => setRainfall(e.currentTarget.value)}
					/>
					<Input
						label="Relative Humidity (%)"
						placeholder="Enter the % of relative humidity..."
						value={humidity}
						onChange={(e) => setHumidity(e.currentTarget.value)}
					/>
					{error && <p style={{ marginTop: 20, color: ' #ff4d4d' }}>{error}</p>}
					{apiErr && <p style={{ marginTop: 20, color: ' #ff4d4d' }}>{apiErr}</p>}
					<NormalButton onClick={handleSubmit} style={{ width: '100%', marginTop: 20, marginBottom: 20 }}>
						Recommend Crop
					</NormalButton>
				</StyledForm>
			</div>
		</PageWrapper>
	);
};

export default RecommendCropPage;
