import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_WEATHER } from 'containers/App/constants';
import { weatherLoaded, weatherLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectCityname } from 'containers/HomePage/selectors';

export function* getWeather() {
  const cityname = yield select(makeSelectCityname());
  const API_KEY = '994a9b1c1fb546a2af4e7a7d92e118b2';
  const requestURL = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=${cityname}`;
  try {
    const weather = yield call(request, requestURL);
    yield put(weatherLoaded(weather, cityname));
  } catch (err) {
    yield put(weatherLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_WEATHER, getWeather);
}
