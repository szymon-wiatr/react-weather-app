import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
} from '../constants';

import { loadWeather, weatherLoaded, weatherLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadWeather', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_WEATHER,
      };

      expect(loadWeather()).toEqual(expectedResult);
    });
  });

  describe('weatherLoaded', () => {
    it('should return the correct type and the passed weather', () => {
      const fixture = ['Test'];
      const cityname = 'test';
      const expectedResult = {
        type: LOAD_WEATHER_SUCCESS,
        weather: fixture,
        cityname,
      };

      expect(weatherLoaded(fixture, cityname)).toEqual(expectedResult);
    });
  });

  describe('weatherLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_WEATHER_ERROR,
        error: fixture,
      };

      expect(weatherLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
