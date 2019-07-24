import produce from 'immer';

import appReducer from '../reducer';
import { loadWeather, weatherLoaded, weatherLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentCity: false,
      weatherData: {
        weather: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadWeather action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.weatherData.weather = false;
    });

    expect(appReducer(state, loadWeather())).toEqual(expectedResult);
  });

  it('should handle the weatherLoaded action correctly', () => {
    const fixture = {
      data: [{}],
    };
    const cityname = 'test';
    const expectedResult = produce(state, draft => {
      [draft.weatherData.weather] = fixture.data;
      draft.loading = false;
      draft.currentCity = cityname;
    });
    expect(appReducer(state, weatherLoaded(fixture, cityname))).toEqual(
      expectedResult,
    );
  });

  it('should handle the weatherLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, weatherLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
