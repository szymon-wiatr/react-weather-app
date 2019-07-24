import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_WEATHER } from 'containers/App/constants';
import { weatherLoaded, weatherLoadingError } from 'containers/App/actions';

import githubData, { getWeather } from '../saga';

const cityname = 'Skarżysko-Kamienna';

/* eslint-disable redux-saga/yield-effects */
describe('getWeather Saga', () => {
  let getWeatherGenerator;

  beforeEach(() => {
    getWeatherGenerator = getWeather();

    const selectDescriptor = getWeatherGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getWeatherGenerator.next(cityname).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the weatherLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'Warsaw',
      },
      {
        name: 'London',
      },
    ];
    const putDescriptor = getWeatherGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(weatherLoaded(response, cityname)));
  });

  it('should call the weatherLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getWeatherGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(weatherLoadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for LOAD_WEATHER action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_WEATHER, getWeather));
  });
});
